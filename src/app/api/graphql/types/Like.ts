import { builder } from "../builder";

builder.prismaObject("Like", {
	fields: (t) => ({
		author: t.relation("author"),
		post: t.relation("post"),
	}),
});
