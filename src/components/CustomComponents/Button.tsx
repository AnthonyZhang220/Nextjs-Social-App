interface ButtonProp {
	text: string;
	bgColor: string;
	color: string;
}

function Button(props: ButtonProp) {
	return (
		<button
			style={{
				borderRadius: "8px",
				backgroundColor: props.bgColor,
				padding: "0 12px",
			}}
		>
			<span>{props.text}</span>
		</button>
	);
}

export default Button;
