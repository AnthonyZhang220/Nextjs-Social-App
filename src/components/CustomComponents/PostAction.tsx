import PostActionButton from "./PostActionButton";

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
				content="views"
				count={postData.replys.count}
			/>
			<PostActionButton
				increment={increment}
				content="views"
				count={postData.likes.count}
			/>
			<PostActionButton
				increment={increment}
				content="views"
				count={postData.views.count}
			/>
		</div>
	);
}
