import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import { DateResolver } from "graphql-scalars";

// This is the default location for the generator, but this can be
// customized as described above.
// Using a type only import will help avoid issues with undeclared
// exports in esm mode
import type PrismaTypes from "../../../prisma/pothos-types";

import prisma from "@/prisma/database";

export const builder = new SchemaBuilder<{
	Scalars: {
		Date: { Input: Date; Output: Date };
	};
	PrismaTypes: PrismaTypes;
}>({
	plugins: [PrismaPlugin],
	prisma: {
		client: prisma,
	},
});

// in GraphQL the Query type and Mutation type can each only be called once. So we call it here and will add fields to them on the go
builder.queryType();
builder.mutationType();

// This is where we've created the new date scalar
builder.addScalarType("Date", DateResolver, {});

// Define your schema using the builder
builder.queryType({
	fields: (t) => ({
		ok: t.boolean({
			resolve: () => true,
		}),
	}),
});

builder.mutationType({
	description: "The mutation root type.",
	fields: (t) => ({
		// Define a mutation field, for example, createUser
		createUser: t.field({
			type: "String", // Specify the return type of the mutation
			args: {
				// Define any input arguments for the mutation if needed
				username: t.arg.string(),
				email: t.arg.string(),
			},
			resolve: async (_, args, ctx) => {
				// Add your mutation logic here
				// For example, you can create a user using Prisma
				const user = await prisma.user.create({
					data: {
						username: args.username,
						email: args.email,
					},
				});

				return `User ${user.username} created successfully!`;
			},
		}),
	}),
});
