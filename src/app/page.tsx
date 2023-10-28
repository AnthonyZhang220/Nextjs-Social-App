import Landing from "../layout/Landing";

import styles from "./page.module.scss";

export default function App() {
	return (
		<div className="app">
			<main className={styles.main}>
				<div className={styles.main_container}>
					<Landing />
				</div>
			</main>
		</div>
	);
}
