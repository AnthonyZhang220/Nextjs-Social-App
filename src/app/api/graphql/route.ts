// ./api/graphql/route.ts

import { createYoga } from "graphql-yoga";
import { schema } from "./schema";
import { createContext } from "./context";

const { handleRequest } = createYoga({
	schema,
	context: createContext,
	// While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
	graphqlEndpoint: "/api/graphql",

	// Yoga needs to know how to create a valid Next response
	fetchAPI: { Request: Request, Response: Response },
});

export { handleRequest as GET, handleRequest as POST };
