// pages/api/graphql.ts

import { createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { schema } from "./schema";

const { handleRequest } = createYoga<{
	req: NextApiRequest;
	res: NextApiResponse;
}>({
	schema: schema,
	// While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
	graphqlEndpoint: "/api/graphql",

	// Yoga needs to know how to create a valid Next response
	fetchAPI: { Request: Request, Response: Response },
});

export {
	handleRequest as GET,
	handleRequest as POST,
	handleRequest as OPTIONS,
};

// export const config = {
// 	api: {
// 		bodyParser: false,
// 	},
// };
