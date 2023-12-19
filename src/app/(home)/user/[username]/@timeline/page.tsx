import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Timeline from "@/layout/Timeline";
import ErrorUI from "@/components/ErrorUI";
import getRandomFacts from "@/utils/getRandomFacts";
import getUserTimeline from "@/utils/getUserTimeline";

async function TimelineWithData({ params }: { params: { username: string } }) {
	const {
		data: posts,
		loading,
		error,
	} = await getUserTimeline(params.username);

	const randomFacts = await getRandomFacts();

	return (
		<ErrorBoundary fallback={<ErrorUI error={error} />}>
			<Timeline posts={posts} randomFacts={randomFacts} />
		</ErrorBoundary>
	);
}

export default TimelineWithData;
