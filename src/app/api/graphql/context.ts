// graphql/context.ts
import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";

export async function createContext({
	req,
	res,
}: {
	req: NextApiRequest;
	res: NextApiResponse;
}) {
	const session = await getSession(res);

	// if the user is not logged in, return an empty object
	if (!session || typeof session === "undefined") return {};

	const { user, accessToken } = session;

	return {
		user,
		accessToken,
	};
}
