import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

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
                        <AccordionContent className="font-semibold text-base md:text-lg">
                            <p>To track clicks on a shortened URL, follow these steps:</p>

                            <ol className="mt-2">
                                <li>
                                    1. Visit{" "}
                                    <Link href="https://www.shortpath.site/" className="underline text-blue-700">
                                        www.shortpath.site
                                    </Link>
                                    .
                                </li>
                                <li>2. Navigate to the "Track Clicks" menu.</li>
                                <li>3. Enter the shortened URL you want to track.</li>
                                <li>4. Click the "Track Click" button to start monitoring.</li>
                            </ol>

                            <p className="mt-2">This will allow you to see how many times your link has been clicked.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="font-bold text-lg">What is a QR Code?</AccordionTrigger>
                        <AccordionContent className="font-semibold text-base md:text-lg">A QR code (Quick Response code) is a type of two-dimensional barcode that can store information such as URLs, text, or other data. It is made up of black squares arranged on a white background and can be scanned using a smartphone or QR code reader to quickly access the stored information. QR codes are widely used for contactless payments, marketing, and sharing links.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="font-bold text-lg">What can a QR Code do?</AccordionTrigger>
                        <AccordionContent className="font-semibold text-base md:text-lg">
                            A QR code is a versatile tool that can store and share various types of information, such as website URLs, contact details, Wi-Fi credentials, and payment links. By scanning the code with a smartphone, users can quickly access this data, enabling functions like visiting websites, connecting to Wi-Fi, making payments, downloading apps, or sharing social media profiles and event information. QR codes are widely used for their convenience and efficiency in providing
                            instant access to digital content.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
