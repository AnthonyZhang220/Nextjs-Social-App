"use client"

interface AvatarProps {
	avatar_src: string | undefined;
	size: number;
	radius?: number;
}

export default function Avatar(props: AvatarProps) {
	const { avatar_src, size, radius } = props;
	return (
		<img
			src={avatar_src}
			alt={avatar_src}
			width={size}
			height={size}
			style={{ borderRadius: "50%" }}
		/>
	);
}
