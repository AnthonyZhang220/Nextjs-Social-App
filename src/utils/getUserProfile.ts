import { getClient } from "@/lib/ApolloClient";
import { gql } from "@apollo/client";

const query = gql`
	query getUserProfile($username: String!) {
		getUserProfile(username: $username) {
			id
			email
			name
			displayName
			username
			createdAt
			friendCount
			profile {
				banner
				avatar
				location {
					city
				}
			}
			friends {
				friendsId
			}
		}
	}
`;

async function getUserProfile(username: string) {
	const { data, error, loading } = await getClient().query({
		query: query,
		variables: {
			username: username,
		},
	});

	if (error) {
		return { data: null, error, loading };
	}

	const profileData = data.getUserProfile;
	console.log("data", data);
	console.log("error", error);
	console.log("loading", loading);
	return { data: profileData, error, loading };
}

export default getUserProfile;
