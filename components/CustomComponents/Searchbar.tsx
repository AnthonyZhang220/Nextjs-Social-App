"use client";

import styles from "./Searchbar.module.scss";

interface SearchbarProps {
	value?: string;
	borderRadius?: number;
	backgroundColor?: string;
	htmlFor: string;
	name: string;
	padding?: string;
	placeholder?: string;
	Icon?: JSX.Element;
	lineHeight: number;
}

export default function Searchbar(props: SearchbarProps) {
	return (
		<form className={styles.searchbar}>
			<div className={styles.searchbar_group}>
				<div className={styles.searchbar_icon}>{props.Icon}</div>
				<input
					type="text"
					className={styles.searchbar_input}
					style={{
						borderRadius: props.borderRadius,
						backgroundColor: props.backgroundColor,
					}}
					name={props.name}
					placeholder={props.placeholder}
				/>
			</div>
		</form>
	);
}
