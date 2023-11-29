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

import getRandomFacts from "@/utils/getRandomFacts";
import getProfileById from "@/utils/getProfileById";
import getMyTimeline from "@/utils/getMyTimeline";

export async function ProfileWithData() {
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
	if (loading) return <LoadingUI />;
	return <Timeline posts={posts} randomFacts={randomFacts} />;
}

export default async function Me() {
	const session = await auth();

	return (
		<>
			<div className={styles.timeline}>
				<div className={styles.profile_section}>
					<Suspense fallback={<ProfileSkeleton />}>
						{session ? <ProfileWithData /> : <ProfileSkeleton />}
					</Suspense>
				</div>
				<div className={styles.timeline_section}>
					<Suspense fallback={<LoadingUI />}>
						{session ? <TimelineWithData /> : <Timeline />}
					</Suspense>
				</div>
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
