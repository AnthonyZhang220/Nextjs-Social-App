import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function DashboardLayout({
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
