import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { auth } from "../../../api/auth/[...nextauth]/options";
import getRandomFacts from "@/utils/getRandomFacts";
import getMyTimeline from "@/utils/getMyTimeline";

import Timeline from "../../../../layout/Timeline";
import ErrorUI from "@/components/ErrorUI";

import Loading from "./loading";
import Error from "./error";

export default async function TimelineWithData() {
	const session = await auth();
	const randomFacts = await getRandomFacts();
	const {
		data: posts,
		loading: postsLoading,
		error: postsError,
	} = await getMyTimeline(session?.user?.id);

	return (
		<ErrorBoundary fallback={<ErrorUI error={postsError} />}>
			<Timeline posts={posts} randomFacts={randomFacts} />
		</ErrorBoundary>
	);
}
