"use client";
import ErrorUI from "@/components/ErrorUI";
import { ApolloError } from "@apollo/client";

function Error(error: ApolloError) {
	return <ErrorUI queryError={error} />;
}

export default Error;
