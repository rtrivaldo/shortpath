"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { FaCheck, FaClipboard, FaSpinner } from "react-icons/fa6";

export default function UrlShortenerCards({ className }) {
    const [menu, setMenu] = useState("url");

    const handleMenu = (event) => {
        const targetId = event.target.id;
        setMenu(targetId);
    };

    const [isClicked, setIsClicked] = useState(false);
    const [isLoadingUrl, setIsLoadingUrl] = useState(false);
    const [isLoadingClicks, setIsLoadingClicks] = useState(false);

    const shortenedUrl = useRef(null);

    const handleCopyToClipboard = () => {
        setIsClicked(true);

        copyToClipboard();

        setTimeout(() => {
            setIsClicked(false);
        }, 3000);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shortenedUrl.current.value).catch((err) => {
            console.error("Failed to copy: ", err);
        });
    };

    const [longLinkValue, setLongLinkValue] = useState("");
    const [shortenedUrlValue, setShortenedUrlValue] = useState("");

    const handleLongLinkInputChange = (event) => {
        const value = event.target.value;
        setLongLinkValue(value);
    };

    const handleGenerateShortUrl = async () => {
        setIsLoadingUrl(true);
        const response = await fetch("/api/links", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                longLink: longLinkValue,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Link created:", data);
            setShortenedUrlValue(`http://localhost:3000/${data.shortLink}`);
        } else {
            console.error("Error creating link");
        }
        setIsLoadingUrl(false);
    };

    const [totalClickValue, setTotalClickValue] = useState("");
    const [totalClick, setTotalClick] = useState(null);

    const handleTotalClickInputChange = (event) => {
        const value = event.target.value;
        setTotalClickValue(value);
    };

    const fetchLinkDetail = async () => {
        const id = totalClickValue.slice(-5);
        const response = await fetch(`/api/links/${id}`, { method: "GET" });

        if (response.ok) {
            const data = await response.json();
            if (data === null) {
                setTotalClick(-1);
            } else {
                setTotalClick(data.clicks);
            }
        } else {
            console.error("Error fetching link details");
        }
    };

    const handleTotalClick = async () => {
        if (totalClickValue !== "") {
            setIsLoadingClicks(true);
            await fetchLinkDetail();
            setIsLoadingClicks(false);
        }
    };

    const [qrCodeValue, setQrCodeValue] = useState("");
    const [qrCodeUrl, setQrCodeUrl] = useState("");

    const handleQrCodeInputChange = (event) => {
        const value = event.target.value;
        setQrCodeValue(value);
        setQrCodeUrl("");
    };

    const handleGenerateQrCode = async () => {
        if (qrCodeValue !== "") {
            setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeValue}`);
        }
    };

    return (
        <>
            {/* menu */}
            <div className="flex justify-center gap-6 mt-10">
                <p className={`px-4 py-1 pb-2 ${menu === "url" ? "bg-neutral-900" : "bg-neutral-500"} hover:bg-neutral-900 text-white rounded-lg font-semibold cursor-pointer`} id="url" onClick={handleMenu}>
                    URL Shortener
                </p>
                <p className={`px-4 py-1 pb-2 ${menu === "clicks" ? "bg-neutral-900" : "bg-neutral-500"} hover:bg-neutral-900 text-white rounded-lg font-semibold cursor-pointer`} id="clicks" onClick={handleMenu}>
                    Track Clicks
                </p>
                <p className={`px-4 py-1 pb-2 ${menu === "qr" ? "bg-neutral-900" : "bg-neutral-500"} hover:bg-neutral-900 text-white rounded-lg font-semibold cursor-pointer`} id="qr" onClick={handleMenu}>
                    QR Codes
                </p>
            </div>

            {/* url shortener form */}
            <div className={`${className} ${menu === "url" ? "" : "hidden"} shadow-[0_0_10px_0_rgba(0,0,0,0.3)] mx-auto mt-6 rounded-lg px-6 py-4 pb-6`}>
                <h2 className="font-semibold text-lg">Paste a long URL</h2>

                <input type="text" className="w-full border border-neutral-300 rounded-lg px-4 py-2 mt-2 font-semibold" placeholder="Example: https://super-long-url.com/shortpath" onChange={handleLongLinkInputChange} />

                <div className="mt-2">
                    <h2 className="font-semibold text-lg">Shortened URL</h2>
                    <div className="flex items-center gap-2">
                        <input type="text" readOnly value={shortenedUrlValue} placeholder="The shortened URL will appear here." ref={shortenedUrl} className="w-full border border-neutral-300 rounded-lg px-4 py-2 mt-2 font-semibold" />
                        <div className="bg-neutral-900 text-white p-2 rounded-md mt-2 cursor-pointer" onClick={handleCopyToClipboard}>
                            <FaClipboard className={`${isClicked ? "hidden" : ""} size-4`} />
                            <FaCheck className={`${isClicked ? "" : "hidden"} size-4`} />
                        </div>
                    </div>
                </div>

                <button className="w-full bg-neutral-900 text-white font-semibold rounded-lg px-4 py-2 mt-6 text-lg flex justify-center items-center" onClick={handleGenerateShortUrl} disabled={isLoadingUrl}>
                    {isLoadingUrl ? <FaSpinner className="animate-spin size-5 my-1" /> : "Shorten URL"}
                </button>
            </div>

            {/* track clicks form */}
            <div className={`${className} ${menu === "clicks" ? "" : "hidden"} shadow-[0_0_10px_0_rgba(0,0,0,0.3)] mx-auto mt-6 rounded-lg px-6 py-4 pb-6`}>
                <h2 className="font-semibold text-lg">Enter your shortened URL</h2>

                <input type="text" className="w-full border border-neutral-300 rounded-lg px-4 py-2 mt-2 font-semibold" placeholder="Example: https://super-long-url.com/shortpath" onChange={handleTotalClickInputChange} />

                <div className="mt-2">
                    <h2 className="font-semibold text-lg">{totalClick === null ? "Total Clicks: -" : totalClick === -1 ? "Shortened URL not found" : `Total Clicks: ${totalClick}`}</h2>
                </div>

                <button className="w-full bg-neutral-900 text-white font-semibold rounded-lg px-4 py-2 mt-6 text-lg flex justify-center items-center" onClick={handleTotalClick} disabled={isLoadingClicks}>
                    {isLoadingClicks ? <FaSpinner className="animate-spin size-5 my-1" /> : "Track Clicks"}
                </button>
            </div>

            {/* qr code form */}
            <div className={`${className} ${menu === "qr" ? "" : "hidden"} shadow-[0_0_10px_0_rgba(0,0,0,0.3)] mx-auto mt-6 rounded-lg px-6 py-4 pb-6`}>
                <h2 className="font-semibold text-lg">Enter text or URL</h2>

                <input type="text" className="w-full border border-neutral-300 rounded-lg px-4 py-2 mt-2 font-semibold" placeholder="Example: https://super-long-url.com/shortpath" onChange={handleQrCodeInputChange} />

                <div className={`${!qrCodeUrl ? "hidden" : ""} mt-2`}>
                    <h2 className="font-semibold text-lg">Generated QR Code:</h2>
                    <Image src={qrCodeUrl} alt="" width={150} height={150} className="mt-2 mx-auto" />
                </div>

                <button className="w-full bg-neutral-900 text-white font-semibold rounded-lg px-4 py-2 mt-6 text-lg" onClick={handleGenerateQrCode}>
                    Generate QR Code
                </button>
            </div>
        </>
    );
}
