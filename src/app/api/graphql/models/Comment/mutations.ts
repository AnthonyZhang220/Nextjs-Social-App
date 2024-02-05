import prisma from "@/prisma/database";
import { builder } from "../../builder";

builder.mutationFields((t) => ({
	createComment: t.prismaField({
		type: "Comment",
		args: {
			author: t.arg.string({ required: true }),
			content: t.arg.string({ required: true }),
			post: t.arg.string({ required: true }),
		},
		resolve: async (query, root, args, context, info) => {
			return prisma.comment.create({
				data: {
					authorId: args.author,
					content: args.content,
					postId: args.post,
				},
			});
		},
	}),
}));
