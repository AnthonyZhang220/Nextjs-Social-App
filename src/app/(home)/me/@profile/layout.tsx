
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function DraftLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
