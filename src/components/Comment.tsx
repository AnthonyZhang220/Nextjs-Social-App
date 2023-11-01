import Image from "./Image";
import Avatar from "./Avatar";
import styles from "../styles/sass/components/Comment.module.scss";

export type CommentType = {
	id: number | undefined;
	avatar: string | undefined;
	displayName: string | undefined;
	content: string | undefined;
	image?: string;
	username?: string;
};

export const Comment = (props: CommentType) => {
	const { avatar, username, displayName, content, image } = props;

	return (
		<div className={styles.comment}>
			<div className={styles.container}>
				<div className={styles.avatar}>
					<Avatar avatar_src={avatar} size={35} />
				</div>
				<div className={styles.body}>
					<div className={styles.user}>
						<div className={styles.displayName}>
							<span>{displayName}</span>
						</div>
					</div>
					<div className={styles.text_content}>{content}</div>
					<div className={styles.image}>
						<Image src={image} />
					</div>
					<div className={styles.action}></div>
				</div>
			</div>
		</div>
	);
};
