import type { NextAuthOptions } from "next-auth";
/* Providers */
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";

/* Prisma and Adapter */
import prisma from "../../../../prisma/database";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";

/* Gooogle Auth Client */
import { OAuth2Client } from "google-auth-library";
import { authorize } from "./authorization";

export const adapter: Adapter = PrismaAdapter(prisma);
export const googleAuthClient = new OAuth2Client(
	process.env.OAUTH_GOOGLE_CLIENT_ID as string
);

export const options: NextAuthOptions = {
	session: {
		strategy: "database",
		maxAge: 14 * 24 * 60 * 60, // 14 days
		updateAge: 24 * 60 * 60, // 24 hours
	},
	adapter,
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
		TwitterProvider({
			clientId: process.env.TWITTER_ID as string,
			clientSecret: process.env.TWITTER_SECRET as string,
		}),
		CredentialsProvider({
			// this!
			id: "googleonetap", // We will use this id later to specify for what Provider we want to trigger the signIn method
			name: "google-one-tap",

			// This means that the authentication will be done through a single credential called 'credential'
			credentials: {
				credential: { type: "text" },
			},
			// This function will be called upon signIn
			authorize,
		}),
	],
	pages: {
		signIn: "/login",
		signOut: "/home",
		error: "/error",
		verifyRequest: "/auth/verify-request",
		newUser: "/me",
	},
	callbacks: {
		// /*
		//  * While using `jwt` as a strategy, `jwt()` callback will be called before
		//  * the `session()` callback. So we have to add custom parameters in `token`
		//  * via `jwt()` callback to make them accessible in the `session()` callback
		//  */
		// async jwt({ token, user }) {
		// 	if (user) {
		// 		/*
		// 		 * For adding custom parameters to user in session, we first need to add those parameters
		// 		 * in token which then will be available in the `session()` callback
		// 		 */
		// 		token.role = user.role;
		// 		token.fullName = user.fullName;
		// 	}
		// 	return token;
		// },
		// async session({ session, token }) {
		// 	if (session.user) {
		// 		// ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
		// 		session.user.role = token.role;
		// 		session.user.fullName = token.fullName;
		// 	}
		// 	return session;
		// },
	},
	secret: process.env.NEXT_AUTH_SECRET,
	debug: true,
	logger: {
		error(code, metadata) {
			console.error(code, metadata);
		},
		warn(code) {
			console.warn(code);
		},
		debug(code, metadata) {
			console.debug(code, metadata);
		},
	},
};
