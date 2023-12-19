import { builder } from "../../builder";

builder.prismaObject("Media", {
	fields: (t) => ({
		id: t.exposeString("id"),
		videoSrc: t.exposeString("videoSrc", { nullable: true }),
		post: t.relation("post"),
		postId: t.exposeString("postId", { nullable: true }),
	}),
});
