import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = gql`
	query getMyProfile($id: String!) {
		getMyProfile(id: $id) {
			id
			email
			name
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

async function getProfileById() {
	const { data, error, loading } = await getClient().query({
		query,
		variables: {
			id: "044c2ac0-49f7-4cf8-857c-45e9ccfcd0b8",
		},
	});

	const profileData = data.getMyProfile;

	return { data: profileData, error, loading };
}

export default getProfileById;
