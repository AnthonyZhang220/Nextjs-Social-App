import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export default async function getPostsByUser(userId) {
    
    const { data } = useSuspenseQuery(allPostsQuery);
	return data;
}
