//./graphql/builder.ts

import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import { DateTimeResolver } from "graphql-scalars";
import { createContext } from "./context";

// This is the default location for the generator, but this can be
// customized as described above.
// Using a type only import will help avoid issues with undeclared
// exports in esm mode
import type PrismaTypes from "../../../prisma/pothos-types";

import prisma from "@/prisma/database";

export const builder = new SchemaBuilder<{
	PrismaTypes: PrismaTypes;
	Context: ReturnType<typeof createContext>;
	Scalars: {
		DateTime: { Input: Date; Output: Date };
	};
}>({
	plugins: [PrismaPlugin],
	prisma: {
		client: prisma,
		filterConnectionTotalCount: true,
		onUnusedQuery: process.env.NODE_ENV === "production" ? null : "warn",
	},
});


/* MUST DEFINE A ROOT QUERY TYPE AND root MUTATION TYPE WHEN USING POTHOS GRAPHQL */
builder.queryType({
	description: "The query root type.",
	fields: (t) => ({
		ok: t.boolean({ resolve: () => true }),
	}),
});
builder.mutationType({});

// This is where we've created the new date scalar
builder.addScalarType("DateTime", DateTimeResolver, {});
