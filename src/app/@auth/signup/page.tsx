import Modal from "../../../components/Modal";
import Searchbar from "../../../components/Searchbar";
import TextField from "../../../components/TextField";
import styles from "./page.module.scss";

export default function Signup() {
	return (
		<Modal title="Sign up" buttonContent="Sign Up">
			<div className={styles.login}>
				<div className={styles.login_title}>
					<h4>Create a account</h4>
				</div>
				<div className={styles.login_OAuth}></div>
				<div className={styles.divider}>or</div>
				<div className={styles.login_cred}>
					<TextField name="email" lineHeight={1.5} />
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
