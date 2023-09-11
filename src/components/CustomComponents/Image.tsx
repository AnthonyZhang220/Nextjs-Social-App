interface ImageProp {
	src: string | undefined;
	width: number;
	height: number;
	borderRadius?: number;
	alt?: string | undefined;
}

export default function Image(props: ImageProp) {
	return (
		<img
			width={props.width}
			height={props.height}
			src={props.src}
			alt={props.alt}
			style={{ borderRadius: props.borderRadius, flex: "0 0 100px" }}
		/>
	);
}
