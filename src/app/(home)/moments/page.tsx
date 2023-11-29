import Timeline from "../../../layout/Timeline";
import Sidebar from "../../../layout/Sidebar";
import Profile from "../../../layout/Profile";
import ProfileSkeleton from "@/layout/ProfileSkeleton";
import Footer from "../../../layout/Footer";

import { auth } from "../../api/auth/[...nextauth]/options";

import getProfileById from "@/utils/getProfileById";
import getRandomFacts from "@/utils/getRandomFacts";
import getPostsFromFriends from "@/utils/getPostsFromFriends";

import Error from "@/components/Error";
import LoadingUI from "@/components/LoadingUI";

import styles from "./page.module.scss";
import { Suspense } from "react";

export default async function Moments() {
	const session = await auth();
	const randomFacts = await getRandomFacts();
	const {
		data: postsData,
		loading: postsLoading,
		error: postsError,
	} = await getPostsFromFriends();

	const {
		data: profileData,
		loading: profileLoading,
		error: profileError,
	} = await getProfileById();
	const profile = profileData;
	const posts = postsData;
	console.log("moments", posts);

	return (
		<>
			<div className={styles.main_content}>
				<div className={styles.profile_section}>
					<Suspense fallback={<ProfileSkeleton />}>
						{profileLoading ? (
							<ProfileSkeleton />
						) : profileError ? (
							<Error error={profileError} />
						) : (
							<Profile
								displayName={profile.displayName}
								username={profile.username}
								content={profile.content}
								banner={profile.banner}
								avatar={profile.image}
								createdAt={profile.createdAt}
								friendCount={profile.friendCount}
							/>
						)}
					</Suspense>
				</div>
				<div className={styles.timeline_section}>
					<Suspense fallback={<LoadingUI />}>
						{postsLoading ? (
							<LoadingUI />
						) : postsError ? (
							<Error error={postsError} />
						) : (
							<Timeline posts={posts} randomFacts={randomFacts} />
						)}
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
