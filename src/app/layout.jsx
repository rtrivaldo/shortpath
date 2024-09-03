import { Darker_Grotesque } from "next/font/google";
import "./globals.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });

export const metadata = {
    title: "ShortPath",
    description: "Tool to shorten a long link.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={darkerGrotesque.className}>
                {children}

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
            </body>
        </html>
    );
}
