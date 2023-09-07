import Article from "./Article";
import styles from "./Section.module.scss";

export default function Section() {
	return (
		<section className={styles.section}>
			<div>Main Section</div>
			<Article />
		</section>
	);
}
