import getProfileById from "@/utils/getProfileById";

import { auth } from "../../../api/auth/[...nextauth]/options";
import Profile from "../../../../layout/Profile";

import Error from "@/components/Error";
import ProfileSkeleton from "@/layout/ProfileSkeleton";
import { Suspense } from "react";
import Loading from "./loading";

export default async function ProfileWithData() {
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
		<Suspense fallback={<Loading />}>
			<Profile
				displayName={profile.displayName}
				username={profile.username}
				content={profile.content}
				banner={profile.banner}
				avatar={profile.image}
				createdAt={profile.createdAt}
				friendCount={profile.friendCount}
			/>
		</Suspense>
	)
}
