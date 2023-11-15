"use client";

import {
	useRef,
	useCallback,
	useEffect,
	MouseEventHandler,
	useState,
} from "react";

import styles from "../styles/sass/layout/Dropdown.module.scss";

type DropdownProps = {
	children: JSX.Element;
	onClose?: () => void;
	element: JSX.Element;
};

function Dropdown(props: DropdownProps) {
	const overlay = useRef(null);
	const wrapper = useRef(null);
	const [open, setOpen] = useState<Boolean>(false);

	// const handleClickOutside = (e) => {
	// 	if (wrapper.current && !wrapper.current?.contains(e.target)) {
	// 		setOpen(false);
	// 	}
	// };

	// useEffect(() => {
	// 	if (!open) return;

	// 	window.addEventListener("click", handleClickOutside);

	// 	return () => window.removeEventListener("click", handleClickOutside);
	// }, []);

	const onOpen = () => {
		setOpen(true);
	};
	const onDismiss = () => {
		setOpen(false);
	};

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
		document.addEventListener("click", onDismiss);
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.removeEventListener("click", onDismiss);
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [onKeyDown]);

	return (
		<div onClick={onOpen}>
			{props.element}
			{open ? (
				<div className={styles.dropdown} ref={overlay} onClick={onClick}>
					<div className={styles.container} ref={wrapper}>
						<div className={styles.children} onClick={onDismiss}>
							{props.children}
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}

export default Dropdown;
