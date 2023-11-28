import Avatar from "../components/Avatar";
import PostAction from "../components/PostAction";
import Image from "../components/Image";
import Video from "@/components/Video";
import Link from "next/link";

import styles from "../styles/sass/layout/Post.module.scss";
import { ShortVideo } from "./ShortVideo";

export type PostData = {
	avatar?: string;
	username?: string;
	image?: string;
	video?: string;
	content?: string;
	author: AuthorDataType;
	viewCount?: number;
	replyCount?: number;
	likeCount?: number;
};

export type AuthorDataType = {
	image?: string;
	name?: string;
	displayName?: string;
};

function Post(props: PostData) {
	const {
		avatar,
		username,
		content,
		video,
		viewCount,
		replyCount,
		likeCount,
		author,
	} = props;

	const { image, displayName, name } = author;

	return (
		<article className={styles.post}>
			<div className={styles.post_container}>
				<div className={styles.post_avatar}>
					<Avatar avatar_src={image} size={45} alt={displayName} />
				</div>
				<div className={styles.post_body}>
					<div className={styles.post_user}>
						<Link href={username || ""}>
							<span className={styles.post_displayname}>{displayName}</span>
						</Link>
						<Link href={username || ""}>
							<span className={styles.post_username}>@{name}</span>
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
						<PostAction
							viewCount={viewCount}
							replyCount={replyCount}
							likeCount={likeCount}
						/>
					</div>
				</div>
			</div>
		</article>
	);
}

export default Post;
