import Header from "../../components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="home">
			<Header />
			{children}
		</div>
	);
}