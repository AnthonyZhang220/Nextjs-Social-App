import Sidebar from "./Main/Sidebar/Sidebar";
import LeftNav from "./Main/LeftNav/LeftNav";
import Timeline from "./Main/Timeline/Timeline";

import styles from "./Main.module.scss";

export default function Main() {
	return (
		<main className={styles.main}>
			<div className={styles.main_container}>
				<LeftNav />
				<Timeline />
				<Sidebar />
			</div>
		</main>
	);
}
