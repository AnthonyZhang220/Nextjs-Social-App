import { builder } from "../../builder";

builder.prismaObject("Notification_Type", {
	fields: (t) => ({
		id: t.exposeString("id"),
		type: t.exposeString("type"),
		notification: t.relation("notification"),
	}),
});
