import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = gql`
    query 
`;

async function getPostsByUser() {
	const { data, error, loading } = await getClient().query({
		query,
		variables: {
			id: "044c2ac0-49f7-4cf8-857c-45e9ccfcd0b8",
		},
	});
}

export default getPostsByUser();
