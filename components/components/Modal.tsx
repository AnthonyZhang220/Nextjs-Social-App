"use client";

import CloseIcon from "@mui/icons-material/Close";
import Button from "./Button";
import { useState } from "react";
import styles from "../../styles/sass/components/Modal.module.scss";

type ModalProps = {
	title?: string;
	onClose?: () => void;
	children: React.ReactNode;
	buttonContent: string;
	isOpen?: boolean;
	toggleModal: Function;
};

export default function Modal(props: ModalProps) {
	return (
		<div className={styles.modal}>
			<div className={styles.container}>
				<div className={styles.header}>
					<div
						className={styles.modal_close}
						onClick={() => props.toggleModal()}
					>
						<CloseIcon />
					</div>
					<div className={styles.title}>{props.title}</div>
					<Button
						label={props.buttonContent}
						bgColor="white"
						radius={16}
						paddingX={10}
						color="black"
						paddingY={5}
					/>
				</div>
				<div className={styles.children}>{props.children}</div>
			</div>
		</div>
	);
}
