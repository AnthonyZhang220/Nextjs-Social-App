import getAllPublishedPost from "@/utils/getAllPublishedPosts";
import LoadingUI from "@/components/LoadingUI";
import { Suspense } from "react";
import Timeline from "../../../../layout/Timeline";
import Error from "@/components/Error";
import getRandomFacts from "@/utils/getRandomFacts";

export default async function TimelinePage() {
	const { data: posts, loading, error } = await getAllPublishedPost();
	const postData = posts.getAllPublishedPost;
	const randomFacts = await getRandomFacts();
	return (
		<Suspense fallback={<LoadingUI />}>
			{loading ? (
				<LoadingUI />
			) : error ? (
				<Error error={error} />
			) : (
				<Timeline posts={postData} randomFacts={randomFacts} />
			)}
		</Suspense>
	);
}
