"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";

const getMe = gql`
	query me($id: String!) {
		id
		name
		username
		displayName
		image
		profile
	}
`;

export default function getCurrentUser({ session }) {
	const { data, error } = useSuspenseQuery(getMe, {
		variables: {
			id: session.id,
		},
	});

	return { data, error };
}
