import LeftNav from "../../layout/LeftNav";
import VideoSlide from "@/layout/VideoSlide";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Suspense } from "react";

import styles from "./page.module.scss";

export default function Discover() {
	return (
		<main className={styles.main}>
			<div className={styles.main_container}>
				<div className={styles.leftnav}>
					<LeftNav />
				</div>
				<div className={styles.videoslide}>
					<VideoSlide />
				</div>
			</div>
			<div className={styles.nav_arrow}>
				<div className={styles.prev}>
					<KeyboardArrowUpIcon />
				</div>
				<div className={styles.next}>
					<KeyboardArrowDownIcon />
				</div>
			</div>
		</main>
	);
}
