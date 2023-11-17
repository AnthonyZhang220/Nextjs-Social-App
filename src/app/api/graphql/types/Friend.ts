import { builder } from "../builder";

builder.prismaObject("Friend", {
	fields: (t) => ({
		friend: t.relation("friend"),
	}),
});
