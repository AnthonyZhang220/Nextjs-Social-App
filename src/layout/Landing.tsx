"use client";

import styles from "../styles/sass/layout/Landing.module.scss";
import Footer from "./Footer";
import Login from "./Login";

function Landing() {
	return (
		<div className={styles.landing}>
			<div className={styles.landing_container}>
				<div className={styles.landing_grid}>
					<div className={styles.landing_icon}>
						<img
							className={styles.landing_img}
							src="static/logo/Moment-logos_transparent.png"
							alt="landing-logo"
							width="100%"
							height="auto"
						/>
					</div>
					<div className={styles.landing_login}>
						<Login />
					</div>
				</div>
			</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
}

export default Landing;
