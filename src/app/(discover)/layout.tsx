import type { Metadata } from "next";
import { Viewport } from "next";
import SessionProvider from "../../lib/SessionProvider";
import Script from "next/script";
import { auth } from "../api/auth/[...nextauth]/options";
import OneTapComponent from "@/lib/OneTapComponent";
import { ApolloWrapper } from "../../lib/ApolloWrapper";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Header from "@/layout/Header";
import LeftNav from "@/layout/LeftNav";

import { Inter } from "next/font/google";

import styles from "./page.module.scss";

import "../../styles/sass/globals.scss";

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

export default async function RootLayout(props: { children: React.ReactNode }) {
	const session = await auth();

	return (
		<>
			<Header session={session} />
			<main className={styles.main}>
				<div className={styles.main_container}>
					<div className={styles.leftnav}>
						<LeftNav />
					</div>
					<div className={styles.videoslide}>{props.children}</div>
				</div>
				<div className={styles.nav_arrow}>
					<div className={styles.prev}>
						<KeyboardArrowUpIcon />
					</div>
					<div className={styles.next}>
						<KeyboardArrowDownIcon />
					</div>
				</div>
			</main>
		</>
	);
}
