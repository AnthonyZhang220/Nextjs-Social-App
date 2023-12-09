import getAllPublishedPost from "@/utils/getAllPublishedPosts";
import { Suspense } from "react";
import Loading from "./loading";
import Timeline from "../../../../layout/Timeline";
import Error from "@/components/Error";
import getRandomFacts from "@/utils/getRandomFacts";

export default async function TimelinePage() {
	const { data: posts, loading, error } = await getAllPublishedPost();
	const postData = posts.getAllPublishedPost;
	const randomFacts = await getRandomFacts();

	if (error) return <Error error={error} />;
	if (loading) return <Loading />;
	return (
		<Suspense fallback={<Loading />}>
			<Timeline posts={postData} randomFacts={randomFacts} />
		</Suspense>
	);
}
