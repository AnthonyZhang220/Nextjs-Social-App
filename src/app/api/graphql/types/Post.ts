import prisma from "@/prisma/database";
import { builder } from "../builder";

builder.prismaObject("Post", {
	fields: (t) => ({
		id: t.exposeString("id"),
		visibleTo: t.exposeString("visibleTo"),
		createdAt: t.expose("createdAt", { type: Date }),
		updatedAt: t.expose("updatedAt", { type: Date }),
		published: t.exposeBoolean("published"),
		description: t.exposeString("description"),
		imageUrl: t.exposeString("imageUrl"),
		content: t.exposeString("content", { nullable: true }),
		likes: t.relation("like"),
		likeCount: t.exposeInt("likeCount"),
		viewCount: t.exposeInt("viewCount"),
		profile: t.relation("profile", { nullable: true }),
		author: t.relation("user"),
		authorId: t.exposeString("authorId"),
	}),
});

builder.queryField("timeline", (t) =>
	t.prismaField({
		type: "Post",
		resolve: async (query, _parent, _args, _info) =>
			prisma.post.findMany({
				...query,
				where: { published: true },
			}),
	})
);

builder.queryType({
	fields: (t) => ({
		post: t.prismaField({
			type: "Post",
			args: {
				id: t.arg.id({ required: true }),
			},
			resolve: (query, root, args, ctx, info) =>
				prisma.post.findUnique({
					...query,
					where: { id: args.id },
				}),
		}),
	}),
});

export const PostCreateInput = builder.inputType("PostCreatInput", {
	fields: (t) => ({
		visibleTo: t.string({ required: true }),
		published: t.boolean({ required: true }),
		hasImage: t.boolean({ required: true }),
		hasVideo: t.boolean({ required: true }),
		imageUrl: t.string(),
		content: t.string(),
	}),
});
