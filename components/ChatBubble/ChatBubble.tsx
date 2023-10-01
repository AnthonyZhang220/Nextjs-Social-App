import Avatar from "../CustomComponents/Avatar";
import styles from "./ChatBubble.module.scss";

type ChatBubbleProp = {
	avatar: string | undefined;
	color?: string | undefined;
	content: string | undefined;
	me: Boolean | undefined;
};

function ChatBubble(props: ChatBubbleProp) {
	return (
		<div
			className={styles.chatbubble}
			style={{
				justifyContent: "flex-end",
				flexDirection: props.me ? "row" : "row-reverse",
			}}
		>
			<div className={styles.chatbubble_container}>
				<div className={styles.content}>
					<span>{props.content}</span>
				</div>
			</div>
			<div className={styles.chatbubble_avatar}>
				<Avatar avatar_src={props.avatar} size={40} />
			</div>
		</div>
	);
}

export default ChatBubble;
