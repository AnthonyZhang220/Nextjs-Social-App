import { builder } from "../../builder";

builder.prismaObject("Comment", {
	fields: (t) => ({
		id: t.exposeString("id"),
		content: t.exposeString("content"),
		author: t.relation("author"),
		authorId: t.exposeString("authorId"),
		post: t.relation("post"),
		postId: t.exposeString("postId", { nullable: true }),
	}),
});

