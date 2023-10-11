import LeftNav from "../../components/layout/LeftNav";
import Timeline from "../../components/layout/Timeline";
import Sidebar from "../../components/layout/Sidebar";
import Draft from "../../components/layout/Draft";
import Footer from "../../components/layout/Footer";
import PostLoading from "../../components/layout/PostLoading";
import { Suspense } from "react";

import styles from "./page.module.scss";

export default function Notifications() {
	return (
		<main className={styles.main}>
			<div className={styles.leftnav}>
				<div className={styles.menu}>
					<LeftNav />
				</div>
			</div>
			<div className={styles.main_content}>
				<div className={styles.notification}></div>
				<div className={styles.sidebar}>
					<div className={styles.sidebar_container}>
						<Sidebar />
						<Footer />
					</div>
				</div>
			</div>
		</main>
	);
}
