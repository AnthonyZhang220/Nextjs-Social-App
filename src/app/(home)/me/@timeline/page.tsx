import { auth } from "../../../api/auth/[...nextauth]/options";

import Timeline from "../../../../layout/Timeline";

import Loading from "./loading";
import ErrorUI from "@/components/ErrorUI";
import getRandomFacts from "@/utils/getRandomFacts";
import getMyTimeline from "@/utils/getMyTimeline";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function TimelineWithData() {
	const session = await auth();
	const randomFacts = await getRandomFacts();
	const {
		data: posts,
		loading,
		error,
	} = await getMyTimeline(session?.user?.id);

	return (
		<ErrorBoundary fallback={<ErrorUI error={error} />}>
			<Timeline posts={posts} randomFacts={randomFacts} />
		</ErrorBoundary>
	);
}
