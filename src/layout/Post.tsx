"use client";
import Avatar from "../components/Avatar";
import PostAction from "../components/PostAction";
import Image from "../components/Image";
import Video from "@/components/Video";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useToggleLikeToPost from "@/hooks/useToggleLikeToPost";

import styles from "../styles/sass/layout/Post.module.scss";
import { ShortVideo } from "./ShortVideo";

export type PostType = {
	postId: string;
	imageSrc?: string;
	videoSrc?: string;
	content?: string;
	viewCount?: number;
	replyCount?: number;
	likeCount?: number;
	author: PostAuthorType;
};

export type PostAuthorType = {
	authorId: string;
	author: string;
	username: string;
	displayName: string;
	profile: PostAuthorProfileType;
};

export type PostAuthorProfileType = {
	avatar?: string;
};

function Post(props: PostType) {
	const router = useRouter();
	const { toggleLike, data, loading, error } = useToggleLikeToPost();
	const {
		postId,
		content,
		videoSrc,
		imageSrc,
		viewCount,
		replyCount,
		likeCount,
		author,
	} = props;

	const { displayName, username, authorId, profile } = author;

	const { avatar } = profile;

	const openReplyHandler = () => {
		router.push(`/post/${postId}`);
	};

	const toggleLikeHandler = async () => {
		await toggleLike(authorId, postId);
	};

	return (
		<article
			className={styles.post}
			onClick={() => router.push(`/post/${postId}`, { scroll: false })}
		>
			<div className={styles.post_container}>
				<div className={styles.post_avatar}>
					<Avatar avatar_src={avatar} size={45} alt={displayName} />
				</div>
				<div className={styles.post_body}>
					<div className={styles.post_user}>
						<Link href={username || ""}>
							<span className={styles.post_displayname}>{displayName}</span>
						</Link>
						<Link href={username || ""}>
							<span className={styles.post_username}>@{username}</span>
						</Link>
					</div>
					<div className={styles.post_content}>
						<span>{content}</span>
					</div>
					<div className={styles.post_media}>
						{imageSrc ? (
							<div className={styles.post_image}>
								<Image src={imageSrc} alt={username} />
							</div>
						) : null}
						{videoSrc ? (
							<div className={styles.post_video}>
								<ShortVideo video_src={videoSrc} />
							</div>
						) : null}
					</div>
					<div className={styles.post_action}>
						<PostAction
							viewCount={viewCount}
							replyCount={replyCount}
							likeCount={likeCount}
							toggleLike={toggleLikeHandler}
							openReply={openReplyHandler}
						/>
					</div>
				</div>
			</div>
		</article>
	);
}

export default Post;
