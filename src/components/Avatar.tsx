"use client";

import { Skeleton } from "@mui/material";
import styles from "../styles/sass/components/Avatar.module.scss";

interface AvatarProps {
	avatar_src: string | undefined;
	alt?: string | undefined;
	size?: number | 50;
	displayName?: string;
	draggable?: boolean;
}

export default function Avatar(props: AvatarProps) {
	const { avatar_src, size, draggable, displayName } = props;

	const hasAvatar = avatar_src === undefined || avatar_src === "";

	return (
		<>
			{hasAvatar ? (
				<img
					className={styles.avatar}
					src="/cat_default_avatar.png"
					alt="/cat_default_avatar.png"
					width={size}
					height={size}
					style={{ borderRadius: "50%", display: "block" }}
					draggable={draggable}
				/>
			) : (
				<img
					className={styles.avatar}
					src={avatar_src}
					alt={displayName}
					width={size}
					height={size}
					style={{ borderRadius: "50%", display: "block" }}
					draggable={draggable}
				/>
			)}
		</>
	);
}
