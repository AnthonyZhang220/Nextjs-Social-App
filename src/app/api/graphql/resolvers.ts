import prisma from "../../../prisma/database";

export const resolvers = {
	Query: {
		allPost: () => {
			return prisma.post.findMany();
		},
		getPostByCatogories: () => {
			return prisma.post.findMany();
		},
	},
};
