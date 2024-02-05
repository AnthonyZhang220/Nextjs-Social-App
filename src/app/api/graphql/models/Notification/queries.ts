import { builder } from "../../builder";
import prisma from "@/prisma/database";

builder.prismaObject("Notification", {
	fields: (t) => ({
		id: t.exposeString("id"),
		createdAt: t.expose("createdAt", { type: "DateTime" }),
		notificationType: t.relation("notificationType"),
		notificationTypeId: t.exposeString("notificationTypeId"),
		sender: t.relation("sender"),
		senderId: t.exposeString("senderId"),
		userNotification: t.relation("userNotification"),
		userNotificationCount: t.relationCount("userNotification"),
	}),
});
