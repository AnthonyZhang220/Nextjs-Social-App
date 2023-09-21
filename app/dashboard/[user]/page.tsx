import LeftNav from "../../../components/Home/LeftNav/LeftNav";
import Timeline from "../../../components/Home/Timeline/Timeline";
import Sidebar from "../../../components/Home/Sidebar/Sidebar";

import styles from "./page.module.scss";

export default function Dashboard() {
	return (
		<main className={styles.main}>
			<div className={styles.main_container}>
				<LeftNav />
				<Dashboard />
			</div>
		</main>
	);
}
