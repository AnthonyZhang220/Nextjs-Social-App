interface ButtonProp {
	text: string;
	bgColor: string;
	radius: number;
	color?: string;
	paddingY?: number;
	paddingX?: number;
}

function Button(props: ButtonProp) {
	return (
		<div
			style={{
				borderRadius: `${props.radius}px`,
				backgroundColor: props.bgColor,
				padding: `${props.paddingY}px ${props.paddingX}px`,
			}}
		>
			<span>{props.text}</span>
		</div>
	);
}

export default Button;
