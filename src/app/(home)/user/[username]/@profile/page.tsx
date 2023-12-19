import Profile from "@/layout/Profile";
import ErrorUI from "@/components/ErrorUI";
import getUserProfile from "@/utils/getUserProfile";
import { ErrorBoundary } from "react-error-boundary";

export default async function ProfileWithData({
	params,
}: {
	params: { username: string };
}) {
	const { data: user, loading, error } = await getUserProfile(params.username);

	return (
		<ErrorBoundary fallback={<ErrorUI error={error} />}>
			<Profile user={user} />
		</ErrorBoundary>
	);
}
