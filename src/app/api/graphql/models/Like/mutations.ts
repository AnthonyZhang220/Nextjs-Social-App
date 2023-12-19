import prisma from "@/prisma/database";
import { builder } from "../../builder";

builder.mutationFields((t) => ({
	toggleLikeToPost: t.prismaField({
		type: "Like",
		args: {
			authorId: t.arg.string({ required: true }),
			postId: t.arg.string({ required: true }),
		},
		resolve: async (query, root, args, ctx, info) => {
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
