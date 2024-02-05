import type { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
	title: "Notifications / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={styles.main_content}>
			<div className={styles.notification_section}>{children}</div>
		</div>
	);
}
