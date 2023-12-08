"use client";

type IconProps = {
	src?: string;
	width?: number;
	height?: number;
	component?: JSX.Element;
};

function Icon(props: IconProps) {
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
}

export default Icon;
