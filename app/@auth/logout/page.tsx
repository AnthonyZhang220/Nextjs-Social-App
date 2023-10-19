"use client";

import Modal from "../../../components/components/Modal";
import Button from "../../../components/components/Button";
import styles from "./page.module.scss";

export default function Logout() {
	return (
		<Modal title="Logout" buttonContent="Next">
			<div className={styles.logout}>
				<div></div>
				<Button label="Return to login page" bgColor="" radius={16} />
			</div>
		</Modal>
	);
}
