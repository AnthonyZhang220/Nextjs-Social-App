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
	},
	adapter,
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID ?? "",
			clientSecret: process.env.GITHUB_SECRET ?? "",
			profile(profile, token) {
				return {
					id: profile.client_id,
					name: profile.name,
					email: profile.email,
					image: profile.picture,
					token: token.access_token,
				};
			},
			allowDangerousEmailAccountLinking: true,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID ?? "",
			clientSecret: process.env.GOOGLE_SECRET ?? "",
		}),
		TwitterProvider({
			clientId: process.env.TWITTER_ID ?? "",
			clientSecret: process.env.TWITTER_SECRET ?? "",
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
		signIn: "/signin",
		signOut: "/signout",
		error: "/error",
		verifyRequest: "/auth/verify-request",
		newUser: "/auth/new-user",
	},
	callbacks: {
		// async session({ session, token }) {
		// 	//
		// },
		// async jwt({ token, user, account, profile }) {
		// 	//
		// },
	},
	secret: process.env.NEXT_AUTH_SECRET,
};
