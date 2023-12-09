import { auth } from "../../../api/auth/[...nextauth]/options";

import Timeline from "../../../../layout/Timeline";

import Loading from "./loading";
import Error from "@/components/Error";
import getRandomFacts from "@/utils/getRandomFacts";
import getMyTimeline from "@/utils/getMyTimeline";
import { Suspense } from "react";

export default async function TimelineWithData() {
	const session = await auth();
	const randomFacts = await getRandomFacts();
	const { data, loading, error } = await getMyTimeline();

	const posts = data;

	if (error) return <Error error={error} />;
	if (loading) return <Loading />;
	return (
		<Suspense fallback={<Loading />}>
			<Timeline posts={posts} randomFacts={randomFacts} />
		</Suspense>
	);
}
