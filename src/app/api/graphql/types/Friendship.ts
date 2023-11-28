import { builder } from "../builder";

builder.prismaObject("Friendship", {
	fields: (t) => ({
		friends: t.relation("friends"),
		friendsId: t.exposeString("friendsId"),
		friendOf: t.relation("friendOf"),
		friendOfId: t.exposeString("friendOfId"),
	}),
});
