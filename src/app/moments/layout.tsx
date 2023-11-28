import Header from "../../layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Notifications / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="home">{children}</div>;
}
