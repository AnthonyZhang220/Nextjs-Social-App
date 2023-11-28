import styles from "../styles/sass/components/Error.module.scss";

function Error({ ...props }) {
	const { error } = props;
	return (
		<div className={styles.error}>
			<div className={styles.error_container}>{error}</div>
		</div>
	);
}

export default Error;
