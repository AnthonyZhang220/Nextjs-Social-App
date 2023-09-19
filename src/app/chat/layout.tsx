import Header from "@/components/Header";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

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