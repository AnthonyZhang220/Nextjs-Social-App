import { builder } from "../builder";

builder.prismaObject("Post", {
	fields: (t) => ({
		id: t.exposeString("id"),
		created_At: t.expose("created_At", { type: Date }),
		updated_At: t.expose("updated_At", { type: Date }),
		description: t.exposeString("description"),
		imageUrl: t.exposeString("imageUrl"),
		content: t.exposeString("content", { nullable: true }),
		draft: t.exposeBoolean("draft"),
		like: t.relation("like"),
		likeCount: t.exposeInt("likeCount"),
		viewCount: t.exposeInt("viewCount"),
		profile: t.relation("profile", { nullable: true }),
		author: t.relation("User"),
		authorId: t.exposeString("authorId"),
	}),
});
