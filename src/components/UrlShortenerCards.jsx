"use client";
import { useRef, useState } from "react";
import { FaAngleDown, FaCheck, FaClipboard } from "react-icons/fa6";

export default function UrlShortenerCards({ className }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleCopyToClipboard = () => {
        setIsClicked(true);

        copyToClipboard();

        setTimeout(() => {
            setIsClicked(false);
        }, 3000);
    };

    const textRef = useRef(null);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(textRef.current.value).catch((err) => {
            console.error("Failed to copy: ", err);
        });
    };

    const [menu, setMenu] = useState("url");

    const handleMenu = (event) => {
        const targetId = event.target.id;
        setMenu(targetId);
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

                <input type="text" className="w-full border border-neutral-300 rounded-lg px-4 py-2 mt-2 font-semibold" placeholder="Example: https://super-long-url.com/shortpath" />

                <div className="mt-2">
                    <h2 className="font-semibold text-lg">Shortened URL</h2>
                    <div className="flex items-center gap-2">
                        <input type="text" readOnly value={""} placeholder="The shortened URL will appear here." ref={textRef} className="w-full border border-neutral-300 rounded-lg px-4 py-2 mt-2 font-semibold" />
                        <div className="bg-neutral-900 text-white p-2 rounded-md mt-2 cursor-pointer" onClick={handleCopyToClipboard}>
                            <FaClipboard className={`${isClicked ? "hidden" : ""} size-4`} />
                            <FaCheck className={`${isClicked ? "" : "hidden"} size-4`} />
                        </div>
                    </div>
                </div>

                <button className="w-full bg-neutral-900 text-white font-semibold rounded-lg px-4 py-2 mt-6 text-lg">Shorten URL</button>
            </div>

            {/* track clicks form */}
            <div className={`${className} ${menu === "clicks" ? "" : "hidden"} shadow-[0_0_10px_0_rgba(0,0,0,0.3)] mx-auto mt-6 rounded-lg px-6 py-4 pb-6`}>
                <h2 className="font-semibold text-lg">Enter your shortened URL</h2>

                <input type="text" className="w-full border border-neutral-300 rounded-lg px-4 py-2 mt-2 font-semibold" placeholder="Example: https://super-long-url.com/shortpath" />

                <div className="mt-2">
                    <h2 className="font-semibold text-lg">Total Clicks: -</h2>
                </div>

                <button className="w-full bg-neutral-900 text-white font-semibold rounded-lg px-4 py-2 mt-6 text-lg">Track Clicks</button>
            </div>

            {/* qr code form */}
            <div className={`${className} ${menu === "qr" ? "" : "hidden"} shadow-[0_0_10px_0_rgba(0,0,0,0.3)] mx-auto mt-6 rounded-lg px-6 py-4 pb-6`}>
                <h2 className="font-semibold text-lg">Enter text or URL</h2>

                <input type="text" className="w-full border border-neutral-300 rounded-lg px-4 py-2 mt-2 font-semibold" placeholder="Example: https://super-long-url.com/shortpath" />

                <div className="mt-2">
                    <h2 className="font-semibold text-lg">Generated QR Code:</h2>
                </div>

                <button className="w-full bg-neutral-900 text-white font-semibold rounded-lg px-4 py-2 mt-6 text-lg">Generate QR Code</button>
            </div>
        </>
    );
}
