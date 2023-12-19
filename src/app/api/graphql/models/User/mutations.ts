import prisma from "@/prisma/database";
import { builder } from "../../builder";

builder.mutationFields((t) => ({
	updateProfile: t.prismaField({
		type: "User",
		args: {
			id: t.arg.string({ required: true }),
			displayName: t.arg.string(),
			bio: t.arg.string(),
			banner: t.arg.string(),
			avatar: t.arg.string(),
		},
		resolve: async (query, parent, args, context, info) => {
			return prisma.user.update({
				...query,
				where: {
					id: args.id,
				},
				data: {
					displayName: args.displayName,
					profile: {
						upsert: {
							create: {
								bio: args.bio,
								banner: args.banner,
								avatar: args.avatar,
							},
							update: {
								bio: args.bio,
								banner: args.banner,
								avatar: args.avatar,
							},
						},
					},
				},
			});
		},
	}),
}));
