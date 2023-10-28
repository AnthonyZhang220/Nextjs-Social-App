import LeftNav from "../../layout/LeftNav";
import Timeline from "../../layout/Timeline";
import Sidebar from "../../layout/Sidebar";
import Draft from "../../layout/Draft";
import Footer from "../../layout/Footer";
import PostLoading from "../../layout/PostLoading";
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
