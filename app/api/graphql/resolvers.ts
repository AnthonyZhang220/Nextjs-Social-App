import prisma from "../../../prisma/databse";

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
