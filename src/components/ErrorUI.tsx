import styles from "../styles/sass/components/ErrorUI.module.scss";

function ErrorUI({ ...props }) {
	const { error } = props;
	return (
		<div className={styles.error}>
			<div className={styles.error_container}>{error}</div>
		</div>
	);
}

export default ErrorUI;
