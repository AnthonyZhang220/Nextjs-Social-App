interface IconProps {
	src: string;
	width: number;
	height: number;
}

const Icon = (props: IconProps) => {
	return (
		<div style={{ width: props.width, height: props.height }}>
			<img
				src={props.src}
				alt={props.src}
				width={props.width}
				height={props.height}
			/>
		</div>
	);
};

export default Icon;
