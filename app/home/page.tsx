import LeftNav from "../../components/LeftNav/LeftNav";
import Timeline from "../../components/Timeline/Timeline";
import Sidebar from "../../components/Sidebar/Sidebar";

import styles from "./page.module.scss";
import Draft from "../../components/Draft/Draft";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.main_container}>
				<div className={styles.main_leftnav}>
					<LeftNav />
				</div>
				<div className={styles.main_timeline}>
					<Draft />
					<Timeline />
				</div>
				<Sidebar />
			</div>
		</main>
	);
}
