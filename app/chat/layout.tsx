import Header from "../../components/Header";
import Footer from "../../components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Chat / NextJS Social App",
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
			<Footer />
		</div>
	);
}
