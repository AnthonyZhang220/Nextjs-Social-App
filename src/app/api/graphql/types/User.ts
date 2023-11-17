//./api/graphql/types/User.ts

import prisma from "@/prisma/database";
import { builder } from "../builder";
// import { PostCreateInput } from "./Post";

builder.prismaObject("User", {
	fields: (t) => ({
		id: t.exposeString("id"),
		name: t.exposeString("name", { nullable: true }),
		displayName: t.exposeString("displayName", { nullable: true }),
		email: t.exposeString("email", { nullable: true }),
		createdAt: t.expose("createdAt", { type: "DateTime" }),
		updatedAt: t.expose("updatedAt", { type: "DateTime" }),
		image: t.exposeString("image", { nullable: true }),
		profile: t.relation("profile"),
		// Load posts as list field.
		posts: t.relation("posts", {
			args: {
				oldestFirst: t.arg.boolean(),
			},
			// Define custom query options that are applied when
			// loading the post relation
			query: (args, context) => ({
				orderBy: {
					createdAt: args.oldestFirst ? "asc" : "desc",
				},
			}),
		}),
		postCount: t.relationCount("posts", {
			where: {
				published: true,
			},
		}),
	}),
});

export const UserUniqueInput = builder.inputType("UserUniqueInput", {
	fields: (t) => ({
		id: t.string(),
		email: t.string(),
	}),
});

const UserCreateInput = builder.inputType("UserCreateInput", {
	fields: (t) => ({
		email: t.string({ required: true }),
		name: t.string(),
	}),
});

builder.queryFields((t) => ({
	allUsers: t.prismaField({
		type: ["User"],
		resolve: (query) => prisma.user.findMany({ ...query }),
	}),
}));
