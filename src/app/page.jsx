import AccordionComponent from "@/components/AccordionComponent";
import Features from "@/components/Features";
import UrlShortenerCards from "@/components/UrlShortenerCards";

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
        </main>
    );
}
