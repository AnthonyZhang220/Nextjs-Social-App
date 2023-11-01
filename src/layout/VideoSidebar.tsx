import { Comment } from "@/components/Comment";
import type { CommentType } from "@/components/Comment";
import { posts as comments } from "@/mockdata";

import styles from "../styles/sass/layout/VideoSidebar.module.scss";

type VideoSidebarType = {
	count: number;
	comments: Array<CommentType>;
};

export const VideoSidebar = (props: VideoSidebarType) => {
	const testComments = comments;
	const testCount: number = 123;
	
	return (
		<div className={styles.video_sidebar}>
			<div className={styles.container}>
				<div className={styles.category}></div>
				<div className={styles.title_count}>
					<h4>All Comments(123) {testCount}</h4>
				</div>
				<div className={styles.comments}>
					{testComments.map((comment: CommentType) => (
						<Comment key={comment.id} {...comment} />
					))}
				</div>
			</div>
		</div>
	);
};
