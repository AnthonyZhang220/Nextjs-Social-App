import LeftNav from "../../components/LeftNav/LeftNav";
import Timeline from "../../components/Timeline/Timeline";
import Sidebar from "../../components/Sidebar/Sidebar";
import Draft from "../../components/Draft/Draft";
import Footer from "../../components/Footer/Footer";
import PostLoading from "../../components/Post/PostLoading";
import { Suspense } from "react";

import styles from "./page.module.scss";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.leftnav}>
				<div className={styles.menu}>
					<LeftNav />
				</div>
			</div>
			<div className={styles.main_content}>
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
