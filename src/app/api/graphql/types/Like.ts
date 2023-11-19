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
	addLikeToPost: t.prismaField({
		type: "Like",
		args: {
			authorId: t.arg.string({ required: true }),
			postId: t.arg.string({ required: true }),
		},
		resolve: async (query, parent, args) => {
			return prisma.like.create({
				...query,
				data: {
					author: {
						connect: {
							id: args.authorId,
						},
					},
					post: {
						connect: {
							id: args.postId,
						},
					},
				},
			});
		},
	}),
}));
