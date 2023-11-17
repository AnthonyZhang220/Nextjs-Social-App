import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";


export default async function getAllPosts() {
	const { data } = useSuspenseQuery();
	return data;
}
