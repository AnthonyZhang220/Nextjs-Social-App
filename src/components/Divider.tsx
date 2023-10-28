import styles from "../styles/sass/components/Divider.module.scss";

type DividerProps = {
	fontSize?: string | undefined;
	text?: string | undefined;
};

export const Divider = (props: DividerProps) => {
	const { text, fontSize } = props;
	return (
		<div className={styles.divider} style={{ fontSize: fontSize }}>
			{text ? <div>{text}</div> : null}
		</div>
	);
};
