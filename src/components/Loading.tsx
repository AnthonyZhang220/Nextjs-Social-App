import styles from "../styles/sass/components/Loading.module.scss";

export default function Loading() {
	return (
		<div className={styles.loading_ring_container}>
			<div className={styles.loading_ring}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
