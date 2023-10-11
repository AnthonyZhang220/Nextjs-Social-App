"use client";

import styles from "../../styles/sass/components/Tab.module.scss";

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
		<div
			className={styles.tab}
			style={{
				fontSize: props.fontSize,
				padding: `${props.pY} ${props.pY}`,
				borderRadius: props.borderRadius,
			}}
		>
			{props.label.toUpperCase()}
		</div>
	);
}
