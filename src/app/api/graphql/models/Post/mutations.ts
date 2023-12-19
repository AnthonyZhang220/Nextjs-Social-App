import prisma from "@/prisma/database";
import { builder } from "../../builder";
import { Visible } from "../../enums/visible";

export const PostCreateInput = builder.inputType("PostCreateInput", {
	fields: (t) => ({
		title: t.string(),
		visibleTo: t.field({ type: Visible, required: true }),
		content: t.string({ required: true }),
		author: t.string({ required: true }),
	}),
});

/* MUTATION FIELDS */
builder.mutationFields((t) => ({
	createPost: t.prismaField({
		type: "Post",
		args: {
			data: t.arg({
				type: PostCreateInput,
				required: true,
			}),
		},
		resolve: async (query, root, args, context, info) => {
			return prisma.post.create({
				data: {
					title: args.data.title,
					content: args.data.content,
					published: true,
					visibleTo: args.data.visibleTo,
					viewCount: 1,
					author: {
						connect: {
							id: args.data.author,
						},
					},
				},
			});
		},
	}),
	togglePublishPost: t.prismaField({
		type: "Post",
		args: {
			id: t.arg.string({ required: true }),
		},
		resolve: async (query, parent, args, context, info) => {
			// Toggling become simpler once this bug is resolved: https://github.com/prisma/prisma/issues/16715
			const postPublished = await prisma.post.findUnique({
				where: { id: args.id },
				select: { published: true },
			});
			console.log(postPublished);
			return prisma.post.update({
				...query,
				where: { id: args.id },
				data: { published: !postPublished?.published },
			});
		},
	}),
	incrementPostViewCount: t.prismaField({
		type: "Post",
		args: {
			id: t.arg.string({ required: true }),
		},
		resolve: async (query, root, args, context, info) => {
			return prisma.post.update({
				...query,
				where: { id: args.id },
				data: {
					viewCount: {
						increment: 1,
					},
				},
			});
		},
	}),
	deletePost: t.prismaField({
		type: "Post",
		args: {
			id: t.arg.string({ required: true }),
		},
		resolve: (query, parent, args) => {
			return prisma.post.delete({
				...query,
				where: { id: args.id },
			});
		},
	}),
}));
