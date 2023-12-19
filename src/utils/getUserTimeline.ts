import { getClient } from "@/lib/ApolloClient";
import { gql } from "@apollo/client";

const GET_USER_TIMELINE = gql`
	query getUserTimeline($username: String!) {
		getUserTimeline(username: $username) {
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

async function getUserTimeline(username: string) {
	const { data, error, loading } = await getClient().query({
		query: GET_USER_TIMELINE,
		variables: {
			username: username,
		},
	});

	if (error) {
		return { data: null, error, loading: false };
	}

	const timeline = data.getUserTimeline;

	return { data: timeline, error, loading };
}

export default getUserTimeline;
