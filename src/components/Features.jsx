import { FaChartLine, FaLink } from "react-icons/fa6";
import { IoQrCode } from "react-icons/io5";

export default function Features({ className }) {
    return (
        <div className={className}>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold px-4">A short link, infinite possibilities</h2>
            <div className="max-w-screen-sm mx-auto mt-2 px-4">
                <p className="text-center font-semibold md:text-lg text-neutral-500 leading-tight">A concise URL can unlock vast opportunities, leading to countless destinations and outcomes.</p>
            </div>

            <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center lg:w-4/5 xl:w-1/2 mx-auto px-4">
                <div className="shadow-[0_0_10px_0_rgba(0,0,0,0.3)] rounded-lg px-4 py-8 text-center md:w-1/3">
                    <FaLink className="size-10 w-full" />
                    <h4 className="mt-6 text-xl font-bold">URL Shortener</h4>
                    <p className="mt-4 leading-tight font-semibold text-neutral-500">Simplify long URLs for easier sharing, better presentation, and enhanced usability.</p>
                </div>

                <div className="shadow-[0_0_10px_0_rgba(0,0,0,0.3)] rounded-lg px-4 py-8 text-center md:w-1/3">
                    <FaChartLine className="size-10 w-full" />
                    <h4 className="mt-6 text-xl font-bold">Track Clicks</h4>
                    <p className="mt-4 leading-tight font-semibold text-neutral-500">Focus your or your client's efforts on the most promising campaigns by taking actions based on comprehensive statistic.</p>
                </div>

                <div className="shadow-[0_0_10px_0_rgba(0,0,0,0.3)] rounded-lg px-4 py-8 text-center md:w-1/3">
                    <IoQrCode className="size-10 w-full" />
                    <h4 className="mt-6 text-xl font-bold">QR Codes</h4>
                    <p className="mt-4 leading-tight font-semibold text-neutral-500">Create and track custom QR codes to measure engagement and analyze offline campaign performance.</p>
                </div>
            </div>
        </div>
    );
}
