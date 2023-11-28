import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";

const query = gql`
	query getAllPublishedPost {
		getAllPublishedPost {
			viewCount
			updatedAt
			replyCount
			likeCount
			id
			createdAt
			content
			author {
				displayName
				image
				name
			}
		}
	}
`;

export default async function getAllPublishedPost() {
	const { data, loading, error } = await getClient().query({
		query,
	});

	return { data, loading, error };
}
