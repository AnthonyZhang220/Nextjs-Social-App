import type { Metadata } from "next";
import { Viewport } from "next";
import SessionProvider from "../lib/SessionProvider";
import Script from "next/script";
import { auth } from "./api/auth/[...nextauth]/options";
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
	creator: "Anthony Zhang",
	publisher: "Anthony Zhang",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/static/apple.jpeg",
	},
};

export const viewport: Viewport = {
	themeColor: "black",
	colorScheme: "dark",
};

export default async function RootLayout(props: {
	children: React.ReactNode;
	auth: React.ReactNode;
	settings: React.ReactNode;
	postDetail: React.ReactNode;
}) {
	const session = await auth();

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
						{props.auth}
						{props.settings}
						{props.postDetail}
						{props.children}
					</SessionProvider>
				</ApolloWrapper>
			</body>
		</html>
	);
}
