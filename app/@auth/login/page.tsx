import Modal from "../../../components/CustomComponents/Modal";
import Searchbar from "../../../components/CustomComponents/Searchbar";
import styles from "./page.module.scss";

export default function Login() {
	return (
		<Modal>
			<div className={styles.login}>
				<div className={styles.login_title}>
					<h4>Sign in to X</h4>
				</div>
				<div className={styles.login_OAuth}></div>
				<div className={styles.divider}>or</div>
				<div className={styles.login_cred}>
					<Searchbar htmlFor="email" name="email" lineHeight={12} />
				</div>
				<div className={styles.login_button} role="button">
					<span>Next</span>
				</div>
				<div className={styles.login_forgot} role="button">
					<span>Forgot password?</span>
				</div>
			</div>
		</Modal>
	);
}
