"use client";

import styles from "../styles/sass/components/PostActionButton.module.scss";

interface PostActionButtonProps {
	content: string;
	Icon?: React.ReactNode;
	count: number | undefined;
}

export const PostActionButton: React.FC<PostActionButtonProps> = (props) => {
	return (
		<div className={styles.post_action_button}>
			<div>{props.Icon}</div>
			<span>{props.count}</span>
		</div>
	);
};
