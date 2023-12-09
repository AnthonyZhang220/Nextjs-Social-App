import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";

const GET_POSTS_FROM_FRIENDS = gql`
	query getPostsFromFriends($id: String!) {
		getPostsFromFriends(id: $id) {
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

async function getPostsFromFriends() {
	const { data, loading, error } = await getClient().query({
		query: GET_POSTS_FROM_FRIENDS,
		variables: {
			id: "044c2ac0-49f7-4cf8-857c-45e9ccfcd0b8",
		},
	});
	const postsData = data.getPostsFromFriends;

	return { data: postsData, loading, error };
}

export default getPostsFromFriends;
