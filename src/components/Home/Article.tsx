import styles from "./Article.module.scss";

function Article() {
	return (
		<article className={styles.article}>
			<div className={styles.post_container}>
				<div className={styles.post_avatar}></div>
				<div className={styles.post_body}>
					<div className={styles.post_username}></div>
					<div className={styles.post_content}></div>
					<div className={styles.post_button}>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</article>
	);
}

export default Article;
