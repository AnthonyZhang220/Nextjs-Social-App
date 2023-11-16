import { useSession } from "next-auth/react";

export default async function getCurrentUser() {
	const { data: session, status } = useSession();

    




	return data;
}
