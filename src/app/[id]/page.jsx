"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function Redirect({ params }) {
    const router = useRouter();
    const [longUrl, setLongUrl] = useState("");
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

    return null; // This component doesn’t render anything
}
