import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Settings / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function SettingsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
