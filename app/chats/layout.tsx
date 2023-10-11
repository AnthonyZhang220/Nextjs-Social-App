import Header from "../../components/layout/Header";

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
	return (
		<div className="chat">
			<Header />
			{children}
		</div>
	);
}
