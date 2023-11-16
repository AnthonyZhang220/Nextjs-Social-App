import prisma from "@/prisma/database";
import { builder } from "../builder";
import { PostCreateInput } from "./Post";

builder.prismaObject("User", {
	fields: (t) => ({
		id: t.exposeString("id"),
		postCount: t.relationCount("posts", {
			where: {
				published: true,
			},
		}),
		name: t.exposeString("name", { nullable: true }),
		displayName: t.exposeString("displayName", { nullable: true }),
		email: t.exposeString("email", { nullable: true }),
		createdAt: t.expose("createdAt", { type: Date }),
		updatedAt: t.expose("updatedAt", { type: Date }),
		image: t.exposeString("image", { nullable: true }),
		profile: t.relation("profile", { nullable: true }),
		friend: t.relation("friends"),
		comment: t.relation("comments"),
		account: t.relation("accounts"),
		session: t.relation("sessions"),
		post: t.relation("posts", {
			query: (args, context) => ({
				orderBy: {
					createdAt: "desc",
				},
			}),
		}),
		bio: t.string({
			// The profile relation will always be loaded, and user will now be typed to include the
			// profile field so you can return the bio from the nested profile relation.
			resolve: (user) => user.profile.bio,
		}),
		
	}),
});

export const UserUniqueInput = builder.inputType("UserUniqueInput", {
	fields: (t) => ({
		id: t.string(),
		email: t.string(),
	}),
});

export const UserCreateInput = builder.inputType("UserCreateInput", {
	fields: (t) => ({
		email: t.string({ required: true }),
		name: t.string(),
		post: t.field({ type: [PostCreateInput] }),
	}),
});

builder.queryType({
	description: "Query User info by email",
	fields: (t) => ({
		me: t.prismaField({
			type: "User",
			args: {
				email: t.arg.email({ required: true }),
			},
			resolve: (query, root, args, ctx, info) =>
				prisma.user.findUnique({
					...query,
					where: { id: args.id },
				}),
		}),
	}),
});

builder.queryFields((t) => ({
	allUsers: t.prismaField({
		type: "User",
		resolve: () => prisma.user.findMany(),
	}),
}));
