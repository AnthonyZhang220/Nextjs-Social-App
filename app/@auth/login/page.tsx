"use client";

import { signIn } from "next-auth/react";
import Modal from "../../../components/CustomComponents/Modal";
import Button from "../../../components/CustomComponents/Button";
import styles from "./page.module.scss";

export default function Login() {
	return (
		<Modal>
			<div className={styles.login}>
				<div className={styles.login_title}>
					<h3>Sign in to X</h3>
				</div>
				<div className={styles.login_cred}>
					<form action="" className={styles.login_form}>
						<label htmlFor="email">Email:</label>
						<input name="email" />
						<label htmlFor="password">Password:</label>
						<input name="password" />
					</form>
					<div className={styles.login_forgot} role="button">
						<span>Forgot password?</span>
					</div>
				</div>
				<div className={styles.divider}>or</div>
				<div className={styles.login_OAuth}>
					<div
						className={styles.login_OAuth_button}
						onClick={() => signIn("google")}
					>
						<Button
							label="Coutinue with Google"
							bgColor="#121314"
							radius={4}
							paddingX={10}
						/>
					</div>
					<div
						className={styles.login_OAuth_button}
						onClick={() => signIn("github")}
					>
						<Button
							label="Coutinue with Github"
							bgColor="#121314"
							radius={4}
							paddingX={10}
						/>
					</div>
					<div className={styles.login_button} role="button">
						<span>Next</span>
					</div>
				</div>
			</div>
		</Modal>
	);
}
