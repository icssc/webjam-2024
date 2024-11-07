import type { Metadata } from "next";

import "./globals.css";

import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "WebJam 2024",
    description:
        "ICS Student Council's week-long web application competition — no experience necessary!",
    openGraph: {
        title: "WebJam 2024",
        description:
            "ICS Student Council's week-long web application competition — no experience necessary!",
        url: "https://webjam.icssc.club",
        images: [
            {
                url: "/ograph.png",
                width: 1728,
                height: 934,
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(`antialiased`, manrope.className)}>
                {children}
            </body>
        </html>
    );
}
