import styles from "./PostActionButton.module.scss";

interface PostActionButtonProps {
	increment(type: string): any;
	content: string;
	Icon?: JSX.Element;
	count: number;
}

export default function PostActionButton(props: PostActionButtonProps) {
	return (
		<div className={styles.post_action_button}>
			<div>{props.Icon}</div>
			<div>
				<span>{props.count}</span>
			</div>
		</div>
	);
}
