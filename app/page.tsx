import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Landing from "../components/layout/Landing";

import styles from "./page.module.scss";

export default function App() {
	return (
		<div className="app">
			<Header />
			<main className={styles.main}>
				<div className={styles.main_container}>
					<Landing />
				</div>
			</main>
		</div>
	);
}
