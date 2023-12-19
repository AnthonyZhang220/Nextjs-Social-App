import { getClient } from "@/lib/ApolloClient";
import { gql } from "@apollo/client";

const GET_POST_DETAIL = gql`
	query getPostDetail($id: String!) {
		getPostDetail(id: $id) {
			postId: id
			authorId
			content
			createdAt
			likeCount
			replyCount
			viewCount
			visibleTo
			media {
				videoSrc
			}
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

async function getPostDetail(id: string) {
	const { data, error, loading } = await getClient().query({
		query: GET_POST_DETAIL,
		variables: {
			id: id,
		},
	});

	const postDetail = data.getPostDetail;

	return { data: postDetail, error, loading };
}

export default getPostDetail;
