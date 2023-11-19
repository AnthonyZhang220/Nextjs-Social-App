
import { builder } from "../builder";

builder.prismaObject("Location", {
	fields: (t) => ({
		id: t.exposeString("id"),
		name: t.exposeString("name"),
		latitude: t.exposeFloat("latitude"),
		longitude: t.exposeFloat("longitude"),
		city: t.exposeString("city", { nullable: true }),
		country: t.exposeString("country", { nullable: true }),
		profile: t.relation("profile"),
	}),
});
