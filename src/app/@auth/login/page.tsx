"use client";

import { signIn } from "next-auth/react";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import { Divider } from "../../../components/Divider";
import TextField from "../../../components/TextField";

import styles from "./page.module.scss";

export default function Login() {
	return (
		<Modal title="Sign in to NextJS App" buttonContent="Login">
			<div className={styles.login}>
				<div className={styles.login_cred}>
					<form action="" className={styles.login_form}>
						<label htmlFor="email">Email:</label>
						<TextField type="email" name="email" lineHeight={1.5} />
						<label htmlFor="password">Password:</label>
						<TextField type="password" name="password" lineHeight={1.5} />
					</form>
					<div className={styles.login_forgot} role="button">
						<span>Forgot password?</span>
					</div>
				</div>
				<Divider text="or" fontSize="0.875rem" />
				<div className={styles.login_OAuth}>
					<div
						className={styles.login_OAuth_button}
						onClick={() => signIn("google", { callbackUrl: "/home" })}
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
						onClick={() => signIn("github", { callbackUrl: "/home" })}
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
