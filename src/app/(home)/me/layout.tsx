import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Me / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function MeLayout({ children }: { children: React.ReactNode }) {
	return children;
}
