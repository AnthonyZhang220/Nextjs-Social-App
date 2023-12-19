//./api/graphql/types/Post.ts

import prisma from "@/prisma/database";
import { builder } from "../../builder";
import { UserUniqueInput } from "../User";
import { Visible } from "../../enums/visible";

builder.enumType(Visible, {
	name: "Visible",
});

builder.prismaObject("Post", {
	fields: (t) => ({
		id: t.exposeString("id"),
		visibleTo: t.field({
			type: Visible,
			resolve: (post) => post.visibleTo as Visible,
		}),
		published: t.exposeBoolean("published"),
		createdAt: t.expose("createdAt", { type: "DateTime" }),
		updatedAt: t.expose("updatedAt", { type: "DateTime" }),
		title: t.exposeString("title", { nullable: true }),
		content: t.exposeString("content", { nullable: true }),
		likes: t.relation("likes"),
		comments: t.relation("comments"),
		media: t.relation("media"),
		category: t.relation("category"),
		viewCount: t.exposeInt("viewCount"),
		likeCount: t.relationCount("likes"),
		replyCount: t.relationCount("comments"),
		author: t.relation("author"),
		authorId: t.exposeString("authorId"),
	}),
});

const SortOrder = builder.enumType("SortOrder", {
	values: ["asc", "desc"] as const,
});
const PostOrderByUpdatedAtInput = builder.inputType(
	"PostOrderByUpdatedAtInput",
	{
		fields: (t) => ({
			updatedAt: t.field({
				type: SortOrder,
				required: true,
			}),
		}),
	}
);
/* QUERY FIELDS */
builder.queryFields((t) => ({
	getAllPublishedPost: t.prismaField({
		type: ["Post"],
		resolve: (query) => {
			return prisma.post.findMany({
				...query,
				where: { published: true, visibleTo: "Everyone" },
			});
		},
	}),
	searchPostByString: t.prismaField({
		type: ["Post"],
		args: {
			searchString: t.arg.string(),
			skip: t.arg.int(),
			take: t.arg.int(),
		},
		resolve: (query, root, args, ctx, info) => {
			const { searchString, skip, take } = args;
			const postSearch = searchString
				? {
						OR: [
							{ title: { contains: searchString } },
							{ content: { contains: searchString } },
						],
				  }
				: {};
			return prisma.post.findMany({
				...query,
				where: { published: true, visibleTo: "Everyone", ...postSearch },
				take: take ?? undefined,
				skip: skip ?? undefined,
			});
		},
	}),
	getPostInfoById: t.prismaField({
		type: "Post",
		nullable: true,
		args: {
			id: t.arg.string({ required: true }),
		},
		resolve: (query, parent, args) =>
			prisma.post.findUnique({
				...query,
				where: { id: args.id },
			}),
	}),
	getAllPostWithVideo: t.prismaField({
		type: ["Post"],
		resolve: (query, parent, args) => {
			return prisma.post.findMany({
				...query,
				include: {
					media: true,
				},
				where: {
					published: true,
					visibleTo: "Everyone" || "Friends",
					media: {
						every: {
							videoSrc: {
								isEmpty: false,
							},
						},
					},
				},
			});
		},
	}),
	getPostDetail: t.prismaField({
		type: "Post",
		args: {
			id: t.arg.string({ required: true }),
		},
		resolve: async (query, parent, args, context, info) => {
			const postDetail = await prisma.post.findUniqueOrThrow({
				...query,
				where: {
					id: args.id ?? undefined,
				},
			});

			return postDetail;
		},
	}),
	getMyMoments: t.prismaField({
		type: ["Post"],
		args: {
			id: t.arg.string({ required: true }),
		},
		resolve: async (query, parent, args, context, info) => {
			// Fetch the user's friends
			const user = await prisma.user.findUniqueOrThrow({
				where: {
					id: args.id,
				},
				include: {
					friends: true,
				},
			});

			if (!user) {
				// Handle case where user is not found
				[];
			}
			console.log("user", user);

			const friendIds = user.friends.map((friend) => friend.friendsId);

			// Fetch posts where the author is one of the user's friends
			const posts = await prisma.post.findMany({
				...query,
				where: {
					OR: [
						{
							authorId: {
								in: friendIds,
							},
						},
						{
							authorId: {
								contains: args.id,
							},
						},
					],
					published: true,
					visibleTo: "Everyone" || "Friends",
				},
			});

			return posts;
		},
	}),
	timelineByCategory: t.prismaField({
		type: ["Post"],
		args: {
			category: t.arg.string(),
			skip: t.arg.int(),
			take: t.arg.int(),
			orderBy: t.arg({
				type: PostOrderByUpdatedAtInput,
			}),
		},
		resolve: (query, parent, args) => {
			return prisma.post.findMany({
				...query,
				where: {
					published: true,
					visibleTo: "Everyone",
				},
				take: args.take ?? undefined,
				skip: args.skip ?? undefined,
				orderBy: args.orderBy ?? undefined,
			});
		},
	}),
	draftsByUser: t.prismaField({
		type: ["Post"],
		nullable: true,
		args: {
			id: t.arg.string(),
			email: t.arg.string(),
		},
		resolve: async (query, parent, args, context, info) => {
			return prisma.user
				.findUnique({
					where: {
						id: args.id ?? undefined,
						email: args.email ?? undefined,
					},
				})
				.posts({
					...query,
					where: {
						published: false,
					},
				});
		},
	}),
}));
