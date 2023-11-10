"use client";

import LeftNav from "../../layout/LeftNav";
import Profile from "../../layout/Profile";
import Sidebar from "../../layout/Sidebar";
import Timeline from "../../layout/Timeline";
import Footer from "../../layout/Footer";
import { useSession } from "next-auth/react";

import { profile } from "@/mockdata";

import styles from "./page.module.scss";

export default function Me() {
	const { data: session, status } = useSession();

	if (session) {
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
							displayName={session.user?.name}
							username={session.user?.name}
							content={profile.content}
							banner={profile.banner}
							avatar={session.user?.image}
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
