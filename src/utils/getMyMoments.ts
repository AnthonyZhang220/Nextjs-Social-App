import { gql } from "@apollo/client";
import { getClient } from "@/lib/ApolloClient";

const GET_MY_MOMENTS = gql`
	query getMyMoments($id: String!) {
		getMyMoments(id: $id) {
			postId: id
			content
			createdAt
			likeCount
			replyCount
			viewCount
			title
			visibleTo
			author {
				displayName
				email
				createdAt
				image
				name
			}
		}
	}
`;

async function getMyMoments(id: string | null | undefined) {
	const { data, loading, error } = await getClient().query({
		query: GET_MY_MOMENTS,
		variables: {
			id: id,
		},
	});
	const postsData = data.getMyMoments;

	return { data: postsData, loading, error };
}

export default getMyMoments;
