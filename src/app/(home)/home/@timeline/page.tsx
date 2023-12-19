import getAllPublishedPost from "@/utils/getAllPublishedPosts";
import { Suspense } from "react";
import Loading from "./loading";
import Timeline from "../../../../layout/Timeline";
import ErrorUI from "@/components/ErrorUI";
import { ErrorBoundary } from "react-error-boundary";
import getRandomFacts from "@/utils/getRandomFacts";

export default async function TimelinePage() {
	const { data: posts, loading, error } = await getAllPublishedPost();
	const randomFacts = await getRandomFacts();

	return (
		<ErrorBoundary fallback={<ErrorUI error={error} />}>
			<Timeline posts={posts} randomFacts={randomFacts} />
		</ErrorBoundary>
	);
}
