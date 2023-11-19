import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";



const getAllUsers = gql`
    query me ($id: String!) {
		
	}
`

export default async function getAllPosts() {
	const { data, loading, error } = useSuspenseQuery(getAllUsers);
	return data;
}
