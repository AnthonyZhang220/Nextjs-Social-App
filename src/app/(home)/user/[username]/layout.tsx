import type { Metadata } from "next";

import styles from "./page.module.scss";

export const metadata: Metadata = {
	title: "Profile / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function DashboardLayout({
	profile,
	timeline,
}: {
	profile: React.ReactNode;
	timeline: React.ReactNode;
}) {
	return (
		<div className={styles.main_content}>
			<div className={styles.profile_section}>{profile}</div>
			<div className={styles.timeline_section}>{timeline}</div>
		</div>
	);
}
