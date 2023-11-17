import { builder } from "../builder";

builder.prismaObject("Media", {
	fields: (t) => ({
		id: t.exposeString("id"),
		image: t.relation("image"),
		videoSrc: t.exposeString("videoSrc", { nullable: true }),
		post: t.relation("post"),
	}),
});
