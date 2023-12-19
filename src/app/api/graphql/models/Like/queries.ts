import prisma from "@/prisma/database";
import { builder } from "../../builder";

builder.prismaObject("Like", {
	fields: (t) => ({
		id: t.exposeString("id"),
		author: t.relation("author"),
		authorId: t.exposeString("authorId"),
		post: t.relation("post"),
		postId: t.exposeString("postId"),
	}),
});