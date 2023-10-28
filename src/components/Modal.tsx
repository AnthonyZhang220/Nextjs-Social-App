"use client";

import CloseIcon from "@mui/icons-material/Close";
import Button from "./Button";
import {
	useRef,
	useCallback,
	useEffect,
	MouseEventHandler,
} from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/sass/components/Modal.module.scss";

type ModalProps = {
	title?: string;
	onClose?: () => void;
	children: React.ReactNode;
	buttonContent: string;
};

export default function Modal(props: ModalProps) {
	const overlay = useRef(null);
	const wrapper = useRef(null);
	const router = useRouter();

	const onDismiss = useCallback(() => {
		router.back();
	}, [router]);

	const onClick: MouseEventHandler = useCallback(
		(e) => {
			if (e.target === overlay.current || e.target === wrapper.current) {
				if (onDismiss) onDismiss();
			}
		},
		[onDismiss, overlay, wrapper]
	);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") onDismiss();
		},
		[onDismiss]
	);

	useEffect(() => {
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [onKeyDown]);

	return (
		<div className={styles.modal} ref={overlay} onClick={onClick}>
			<div className={styles.container} ref={wrapper}>
				<div className={styles.header}>
					<div className={styles.modal_close} onClick={onDismiss}>
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
