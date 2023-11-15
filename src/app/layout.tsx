import type { Metadata } from "next";
import SessionProvider from "../lib/SessionProvider";
import { getServerSession } from "next-auth";
import Script from "next/script";
import OneTapComponent from "@/lib/OneTapComponent";
import { ApolloWrapper } from "../lib/ApolloWrapper";

import { Inter } from "next/font/google";

import "../styles/sass/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Social App",
	description: "Created by NextJS, Typescript and React.",
	referrer: "origin-when-cross-origin",
	keywords: ["Next.js", "React", "JavaScript"],
	authors: [{ name: "Anthony Zhang", url: "anthonyzhang1997.netlify.app" }],
	colorScheme: "dark",
	creator: "Anthony Zhang",
	publisher: "Anthony Zhang",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/static/apple.jpeg",
	},
};

export default async function RootLayout(props: {
	children: React.ReactNode;
	auth: React.ReactNode;
	settings: React.ReactNode;
}) {
	const session = await getServerSession();

	return (
		<html lang="en">
			<head>
				<Script
					src="https://accounts.google.com/gsi/client"
					strategy="afterInteractive"
				/>
			</head>
			<body className={inter.className}>
				<ApolloWrapper>
					<SessionProvider session={session}>
						<OneTapComponent />
						{props.children}
						{props.auth}
						{props.settings}
					</SessionProvider>
				</ApolloWrapper>
			</body>
		</html>
	);
}
