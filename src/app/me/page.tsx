import { Suspense } from "react";
import { getClient } from "@/lib/client";
import { auth } from "../api/auth/[...nextauth]/options";

import Header from "@/layout/Header";
import LeftNav from "../../layout/LeftNav";
import Profile from "../../layout/Profile";
import ProfileSkeleton from "@/layout/ProfileSkeleton";
import Sidebar from "../../layout/Sidebar";
import Timeline from "../../layout/Timeline";
import Footer from "../../layout/Footer";
import Error from "@/components/Error";
import Loading from "@/components/Loading";

import styles from "./page.module.scss";

import getRandomFacts from "@/utils/getRandomFacts";
import getProfileById from "@/utils/getProfileById";
import getMyTimeline from "@/utils/getMyTimeline";

export async function ProfileinMe() {
	const session = await auth();
	const { data, error, loading } = await getProfileById();
	const profile = data;
	console.log(typeof profile.createdAt);

	if (error) {
		return <Error error={error} />;
	}

	if (loading || profile.length === 0) {
		return <ProfileSkeleton />;
	}

	return (
		<Profile
			displayName={profile.displayName}
			username={profile.username}
			content={profile.content}
			banner={profile.banner}
			avatar={profile.image}
			createdAt={profile.createdAt}
			friendCount={profile.friendCount}
		/>
	);
}

export async function TimelineWithData() {
	const session = await auth();
	const randomFacts = await getRandomFacts();
	const { data, loading, error } = await getMyTimeline();

	const posts = data.getMyTimeline;

	if (error) return <Error error={error} />;
	if (loading) return <Loading />;
	return <Timeline posts={posts} randomFacts={randomFacts} />;
}

export default async function Me() {
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
					<div className={styles.timeline}>
						<div className={styles.profile_section}>
							{session ? <ProfileinMe /> : <ProfileSkeleton />}
						</div>
						<div className={styles.timeline_section}>
							{session ? <TimelineWithData /> : <Timeline />}
						</div>
					</div>
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
