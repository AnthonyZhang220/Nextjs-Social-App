"use client";

import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import styles from "./Modal.module.scss";

type ModalProps = {
	title?: string;
	onClose?: () => void;
	children: React.ReactNode;
};

export default function Modal(props: ModalProps) {
	const [openModal, setOpenModal] = useState(false);
	return (
		<div className={styles.modal}>
			<div className={styles.modal_container}>
				<div className={styles.modal_close} onClick={() => setOpenModal(false)}>
					<CloseIcon />
				</div>
				<div>{props.children}</div>
			</div>
		</div>
	);
}
