import { Darker_Grotesque } from "next/font/google";
import "./globals.css";

const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });

export const metadata = {
    title: "ShortPath",
    description: "A sleek solution designed to manage and shorten your super long links.",
    icons: {
        icon: ["/favicon/favicon.ico"],
        apple: ["/favicon/apple-touch-icon.png"],
        shortcut: ["/favicon/apple-touch-icon.png"],
    },
    openGraph: {
        title: "ShortPath",
        description: "A sleek solution designed to manage and shorten your super long links.",
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
