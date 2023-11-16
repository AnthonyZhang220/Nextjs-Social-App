import prisma from "@/prisma/database";
import { UserUniqueInput } from "./user";
import { builder } from "../builder";

builder.prismaObject("Profile", {
	fields: (t) => ({
		id: t.exposeString("id"),
		avatar: t.exposeString("avatar", { nullable: true }),
		banner: t.exposeString("banner", { nullable: true }),
		bio: t.exposeString("bio"),
		profession: t.exposeString("profession"),
		location: t.relation("location"),
		locationId: t.exposeString("locationId"),
		user: t.relation("User"),
		userId: t.exposeString("userId"),
	}),
});


builder.mutationField("createProfile", (t) =>
	t.prismaField({
		type: "Profile",
		args: {
			bio: t.arg.string({ required: true }),
			data: t.arg({ type: UserUniqueInput }),
		},
		resolve: async (query, _parent, args, _context) =>
			prisma.profile.create({
				...query,
				data: {
					bio: args.bio,
					user: {
						connect: {
							id: args.data?.id || undefined,
							email: args.data?.email || undefined,
						},
					},
				},
			}),
	})
);
