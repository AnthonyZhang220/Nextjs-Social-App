import type { Metadata } from "next";
import { Viewport } from "next";
import { auth } from "../api/auth/[...nextauth]/options";
import Header from "@/layout/Header";
import LeftNav from "@/layout/LeftNav";

import { Inter } from "next/font/google";

import styles from "./page.module.scss";
import Sidebar from "@/layout/Sidebar";
import Footer from "@/layout/Footer";

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

export default async function RootLayout(props: {
	children: React.ReactNode;
	sidebar: React.ReactNode;
}) {
	const session = await auth();

	return (
		<>
			<Header session={session} />
			<main className={styles.main}>
				<div className={styles.main_container}>
					<div className={styles.leftnav}>
						<div className={styles.menu}>
							<LeftNav />
						</div>
					</div>
					{props.children}
					<div className={styles.sidebar}>
						<div className={styles.sidebar_container}>
							<Sidebar />
							<Footer />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
