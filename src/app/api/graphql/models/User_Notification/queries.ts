import { builder } from "../../builder";
import prisma from "@/prisma/database";

builder.prismaObject("UserNotification", {
	fields: (t) => ({
		id: t.exposeString("id"),
		recipient: t.relation("recipient"),
		recipientId: t.exposeString("recipientId"),
		notification: t.relation("notification"),
		notificationId: t.exposeString("notificationId"),
		status: t.exposeString("status"),
		isRead: t.exposeBoolean("isRead"),
	}),
});

builder.queryFields((t) => ({
	getMyNotifications: t.prismaField({
		type: ["UserNotification"],
		args: {
			id: t.arg.string({ required: true }),
		},
		resolve: async (query, root, args, ctx, info) => {
			const notifications = await prisma.userNotification.findMany({
				where: {
					recipientId: args.id,
				},
			});

			if (!notifications) {
				return [];
			}

			return notifications;
		},
	}),
}));
