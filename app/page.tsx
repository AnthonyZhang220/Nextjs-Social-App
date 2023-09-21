'use client'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Landing from "../components/Landing";

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
