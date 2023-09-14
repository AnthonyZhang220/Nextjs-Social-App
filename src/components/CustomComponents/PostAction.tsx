import PostActionButton from "./PostActionButton";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import styles from "./PostAction.module.scss";

const postData = {
	replys: {
		type: "reply",
		count: 1000,
	},
	likes: {
		type: "like",
		count: 1,
	},
	views: {
		type: "views",
		count: 1000,
	},
};

const increment = (type: string) => {
	if (type == "replys") {
	}
	if (type == "likes") {
	}
	if (type == "views") {
	}
};

export default function PostAction() {
	return (
		<div className={styles.post_action_container}>
			<PostActionButton
				increment={increment}
				content="like"
				count={postData.replys.count}
				Icon={<FavoriteBorderOutlinedIcon />}
			/>
			<PostActionButton
				increment={increment}
				content="reply"
				count={postData.likes.count}
				Icon={<ChatBubbleOutlineOutlinedIcon />}
			/>
			<PostActionButton
				increment={increment}
				content="view"
				count={postData.views.count}
				Icon={<VisibilityOutlinedIcon />}
			/>
		</div>
	);
}
