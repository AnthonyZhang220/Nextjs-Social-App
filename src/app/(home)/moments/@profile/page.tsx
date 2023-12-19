import { Suspense } from "react";
import { auth } from "../../../api/auth/[...nextauth]/options";
import Profile from "../../../../layout/Profile";
import ProfileSkeleton from "@/layout/ProfileSkeleton";
import getMyProfile from "@/utils/getMyProfile";

import Error from "@/components/ErrorUI";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "./loading";

export default async function ProfileWithData() {
	const session = await auth();

	const {
		data: user,
		loading: profileLoading,
		error: profileError,
	} = await getMyProfile(session?.user?.id);

	return (
		<ErrorBoundary fallback={<Error error={profileError} />}>
			{session ? <Profile user={user} /> : <ProfileSkeleton />}
		</ErrorBoundary>
	);
}
