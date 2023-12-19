"use client"; // Error components must be Client Components

import { useEffect } from "react";
import type { ApolloError } from "@apollo/client";
import ErrorUI from "@/components/ErrorUI";

export default function Error({ error }: { error: ApolloError | undefined }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return <ErrorUI error={error?.message} />;
}
