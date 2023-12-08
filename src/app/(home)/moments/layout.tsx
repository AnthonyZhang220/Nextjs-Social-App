import type { Metadata } from "next";
import Timeline from "../../../layout/Timeline";
import Sidebar from "../../../layout/Sidebar";
import Profile from "../../../layout/Profile";
import ProfileSkeleton from "@/layout/ProfileSkeleton";
import Footer from "../../../layout/Footer";

import styles from "./page.module.scss";

export const metadata: Metadata = {
	title: "Moments / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function MomentLayout({
	profile,
	timeline,
}: {
	profile: React.ReactNode;
	timeline: React.ReactNode;
}) {
	return (
		<>
			<div className={styles.main_content}>
				<div className={styles.profile_section}>{profile}</div>
				<div className={styles.timeline_section}>{timeline}</div>
			</div>
			<div className={styles.sidebar}>
				<div className={styles.sidebar_container}>
					<Sidebar />
					<Footer />
				</div>
			</div>
		</>
	);
}
