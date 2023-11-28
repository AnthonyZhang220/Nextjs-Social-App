import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function LandingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="landing">{children}</div>;
}
