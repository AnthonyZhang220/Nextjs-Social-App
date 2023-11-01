import Avatar from "../components/Avatar";
import PostAction from "../components/PostAction";
import Image from "../components/Image";
import Video from "@/components/Video";
import Link from "next/link";

import styles from "../styles/sass/layout/Post.module.scss";
import { ShortVideo } from "./ShortVideo";

type PostData = {
	avatar?: string;
	profile_url?: string;
	displayName: string;
	username: string;
	image?: string;
	video?: string;
	content: string;
};

function Post(props: PostData) {
	const { avatar, username, image, content, displayName, profile_url, video } =
		props;

	return (
		<article className={styles.post}>
			<div className={styles.post_container}>
				<div className={styles.post_avatar}>
					<Avatar avatar_src={avatar} size={45} />
				</div>
				<div className={styles.post_body}>
					<div className={styles.post_user}>
						<Link href={profile_url || ""}>
							<span className={styles.post_displayname}>{displayName}</span>
						</Link>
						<Link href={profile_url || ""}>
							<span className={styles.post_username}>@{username}</span>
						</Link>
					</div>
					<div className={styles.post_content}>
						<span>{content}</span>
					</div>
					<div className={styles.post_media}>
						{image ? (
							<div className={styles.post_image}>
								<Image src={image} alt={username} />
							</div>
						) : null}
						{video ? (
							<div className={styles.post_video}>
								<ShortVideo video_src={video} />
							</div>
						) : null}
					</div>
					<div className={styles.post_action}>
						<PostAction />
					</div>
				</div>
			</div>
		</article>
	);
}

export default Post;
