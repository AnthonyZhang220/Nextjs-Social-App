import type { Metadata } from "next";
import Header from "@/layout/Header";
import { auth } from "../api/auth/[...nextauth]/options";

import LeftNav from "@/layout/LeftNav";

import styles from "./page.module.scss";

export const metadata: Metadata = {
	title: "Chats / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
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
				</div>
			</main>
		</>
	);
}
