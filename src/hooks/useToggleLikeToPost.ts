import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";

const TOGGLE_LIKE_TO_POST = gql`
	mutation toggleLikeToPost($authorId: String!, $postId: String!) {
		toggleLikeToPost(authorId: $authorId, postId: $postId) {
			id
			authorId
			postId
		}
	}
`;

function useToggleLikeToPost() {
	const [toggleLikeMutation, { data, error, loading }] =
		useMutation(TOGGLE_LIKE_TO_POST);

	const toggleLike = async (authorId: string, postId: string) => {
		try {
			const result = await toggleLikeMutation({
				variables: { authorId, postId },
			});
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};

	return { toggleLike, data, error, loading };
}

export default useToggleLikeToPost;
