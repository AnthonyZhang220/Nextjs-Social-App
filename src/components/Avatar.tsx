"use client";

interface AvatarProps {
	avatar_src: string | undefined;
	size?: number | 50;
	draggable?: boolean | undefined;
}

export default function Avatar(props: AvatarProps) {
	const { avatar_src, size, draggable } = props;
	return (
		<img
			src={avatar_src}
			alt={avatar_src}
			width={size}
			height={size}
			style={{ borderRadius: "50%", display: "block" }}
			draggable={draggable}
		/>
	);
}
