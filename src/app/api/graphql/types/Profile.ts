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
