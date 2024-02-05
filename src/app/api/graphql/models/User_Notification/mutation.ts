import { builder } from "../../builder";
import prisma from "@/prisma/database";

builder.mutationFields((t) => ({
	acceptFriendRequest: t.prismaField({
		type: "UserNotification",
		args: {
			id: t.arg.string({ required: true }),
		},
		resolve: async (query, root, args, ctx, info) => {
			const request = await prisma.userNotification.update({
				where: {
					id: args.id,
				},
				data: {
					isRead: true,
					status: "Accepted",
				},
			});

			return request;
		},
	}),
	ignoreFriendRequest: t.prismaField({
		type: "UserNotification",
		args: {
			id: t.arg.string({ required: true }),
		},
		resolve: async (query, root, args, ctx, info) => {
			const request = await prisma.userNotification.update({
				where: {
					id: args.id,
				},
				data: {
					isRead: true,
					status: "Ignored",
				},
			});
			return request;
		},
	}),
	dismissNotification: t.prismaField({
		type: "UserNotification",
		args: {
			id: t.arg.string({ required: true }),
		},
		resolve: async (query, root, args, ctx, info) => {
			const request = await prisma.userNotification.update({
				where: {
					id: args.id,
				},
				data: {
					isRead: true,
					status: "Pending",
				},
			});
			return request;
		},
	}),
}));
