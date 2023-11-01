import { ShortVideo } from "@/layout/ShortVideo";
import { VideoSidebar } from "./VideoSidebar";

import { videoURL } from "@/mockdata";
import { url as imgUrl } from "@/mockdata";

import styles from "../styles/sass/layout/VideoSlide.module.scss";

export default function VideoSlide() {
	return (
		<div className={styles.videoslide}>
			<ShortVideo
				video_src={videoURL}
				replyCount={123}
				likeCount={123}
				author_avatar={imgUrl}
				author="Yoshino220"
				video_title="lopum sfasfssagaga"
				created_time={new Date()}
				short={true}
			/>
			<VideoSidebar count={123} comments={[]} />
			<div className={styles.background_overlay}>
				<img className={styles.blur_img} src={imgUrl} />
			</div>
		</div>
	);
}
