import Draft from "./Draft";
import Post from "./Post";
import Tab from "../components/Tab";
import { posts } from "@/mockdata";
import styles from "../styles/sass/layout/Timeline.module.scss";

export default function Timeline() {
	return (
		<section className={styles.timeline}>
			{posts.map((data, index) => (
				<Post {...data} key={index} />
			))}
		</section>
	);
}
