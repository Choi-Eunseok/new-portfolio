import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";

const atoZFont = localFont({
    src: [
        { path: "./fonts/에이투지체-1Thin.woff2", weight: "100", style: "normal" },
        { path: "./fonts/에이투지체-2ExtraLight.woff2", weight: "200", style: "normal" },
        { path: "./fonts/에이투지체-3Light.woff2", weight: "300", style: "normal" },
        { path: "./fonts/에이투지체-4Regular.woff2", weight: "400", style: "normal" },
        { path: "./fonts/에이투지체-5Medium.woff2", weight: "500", style: "normal" },
        { path: "./fonts/에이투지체-6SemiBold.woff2", weight: "600", style: "normal" },
        { path: "./fonts/에이투지체-7Bold.woff2", weight: "700", style: "normal" },
        { path: "./fonts/에이투지체-8ExtraBold.woff2", weight: "800", style: "normal" },
        { path: "./fonts/에이투지체-9Black.woff2", weight: "900", style: "normal" },
    ],
    variable: "--font-atoz",
});

export const metadata: Metadata = {
    title: "최은석's Portfolio",
    description: "파일 서랍 컨셉의 프로젝트 아카이브",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={atoZFont.variable}>
            <body className={`${atoZFont.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}