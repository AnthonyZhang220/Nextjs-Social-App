import { getClient } from "@/lib/client";
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
				image
			}
		}
	}
`;

async function getMyTimeline() {
	const { data, error, loading } = await getClient().query({
		query: GET_MY_TIMELINE,
		variables: {
			id: "044c2ac0-49f7-4cf8-857c-45e9ccfcd0b8",
		},
	});

	const timeline = data.getMyTimeline;

	return { data: timeline, error, loading };
}

export default getMyTimeline;
