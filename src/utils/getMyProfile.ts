import { getClient } from "@/lib/ApolloClient";
import { gql } from "@apollo/client";

const GET_MY_PROFILE = gql`
	query getMyProfile($id: String!) {
		getMyProfile(id: $id) {
			id
			username
			displayName
			image
			createdAt
			friendCount
			posts(oldestFirst: true) {
				content
				createdAt
				published
				id
				likeCount
				replyCount
				viewCount
				updatedAt
			}
			profile {
				banner
				avatar
			}
			friends {
				friendsId
			}
		}
	}
`;

async function getMyProfile(id: string | null | undefined) {
	if (!id) {
		return { data: null, error: "You are not logged in.", loading: false };
	}
	const { data, error, loading } = await getClient().query({
		query: GET_MY_PROFILE,
		variables: {
			id: id,
		},
	});

	const profileData = data.getMyProfile;

	return { data: profileData, error, loading };
}

export default getMyProfile;
