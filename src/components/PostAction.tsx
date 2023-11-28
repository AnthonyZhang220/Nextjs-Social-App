"use client";

import { PostActionButton } from "./PostActionButton";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import styles from "../styles/sass/components/PostAction.module.scss";

type PostActionProps = {
	replyCount: number | undefined;
	likeCount: number | undefined;
	viewCount: number | undefined;
};

export default function PostAction(props: PostActionProps) {
	const { replyCount, likeCount, viewCount } = props;
	return (
		<div className={styles.post_action_container}>
			<PostActionButton
				content="like"
				count={likeCount}
				Icon={<FavoriteBorderOutlinedIcon />}
			/>
			<PostActionButton
				content="reply"
				count={replyCount}
				Icon={<ChatBubbleOutlineOutlinedIcon />}
			/>
			<PostActionButton
				content="view"
				count={viewCount}
				Icon={<VisibilityOutlinedIcon />}
			/>
		</div>
	);
}
