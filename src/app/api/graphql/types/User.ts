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
		created_At: t.expose("created_At", { type: Date }),
		updated_At: t.expose("updated_At", { type: Date }),
		description: t.exposeString("description"),
		imageUrl: t.exposeString("imageUrl"),
		category: t.exposeString("category"),
		profile: t.relation("profile", { nullable: true }),
		friend: t.relation("friend"),
		comment: t.relation("comment"),
		account: t.relation("account"),
		session: t.relation("session"),
		post: t.relation("post", {
			query: (args, context) => ({
				orderBy: {
					created_At: "desc",
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
		id: t.int(),
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
	fields: (t) => ({
		me: t.prismaField({
			type: "User",
			args: {
				id: t.arg.id({ required: true }),
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
		resolve: (query) => prisma.user.findMany({ ...query }),
	}),
}));
