import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Landing from "../components/Landing/Landing";

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
			<Footer />
		</div>
	);
}
