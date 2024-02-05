import { getClient } from "@/lib/ApolloClient";
import { gql } from "@apollo/client";

const GET_MY_NOTIFICATIONS = gql`
	query getMyNotifications($id: String!) {
		getMyNotifications(id: $id) {
			id
			recipient {
				displayName
				profile {
					avatar
				}
			}
			notification {
				id
				createdAt
				notificationType {
					type
				}
				sender {
					displayName
					profile {
						avatar
					}
				}
			}
			status
			isRead
		}
	}
`;

async function getMyNotifications(id: string | null | undefined) {
	const { data, loading, error } = await getClient().query({
		query: GET_MY_NOTIFICATIONS,
		variables: {
			id: id,
		},
	});

	const notif = data.getMyNotifications;

	return { data: notif, error, loading };
}

export default getMyNotifications;
