import { gql, useMutation } from "@apollo/client";

const ACCEPT_FRIEND = gql`
	mutation acceptFriendRequest($id: String!) {
		acceptFriendRequest(id: $id) {
			id
		}
	}
`;

const IGNORE_FRIEND = gql`
	mutation ignoreFriendRequest($id: String!) {
		ignoreFriendRequest(id: $id) {
			id
		}
	}
`;

const DISMISS_NOTIFICATION = gql`
	mutation dismissNotification($id: String!) {
		dismissNotification(id: $id) {
			id
		}
	}
`;

export function acceptFriendRequest() {
	const [acceptFriendRequest, { data, loading, error }] =
		useMutation(ACCEPT_FRIEND);

	return { acceptFriendRequest };
}

export function ignoreFriendRequest() {
	const [ignoreFriendRequest, { data, loading, error }] =
		useMutation(IGNORE_FRIEND);

	return { ignoreFriendRequest };
}

export function dismissNotification() {
	const [dismissNotification, { data, loading, error }] =
		useMutation(DISMISS_NOTIFICATION);

	return { dismissNotification };
}
