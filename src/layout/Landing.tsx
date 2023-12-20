"use client";

import styles from "../styles/sass/layout/Landing.module.scss";
import Login from "./Login";

function Landing() {
	return (
		<section className={styles.landing}>
			<div className={styles.landing_center}>
				<div className={styles.landing_grid}>
					<div className={styles.landing_icon}>
						<img
							className={styles.landing_img}
							src="static/logo/Moment-logos_transparent.png"
							alt="landing-logo"
						/>
					</div>
					<div className={styles.landing_login}>
						<Login />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Landing;
