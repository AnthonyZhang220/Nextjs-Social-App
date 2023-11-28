"use client";

import styles from "../styles/sass/components/TextField.module.scss";

interface TextFieldProps {
	value?: string;
	type?: string;
	borderRadius?: number;
	backgroundColor?: string;
	name?: string;
	padding?: string;
	placeholder?: string;
	lineHeight?: number | 1.5;
	disabled?: boolean;
	defaultValue?: string;
	onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField(props: TextFieldProps) {
	const inputProps = {
		type: props.type,
		style: {
			borderRadius: props.borderRadius,
			backgroundColor: props.backgroundColor,
		},
		defaultValue: props.defaultValue,
		value: props.value, // Pass the value prop if provided
		onChange: props.onInputChange,
		disabled: props.disabled,
		name: props.name,
		placeholder: props.placeholder,
	};

	return <input className={styles.textfield} {...inputProps} />;
}
