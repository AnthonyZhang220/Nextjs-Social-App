import LeftNav from "../../components/Home/LeftNav/LeftNav";

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
