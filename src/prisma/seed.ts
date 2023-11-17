// // prisma/seed.ts

// import prisma from "./database";
// import { posts } from "@/mockdata";

// async function main() {
// 	await prisma.user.create({
// 		data: {
// 			email: `testemail@gmail.com`,
// 		},
// 	});

// 	await prisma.post.createMany({
// 		data: posts,
// 	});
// }

// main()
// 	.catch((e) => {
// 		console.error(e);
// 		process.exit(1);
// 	})
// 	.finally(async () => {
// 		await prisma.$disconnect();
// 	});
