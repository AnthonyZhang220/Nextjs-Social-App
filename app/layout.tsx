import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function RootLayout(props: {
	children: React.ReactNode;
	auth: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{props.children}
				{props.auth}
			</body>
		</html>
	);
}
