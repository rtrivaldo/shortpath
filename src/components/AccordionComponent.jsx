import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AccordionComponent({ className }) {
    return (
        <div className={className}>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">Your questions, answered</h2>

            <div className="mt-10">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-bold text-lg">What is URL shortener?</AccordionTrigger>
                        <AccordionContent className="font-semibold text-base md:text-lg">A URL shortener is a tool or service that converts a long URL into a shorter, more manageable version. The shortened URL typically redirects to the original, longer URL when accessed. This is useful for sharing links in a more concise form, especially on platforms with character limits, or in contexts where you want a clean and simple link.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-bold text-lg">Benefits of a short URL?</AccordionTrigger>
                        <AccordionContent className="font-semibold text-base md:text-lg">
                            A short URL offers several benefits, making it easier to share and manage links. It simplifies long URLs into a concise form, making them more aesthetically pleasing and easier to remember. Short URLs are particularly useful on platforms with character limits and provide opportunities for tracking and analytics. They also allow for custom branding and can prevent broken links by enabling updates to the destination without changing the short URL itself.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-bold text-lg">How do I track clicks?</AccordionTrigger>
                        <AccordionContent className="font-semibold text-base md:text-lg">Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="font-bold text-lg">What is a QR Code?</AccordionTrigger>
                        <AccordionContent className="font-semibold text-base md:text-lg">Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="font-bold text-lg">What can a QR Code do?</AccordionTrigger>
                        <AccordionContent className="font-semibold text-base md:text-lg">Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
