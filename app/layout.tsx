import "./globals.scss";
import type { Metadata } from "next";
import SessionProvider from "../components/Providers/SessionProvider";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "S",
	description: "Created by NextJS, Typescript and React.",
	referrer: "origin-when-cross-origin",
	keywords: ["Next.js", "React", "JavaScript"],
	authors: [{ name: "Anthony Zhang", url: "anthonyzhang1997.netlify.app" }],
	colorScheme: "dark",
	creator: "Anthony Zhang",
	publisher: "Anthony Zhang",
	icons: {
		icon: "/icon.ico",
		shortcut: "/icon.ico",
		apple: "/S-logos.jpeg",
	},
};

export default async function RootLayout(props: {
	children: React.ReactNode;
	auth: React.ReactNode;
}) {
	const session = await getServerSession();
	
	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider session={session}>
					{props.children}
					{props.auth}
				</SessionProvider>
			</body>
		</html>
	);
}
