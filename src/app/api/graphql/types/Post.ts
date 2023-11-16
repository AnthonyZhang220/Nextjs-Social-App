import prisma from "@/prisma/database";
import { builder } from "../builder";

builder.prismaObject("Post", {
	fields: (t) => ({
		id: t.exposeString("id"),
		visibleTo: t.exposeString("visibleTo"),
		createdAt: t.expose("createdAt", { type: Date }),
		updatedAt: t.expose("updatedAt", { type: Date }),
		published: t.exposeBoolean("published"),
		hasImage: t.exposeBoolean("hasImage"),
		hasVideo: t.exposeBoolean("hasVideo"),
		title: t.exposeString("title"),
		category: t.relation("category"),
		content: t.exposeString("content", { nullable: true }),
		likes: t.relation("likes"),
		viewCount: t.exposeInt("viewCount"),
		author: t.relation("author"),
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
