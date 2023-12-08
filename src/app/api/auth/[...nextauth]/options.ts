import type { NextAuthOptions } from "next-auth";
import type {
	GetServerSidePropsContext,
	NextApiRequest,
	NextApiResponse,
} from "next";
import { getServerSession } from "next-auth";
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
import { userInfo } from "os";

export const adapter: Adapter = PrismaAdapter(prisma);
export const googleAuthClient = new OAuth2Client(
	process.env.OAUTH_GOOGLE_CLIENT_ID as string
);

export const authOptions: NextAuthOptions = {
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
		async signIn({ user, account, profile, email, credentials }) {
			// The user object contains information about the authenticated user
			// The account object contains information about the authentication account
			// The profile object contains the user profile information from the provider

			// Check if it's the user's first login
			const isFirstLogin = !user.id;

			if (isFirstLogin && user.name) {
				// Create a user profile or perform other actions for the first login
				const newUser = await prisma.user.create({
					data: {
						email: user.email,
						name: user.name,
						username: await generateUniqueUsername(user.name),
						profile: {
							create: {
								avatar: user.image,
							},
						},
						// Add other user properties as needed
					},
				});

				user.id = newUser.id;
			}

			return Promise.resolve(true);
		},
		async session({ session, token, user }) {
			session.user = user;
			console.log("server" + { ...session.user });
			return session;
		},
	},
	secret: process.env.NEXT_AUTH_SECRET,
	debug: true,
};

export function auth(
	...args:
		| [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
		| [NextApiRequest, NextApiResponse]
		| []
) {
	return getServerSession(...args, authOptions);
}

async function generateUniqueUsername(
	originalUsername: string
): Promise<string> {
	let username = originalUsername;
	let suffix = 1;

	while (await prisma.user.findUnique({ where: { username } })) {
		// If the username already exists, add a random number as a suffix
		username = `${originalUsername}${suffix}`;
		suffix += 1;
	}

	return username;
}
