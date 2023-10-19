import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../../../../prisma/database";

export const options: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID ?? "",
			clientSecret: process.env.GITHUB_SECRET ?? "",
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID ?? "",
			clientSecret: process.env.GOOGLE_SECRET ?? "",
		}),
		TwitterProvider({
			clientId: process.env.TWITTER_ID ?? "",
			clientSecret: process.env.TWITTER_SECRET ?? "",
		}),
	],
	session: {
		strategy: "jwt",
	},
	// pages: {
	// 	signIn: "/signin",
	// 	signOut: "/signout",
	// 	error: "/error",
	// 	verifyRequest: "/auth/verify-request",
	// 	newUser: "/auth/new-user",
	// },
};
