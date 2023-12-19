import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: from([errorLink, httpLink]),
		connectToDevTools: true,
	});
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.forEach(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			)
		);
	if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
	// https://studio.apollographql.com/public/spacex-l4uc6p/
	uri: "http://localhost:3000/api/graphql",
	// you can disable result caching here if you want to
	// (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
	fetchOptions: { cache: "no-store" },
});
