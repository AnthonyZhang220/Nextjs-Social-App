import styles from "./PostActionButton.module.scss";

interface PostActionButtonProps {
	increment(type: string): any;
	content: string;
	icon?: React.ReactSVGElement;
	count: number;
}

export default function PostActionButton(props: PostActionButtonProps) {
	return (
		<div className="">
			<div>{props.icon}</div>
			<div>
				<span>{props.count}</span>
			</div>
		</div>
	);
}
