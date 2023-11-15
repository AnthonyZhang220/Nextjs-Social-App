import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const 
export default async function getPostsByUser(userId) {
    
    const { data } = useSuspenseQuery(allPostsQuery);
	return data;
}
