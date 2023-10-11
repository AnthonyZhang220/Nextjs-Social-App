import styles from "../../styles/sass/layout/Post.module.scss";

function PostLoading() {
	return (
		<article className={styles.post}>
			<div className={styles.post_container}>
				<div className={styles.loading_ring}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</article>
	);
}

export default PostLoading;
