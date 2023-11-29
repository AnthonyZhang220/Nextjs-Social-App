import Landing from "@/layout/Landing";

import styles from "./page.module.scss";

export default function LandingPage() {
	return (
		<div className="app">
			<div className={styles.landing_container}>
				<Landing />
			</div>
		</div>
	);
}
