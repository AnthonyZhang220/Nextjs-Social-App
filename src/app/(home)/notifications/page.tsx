import Sidebar from "../../../layout/Sidebar";
import Footer from "../../../layout/Footer";

import styles from "./page.module.scss";

export default function Notifications() {
	return (
		<>
			<div className={styles.notification}></div>
			<div className={styles.sidebar}>
				<div className={styles.sidebar_container}>
					<Sidebar />
					<Footer />
				</div>
			</div>
		</>
	);
}
