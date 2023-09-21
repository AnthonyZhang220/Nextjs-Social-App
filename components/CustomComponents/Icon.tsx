interface IconProps {
	src?: string;
	width?: number;
	height?: number;
	component?: JSX.Element;
}

const Icon = (props: IconProps) => {
	return (
		<div>
			{props.component ? (
				<div>{props.component}</div>
			) : (
				<div style={{ width: props.width, height: props.height }}>
					<img
						src={props.src}
						alt={props.src}
						width={props.width}
						height={props.height}
					/>
				</div>
			)}
		</div>
	);
};

export default Icon;