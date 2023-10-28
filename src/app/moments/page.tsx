import LeftNav from "../../layout/LeftNav";
import Timeline from "../../layout/Timeline";
import Sidebar from "../../layout/Sidebar";
import Profile from "../../layout/Profile";
import Footer from "../../layout/Footer";
import PostLoading from "../../layout/PostLoading";
import { Suspense } from "react";
import { profile } from "@/mockdata";

import styles from "./page.module.scss";

export default function Moments() {
	return (
		<main className={styles.main}>
			<div className={styles.main_container}>
				<div className={styles.leftnav}>
					<div className={styles.menu}>
						<LeftNav />
					</div>
				</div>
				<div className={styles.timeline}>
					<Profile
						displayName={profile.displayName}
						username={profile.username}
						content={profile.content}
						banner={profile.banner}
						avatar={profile.avatar}
					/>
					<Timeline />
				</div>
				<div className={styles.sidebar}>
					<div className={styles.sidebar_container}>
						<Sidebar />
						<Footer />
					</div>
				</div>
			</div>
		</main>
	);
}
