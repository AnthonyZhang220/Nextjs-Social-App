import styles from "../styles/sass/components/Loading.module.scss";

export default function Loading() {
	return (
		<div className={styles.lds_ring}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
