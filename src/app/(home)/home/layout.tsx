import type { Metadata } from "next";
import Sidebar from "../../../layout/Sidebar";
import Footer from "../../../layout/Footer";
import styles from "./page.module.scss";

export const metadata: Metadata = {
	title: "Home / NextJS Social App",
	description: "Created by NextJS, Typescript and React.",
};

export default function HomeLayout(props: {
	draft: React.ReactNode;
	timeline: React.ReactNode;
}) {
	return (
		<div className={styles.main_content}>
			<div className={styles.draft_section}>{props.draft}</div>
			<div className={styles.timeline_section}>{props.timeline}</div>
		</div>
	);
}
