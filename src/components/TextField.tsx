"use client";

import styles from "../styles/sass/components/TextField.module.scss";

interface TextFieldProps {
	value?: string;
	type?: string | undefined;
	borderRadius?: number;
	backgroundColor?: string;
	name: string;
	padding?: string;
	placeholder?: string;
	lineHeight: number;
}

export default function TextField(props: TextFieldProps) {
	return (
		<input
			className={styles.textfield}
			type={props.type}
			style={{
				borderRadius: props.borderRadius,
				backgroundColor: props.backgroundColor,
			}}
			name={props.name}
			placeholder={props.placeholder}
		/>
	);
}
