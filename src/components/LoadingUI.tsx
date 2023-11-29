import styles from "../styles/sass/components/LoadingUI.module.scss";

export default function LoadingUI() {
	return (
		<div className={styles.lds_ellipsis_container}>
			<div className={styles.lds_ellipsis}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
