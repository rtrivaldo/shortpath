"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import { BsFillSignTurnRightFill } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa6";

export default function Redirect({ params }) {
    const router = useRouter();
    const [longUrl, setLongUrl] = useState("");
    const [notFound, setNotFound] = useState(false); // State to track if the link was not found
    const hasFetched = useRef(false); // Ref to track if fetchDataAndIncrementClicks has been called

    const fetchDataAndIncrementClicks = async () => {
        const id = params.id;

        try {
            // Fetch the original URL data
            const response = await fetch(`/api/links/${id}`, { method: "GET" });
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
            const data = await response.json();

            if (!data || !data.longLink) {
                setNotFound(true); // If data is null, set notFound to true
                return;
            }

            setLongUrl(data.longLink);

            // Increment the click count
            const updateResponse = await fetch(`/api/links/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
            });

            if (!updateResponse.ok) {
                throw new Error(`Error updating clicks: ${updateResponse.statusText}`);
            }

            // Proceed with redirect
            router.push(data.longLink);
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    useEffect(() => {
        if (!hasFetched.current) {
            hasFetched.current = true; // Mark as fetched to prevent re-fetching
            fetchDataAndIncrementClicks();
        }
    }, [params.id]);

    if (notFound) {
        return (
            <div className="flex justify-center items-center h-screen px-4">
                <div className="">
                    <h1 className="font-semibold text-4xl">404 | Page not found</h1>

                    <div className="flex justify-center mt-6">
                        <Link href="/" className="bg-neutral-900 text-white px-6 py-2 pb-3 rounded-md font-semibold">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center h-screen px-4">
            <div className="sm:shadow-[0_0_10px_0_rgba(0,0,0,0.3)] rounded-lg p-10 text-center">
                <div className="flex justify-center">
                    <BsFillSignTurnRightFill className="size-24" />
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold mt-6">Hang Tight!</h1>
                <p className="text-lg md:text-xl font-semibold mt-6 leading-tight">
                    You're being redirected to another page, <br className="hidden sm:block" /> it may take up to 10 seconds
                </p>

                <div className="flex justify-center mt-6">
                    <FaSpinner className="animate-spin size-6 my-1" />
                </div>
            </div>
        </div>
    );
}
