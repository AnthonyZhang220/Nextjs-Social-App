import styles from "./Modal.module.scss";

interface ModalProps {
	title?: String;
	size: Number;
	children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
	const { title, size, children } = props;
	return (
		<div className={styles.modal}>
			<div className={styles.modal_container}>{children}</div>
		</div>
	);
};
