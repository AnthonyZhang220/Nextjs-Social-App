
import Loading from "./loading";
import { Suspense } from "react";
import { auth } from "../../../api/auth/[...nextauth]/options";
import Profile from "../../../../layout/Profile";
import ProfileSkeleton from "@/layout/ProfileSkeleton";

import Error from "@/components/Error";
import getProfileById from "@/utils/getProfileById";

export default async function ProfileWithData() {
	const session = await auth();

	const {
		data: profileData,
		loading: profileLoading,
		error: profileError,
	} = await getProfileById();
	const profile = profileData;
	if (profileError) {
		return <Error error={profileError} />;
	}

	if (profileLoading || profile.length === 0) {
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
	);
}
