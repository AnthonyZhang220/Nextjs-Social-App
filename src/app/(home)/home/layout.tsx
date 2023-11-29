import type { Metadata } from "next";
import Header from "@/layout/Header";

export const metadata: Metadata = {
	title: "Home / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
