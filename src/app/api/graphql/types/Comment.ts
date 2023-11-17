import { builder } from "../builder";

builder.prismaObject("Comment", {
	fields: (t) => ({
		author: t.relation("author"),
	}),
});
