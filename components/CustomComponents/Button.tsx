import styles from "./Button.module.scss";

interface ButtonProp {
	label: string;
	bgColor: string;
	radius: number;
	color?: string;
	paddingY?: number;
	paddingX?: number;
}

function Button(props: ButtonProp) {
	return (
		<div
			className={styles.button}
			style={{
				borderRadius: `${props.radius}px`,
				backgroundColor: props.bgColor,
				padding: `${props.paddingY}px ${props.paddingX}px`,
				color: props.color,
				cursor: "pointer",
			}}
		>
			<span className={styles.label}>{props.label}</span>
		</div>
	);
}

export default Button;
