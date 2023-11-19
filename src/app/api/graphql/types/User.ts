//./api/graphql/types/User.ts

import prisma from "@/prisma/database";
import { builder } from "../builder";
// import { PostCreateInput } from "./Post";

builder.prismaObject("User", {
	fields: (t) => ({
		id: t.exposeString("id"),
		name: t.exposeString("name", { nullable: true }),
		displayName: t.exposeString("displayName", { nullable: true }),
		image: t.exposeString("image", { nullable: true }),
		email: t.exposeString("email", { nullable: true }),
		emailVerified: t.expose("emailVerified", {
			type: "DateTime",
			nullable: true,
		}),
		createdAt: t.expose("createdAt", { type: "DateTime" }),
		updatedAt: t.expose("updatedAt", { type: "DateTime" }),
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
		profile: t.relation("profile"),
		friends: t.relation("friends"),
		comments: t.relation("comments"),
		likes: t.relation("likes"),
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
	getAllUsers: t.prismaField({
		type: ["User"],
		resolve: (query) => prisma.user.findMany({ ...query }),
	}),
	getMyProfile: t.prismaField({
		type: "User",
		args: {
			id: t.arg.string({ required: true }),
		},
		resolve: (query, root, args) =>
			prisma.user.findUniqueOrThrow({
				...query,
				where: { id: args.id },
				include: {
					profile: true,
				},
			}),
	}),
	searchUserByString: t.prismaField({
		type: ["User"],
		args: {
			searchString: t.arg.string(),
			skip: t.arg.int(),
			take: t.arg.int(),
		},
		resolve: (query, root, args, ctx, info) => {
			const { searchString, skip, take } = args;
			const userSearch = searchString
				? {
						OR: [
							{ name: { contains: searchString } },
							{ username: { contains: searchString } },
							{ displayName: { contains: searchString } },
						],
				  }
				: {};

			return prisma.user.findMany({
				...query,
				where: { ...userSearch },
				take: take ?? undefined,
				skip: skip ?? undefined,
			});
		},
	}),
}));
