import styles from "./Tab.module.scss";

interface TabProps {
	label: string;
	fontSize?: number;
	pX: number;
	pY: number;
	borderRadius: number;
	value?: string;
}

export default function Tab(props: TabProps) {
	return (
		<option
			className={styles.tab}
			style={{
				fontSize: props.fontSize,
				padding: `${props.pY} ${props.pY}`,
				borderRadius: props.borderRadius,
			}}
			value={props.value}
		>
			{props.label.toUpperCase()}
		</option>
	);
}
