import LeftNav from "../../components/layout/LeftNav";
import Timeline from "../../components/layout/Timeline";
import Sidebar from "../../components/layout/Sidebar";
import Draft from "../../components/layout/Draft";
import Footer from "../../components/layout/Footer";
import PostLoading from "../../components/layout/PostLoading";
import { Suspense } from "react";

import styles from "./page.module.scss";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.main_container}>
				<div className={styles.leftnav}>
					<div className={styles.menu}>
						<LeftNav />
					</div>
				</div>
				<div className={styles.timeline}>
					<Draft />
					<Suspense fallback={<PostLoading />}>
						<Timeline />
					</Suspense>
				</div>
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
