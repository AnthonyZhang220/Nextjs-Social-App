import Sidebar from "./Sidebar";
import Section from "./Section";
import styles from "./Main.module.scss";

export default function Main() {
	return (
		<main className={styles.main}>
			<Section />
			<Sidebar />
		</main>
	);
}
