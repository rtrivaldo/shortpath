import { Darker_Grotesque } from "next/font/google";
import "./globals.css";

const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });

export const metadata = {
    title: "ShortPath",
    description: "Tool to shorten a long link.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={darkerGrotesque.className}>{children}</body>
        </html>
    );
}
