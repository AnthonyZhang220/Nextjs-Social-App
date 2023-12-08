import { auth } from "../../../api/auth/[...nextauth]/options";

import Timeline from "../../../../layout/Timeline";

import Loading from "./loading";
import Error from "@/components/Error";
import getRandomFacts from "@/utils/getRandomFacts";
import getPostsFromFriends from "@/utils/getPostsFromFriends";
import { Suspense } from "react";

export default async function TimelineWithData() {
	const session = await auth();
	const randomFacts = await getRandomFacts();
	const {
		data: postsData,
		loading: postsLoading,
		error: postsError,
	} = await getPostsFromFriends();

	const posts = postsData;

	if (postsError) return <Error error={postsError} />;
	if (postsLoading) return <Loading />;
	return (
		<Suspense fallback={<Loading />}>
			<Timeline posts={posts} randomFacts={randomFacts} />
		</Suspense>
	);
}
