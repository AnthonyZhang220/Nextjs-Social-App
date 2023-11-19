"use client";

import { signOut } from "next-auth/react";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import styles from "./page.module.scss";

export default function Logout() {
	return (
		<Modal title="Logout" buttonContent="Next">
			<div className={styles.logout}>
				<div>
					<h4>You are about to log out of your account!</h4>
				</div>
				<div onClick={() => signOut()}>
					<Button label="Log Out" bgColor="" radius={16} />
				</div>
			</div>
		</Modal>
	);
}
