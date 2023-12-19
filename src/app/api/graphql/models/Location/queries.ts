
import { builder } from "../../builder";

builder.prismaObject("Location", {
	fields: (t) => ({
		id: t.exposeString("id"),
		name: t.exposeString("name", { nullable: true }),
		latitude: t.exposeFloat("latitude", { nullable: true }),
		longitude: t.exposeFloat("longitude", { nullable: true }),
		city: t.exposeString("city", { nullable: true }),
		country: t.exposeString("country", { nullable: true }),
		profile: t.relation("profile"),
	}),
});
