import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Discover / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function DiscoverLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
