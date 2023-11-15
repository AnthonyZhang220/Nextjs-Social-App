import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import type { PrismaTypes } from "@pothos/plugin-prisma/generated.ts";
import { DateTimeResolver } from "graphql-scalars";

import prisma from "@/prisma/database";

// 2.

export const builder = new SchemaBuilder<{
	// 3.
	PrismaTypes: PrismaTypes;
	Scalars: {
		Date: {
			Input: Date;
			Output: Date;
		};
	};
}>({
	// 4.
	plugins: [PrismaPlugin],
	prisma: {
		client: prisma,
		filterConnectionTotalCount: true,
		// warn when not using a query parameter correctly
		onUnusedQuery: process.env.NODE_ENV === "production" ? null : "warn",
	},
});

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

builder.addScalarType("Date", DateTimeResolver, {});
