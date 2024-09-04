import { Darker_Grotesque } from "next/font/google";
import "./globals.css";

const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });

export const metadata = {
    title: "ShortPath",
    description: "Tool to shorten a long link.",
    openGraph: {
        title: "ShortPath",
        description: "Tool to shorten a long link.",
        url: "https://www.shortpath.site/",
        siteName: "ShortPath",
        images: [
            {
                url: "/openGraphImage.jpeg",
                width: 1260,
                height: 800,
            },
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={darkerGrotesque.className}>{children}</body>
        </html>
    );
}
