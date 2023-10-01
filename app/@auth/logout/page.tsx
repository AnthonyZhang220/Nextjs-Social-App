"use client";

import Modal from "../../../components/CustomComponents/Modal";
import Button from "../../../components/CustomComponents/Button";
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
