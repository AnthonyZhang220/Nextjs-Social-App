import type { Metadata } from "next";
import { Suspense } from "react";
import { auth } from "../../api/auth/[...nextauth]/options";

import Profile from "../../../layout/Profile";
import ProfileSkeleton from "@/layout/ProfileSkeleton";
import Sidebar from "../../../layout/Sidebar";
import Timeline from "../../../layout/Timeline";
import Footer from "../../../layout/Footer";
import Error from "@/components/Error";
import LoadingUI from "@/components/LoadingUI";

import styles from "./page.module.scss";
export const metadata: Metadata = {
	title: "Me / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function MeLayout({
	profile,
	timeline,
}: {
	profile: React.ReactNode;
	timeline: React.ReactNode;
}) {
	return (
		<>
			<div className={styles.timeline}>
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
