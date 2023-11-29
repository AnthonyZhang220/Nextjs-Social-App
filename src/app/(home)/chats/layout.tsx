import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Chats / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function ChatLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
