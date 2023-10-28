import Avatar from "./Avatar";
import styles from "../styles/sass/components/Comment.module.scss";

export type CommentType = {
	id: string | undefined;
	avatar: string | undefined;
	displayName: string | undefined;
};

export const Comment = (props: CommentType) => {
	const { avatar, displayName } = props;

	return (
		<div className={styles.comment}>
			<div className={styles.container}>
				<div className={styles.avatar}>
					<Avatar avatar_src={avatar} />
				</div>
				<div className={styles.body}>
					<div className={styles.user}>
						<div className={styles.displayName}>{displayName}</div>
					</div>
				</div>
				<div className={styles.text_content}></div>
				<div className={styles.image}></div>
				<div className={styles.action}></div>
			</div>
		</div>
	);
};
