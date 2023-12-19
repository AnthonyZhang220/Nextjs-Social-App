"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "@/components/Image";
import Avatar from "@/components/Avatar";
import { ShortVideo } from "./ShortVideo";
import PostAction from "@/components/PostAction";
import { useRouter } from "next/navigation";
import useToggleLikeToPost from "@/hooks/useToggleLikeToPost";

import styles from "../styles/sass/layout/PostDetail.module.scss";

interface PostObjectType {
	postDetail: PostType;
}

interface PostAuthorType {
	displayName: string;
	username: string;
	profile: PostAuthorProfileType;
}
interface PostAuthorProfileType {
	avatar: string;
}

interface PostMediaType {
	videoSrc: string;
}

interface PostType {
	postId: string;
	authorId: string;
	author: PostAuthorType;
	media: PostMediaType;
	content: string;
	image?: string;
	video?: string;
	viewCount: number;
	replyCount: number;
	likeCount: number;
}

function PostDetail({ postDetail }: PostObjectType) {
	const router = useRouter();
	const { toggleLike, data, loading, error } = useToggleLikeToPost();

	useEffect(() => {}, [data]);

	const openReplyHandler = () => {
		router.push(`/post/${postDetail.postId}`);
	};

	const toggleLikeHandler = async () => {
		await toggleLike(postDetail.authorId, postDetail.postId);
	};

	return (
		<article className={styles.postdetail}>
			<div className={styles.postdetail_container}>
				<div className={styles.postdetail_avatar}>
					<Avatar
						avatar_src={postDetail.author.profile.avatar}
						size={45}
						alt={postDetail.author.displayName}
					/>
				</div>
				<div className={styles.postdetail_body}>
					<div className={styles.postdetail_user}>
						<Link href={postDetail.author.username || ""}>
							<span className={styles.postdetail_displayname}>
								{postDetail.author.displayName}
							</span>
						</Link>
						<Link href={`/user/${postDetail.author.username}` || ""}>
							<span className={styles.postdetail_username}>
								@{postDetail.author.username}
							</span>
						</Link>
					</div>
					<div className={styles.postdetail_content}>
						<span>{postDetail.content}</span>
					</div>
					<div className={styles.postdetail_media}>
						{postDetail.image? (
							<div className={styles.postdetail_image}>
								<Image
									src={postDetail.image}
									alt={postDetail.author.username}
								/>
							</div>
						) : null}
						{postDetail.video ? (
							<div className={styles.postdetail_video}>
								<ShortVideo video_src={postDetail.video} />
							</div>
						) : null}
					</div>
				</div>
			</div>
			<div className={styles.postdetail_action}>
				<PostAction
					viewCount={postDetail.viewCount}
					replyCount={postDetail.replyCount}
					likeCount={postDetail.likeCount}
					toggleLike={toggleLikeHandler}
					openReply={openReplyHandler}
				/>
			</div>
		</article>
	);
}

export default PostDetail;
