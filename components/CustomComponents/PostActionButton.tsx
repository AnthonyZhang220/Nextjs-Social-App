"use client";

import styles from "./PostActionButton.module.scss";

interface PostActionButtonProps {
	increment(type: string): any;
	content: string;
	Icon?: JSX.Element;
	count: number;
	fontSize?: number;
}

export const PostActionButton: React.FC<PostActionButtonProps> = (props) => {
	return (
		<div className={styles.post_action_button}>
			<div>{props.Icon}</div>
			<div style={{ fontSize: props.fontSize }}>
				<span>{props.count}</span>
			</div>
		</div>
	);
};
