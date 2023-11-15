import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";


export const GET_USER = gql`
	query GetUser($userId: ID!) {
		user(id: $userId) {
			name
			email
		}
	}
`;

export const GET_USERS = gql`
	query GetUsers {
		users {
			id
			name
			email
		}
	}
`;

export default async function getAllPosts() {
	const { data } = useSuspenseQuery(allPostsQuery);
	return data;
}
