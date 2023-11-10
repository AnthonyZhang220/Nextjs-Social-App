import { builder } from "../builder";

builder.prismaObject("User", {
	fields: (t) => ({
		id: t.exposeString("id"),
		name: t.exposeString("name", { nullable: true }),
		displayName: t.exposeString("displayName", { nullable: true }),
		email: t.exposeString("email", { nullable: true }),
		created_At: t.expose("created_At", { type: Date }),
		updated_At: t.expose("updated_At", { type: Date }),
		description: t.exposeString("description"),
		imageUrl: t.exposeString("imageUrl"),
		category: t.exposeString("category"),
		profile: t.relation("profile", { nullable: true }),
		friends: t.relation("firend"),
		comments: t.relation("comment"),
		accounts: t.relation("account"),
		sessions: t.relation("session"),
		posts: t.relation("post"),
	}),
});


builder.queryField("currentUser", (t)=>{
	t.prismaField({
		type:['User'],
	    resolve: (query, _parent, _args, _ctx, _info) =>
				prisma.link.findMany({ ...query });
	}),
})
