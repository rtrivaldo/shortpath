import AccordionComponent from "@/components/AccordionComponent";
import Features from "@/components/Features";
import UrlShortenerCards from "@/components/UrlShortenerCards";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Home() {
    return (
        <main>
            <div className="max-w-screen-md mx-auto px-4">
                <h1 className="mt-36 text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Make every connection count</h1>
                <div className="mx-auto mt-2 md:mt-4">
                    <p className="text-center font-semibold sm:text-lg md:text-xl text-neutral-500">
                        Create short links, QR Codes, share them anywhere. Track what's working, and what's not. All inside the <span className="text-neutral-900 font-bold">ShortPath.</span>
                    </p>
                </div>
            </div>

            <div className="max-w-screen-md mx-auto px-4 md:px-0">
                <UrlShortenerCards />
            </div>

            <Features className="mt-28" />

            <AccordionComponent className="mt-28 max-w-screen-lg mx-auto px-4" />

            <footer className="mt-10 mb-2 font-semibold max-w-screen-lg mx-auto px-4 border-t-[1px] border-neutral-400">
                <div className="mt-2 flex justify-between items-center">
                    <div>
                        <p className="text-neutral-500 text-lg leading-tight">Tool to shorten a long link.</p>
                        <p className="text-neutral-500 text-lg leading-tight">© 2024 Rivaldo Tandoko.</p>
                    </div>

                    <div className="flex justify-center gap-3">
                        <FaLinkedin className="size-5 text-neutral-500" />
                        <FaGithub className="size-5 text-neutral-500" />
                        <IoMdMail className="size-5 text-neutral-500" />
                    </div>
                </div>
            </footer>
        </main>
    );
}
