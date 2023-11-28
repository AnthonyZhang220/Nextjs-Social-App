import Header from "../../layout/Header";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Profile / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="me">{children}</div>;
}
