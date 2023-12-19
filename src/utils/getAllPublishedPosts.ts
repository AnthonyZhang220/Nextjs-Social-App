import { gql } from "@apollo/client";
import { getClient } from "@/lib/ApolloClient";

const query = gql`
	query getAllPublishedPost {
		getAllPublishedPost {
			postId: id
			authorId
			viewCount
			updatedAt
			replyCount
			likeCount
			createdAt
			content
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

export default async function getAllPublishedPost() {
	const { data, loading, error } = await getClient().query({
		query,
	});
	if (error) {
		return { data: null, loading: false, error: error };
	}
	const allPosts = data.getAllPublishedPost;
	return { data: allPosts, loading, error };
}
