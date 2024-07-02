import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "DataBin",
	description:
		"This intelligent assistant database grows as you simply toss in images and text into this data trash bin, making it possible to reflect on and index your information later.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
				<Header />
				{children}
			</body>
		</html>
	);
}
