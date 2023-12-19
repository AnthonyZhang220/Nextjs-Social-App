import prisma from "@/prisma/database";
import { builder } from "../../builder";

builder.prismaObject("Profile", {
	fields: (t) => ({
		id: t.exposeString("id"),
		avatar: t.exposeString("avatar", { nullable: true }),
		banner: t.exposeString("banner", { nullable: true }),
		bio: t.exposeString("bio", { nullable: true }),
		profession: t.exposeString("profession", { nullable: true }),
		location: t.relation("location", { nullable: true }),
		locationId: t.exposeString("locationId", { nullable: true }),
		user: t.relation("user"),
		userId: t.exposeString("userId"),
	}),
});

builder.queryFields((t) => ({
	profile: t.prismaField({
		type: "Profile",
		args: {
			id: t.arg.string({ required: true }),
		},
		resolve: async (query, root, args, ctx, info) => {
			return prisma.profile.findUniqueOrThrow({
				where: {
					id: args.id,
				},
			});
		},
	}),
}));