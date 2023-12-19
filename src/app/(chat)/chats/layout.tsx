import type { Metadata } from "next";

import styles from "./page.module.scss";

export const metadata: Metadata = {
	title: "Chats / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function DiscoverLayout({
	chatlist,
	chatdetail,
}: {
	chatlist: React.ReactNode;
	chatdetail: React.ReactNode;
}) {
	return (
		<>
			<div className={styles.chatlist}>{chatlist}</div>
			<div className={styles.chatdetail}>
				<div className={styles.chatdetail_container}>{chatdetail}</div>
			</div>
		</>
	);
}
