import { auth } from "../../../api/auth/[...nextauth]/options";
import Profile from "../../../../layout/Profile";

import Error from "@/components/ErrorUI";
import ProfileSkeleton from "@/layout/ProfileSkeleton";
import { Suspense } from "react";
import getMyProfile from "@/utils/getMyProfile";
import { ErrorBoundary } from "react-error-boundary";

export default async function ProfileWithData() {
	const session = await auth();
	const {
		data: user,
		error: profileError,
		loading,
	} = await getMyProfile(session?.user?.id);

	return (
		<ErrorBoundary fallback={<Error error={profileError} />}>
			{session ? <Profile user={user} /> : <ProfileSkeleton />}
		</ErrorBoundary>
	);
}
