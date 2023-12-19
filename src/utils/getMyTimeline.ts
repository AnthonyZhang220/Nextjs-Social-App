import { getClient } from "@/lib/ApolloClient";
import { gql } from "@apollo/client";

const GET_MY_TIMELINE = gql`
	query getMyTimeline($id: String!) {
		getMyTimeline(id: $id) {
			postId: id
			content
			createdAt
			likeCount
			replyCount
			viewCount
			visibleTo
			author {
				displayName
				username
				profile {
					avatar
				}
			}
		}
	}
`;

async function getMyTimeline(id: string | null | undefined) {
	if (!id) {
		return { data: null, error: "You are not logged in.", loading: false };
	}
	const { data, error, loading } = await getClient().query({
		query: GET_MY_TIMELINE,
		variables: {
			id: id,
		},
	});

	const timeline = data.getMyTimeline;

	return { data: timeline, error, loading };
}

export default getMyTimeline;
