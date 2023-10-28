import { Comment } from "@/components/Comment";
import type { CommentType } from "@/components/Comment";
import styles from "../styles/sass/layout/VideoSidebar.module.scss";

type VideoSidebarType = {
	count: number;
	comments: Array<CommentType>;
};

export const VideoSidebar = (props: VideoSidebarType) => {
	const { count, comments } = props;
	return (
		<div className={styles.video_sidebar}>
			<div className={styles.container}>
				<div className={styles.category}></div>
				<div className={styles.title_count}>
					<span>All Comments(123) {count}</span>
				</div>

				<div className={styles.comments}>
					{comments.map((comment: CommentType) => (
						<Comment key={comment.id} {...comment} />
					))}
				</div>
			</div>
		</div>
	);
};
