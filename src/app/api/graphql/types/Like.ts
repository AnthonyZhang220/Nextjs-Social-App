import prisma from "@/prisma/database";
import { builder } from "../builder";

builder.prismaObject("Like", {
	fields: (t) => ({
		id: t.exposeString("id"),
		author: t.relation("author"),
		authorId: t.exposeString("authorId"),
		post: t.relation("post"),
		postId: t.exposeString("postId"),
	}),
});

builder.mutationFields((t) => ({
	toggleLikeToPost: t.prismaField({
		type: "Like",
		args: {
			authorId: t.arg.string({ required: true }),
			postId: t.arg.string({ required: true }),
		},
		resolve: async (query, parent, args) => {
			const existingLike = await prisma.like.findFirst({
				...query,
				where: {
					authorId: args.authorId,
					postId: args.postId,
				},
			});

			if (existingLike) {
				return prisma.like.delete({
					...query,
					where: {
						id: existingLike.id,
					},
				});
			} else {
				return prisma.like.create({
					...query,
					data: {
						authorId: args.authorId,
						postId: args.postId,
					},
				});
			}
		},
	}),
}));
