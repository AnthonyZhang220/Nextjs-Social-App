import LeftNav from "../../layout/LeftNav";
import Header from "../../layout/Header";
import VideoSlide from "@/layout/VideoSlide";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Suspense } from "react";
import { auth } from "../api/auth/[...nextauth]/options";

import styles from "./page.module.scss";

export default async function Discover() {
	const session = await auth();

	return (
		<>
			<Header session={session} />
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
		</>
	);
}
