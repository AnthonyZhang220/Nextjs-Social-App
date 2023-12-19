import { builder } from "../../builder";

builder.prismaObject("Category", {
	fields: (t) => ({
		id: t.exposeString("id"),
		category: t.exposeString("category"),
		post: t.relation("post"),
		postId: t.exposeString("postId", { nullable: true }),
	}),
});
