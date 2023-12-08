// graphql/context.ts

/*  Server Context

When creating the server instance, GraphQL Yoga accepts an additional object from your base server framework or library that will be merged with the default context. Node.js (standalone, express and Next.js etc.)

If you are using GraphQL Yoga as a standalone server with createServer from the http(s) module or exposing it as a middleware as we show in the express or Next.js integration recipes.

So here I commented this userContext I created.
*/

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export async function createContext({
	req,
	res,
}: {
	req: NextApiRequest;
	res: NextApiResponse;
}) {
	const session = await getServerSession(req);

	// if the user is not logged in, return an empty object
	if (!session || typeof session === "undefined") return {};

	return {
		session,
	};
}
