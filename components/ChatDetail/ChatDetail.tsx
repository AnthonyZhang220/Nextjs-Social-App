import Avatar from "../CustomComponents/Avatar";
import ChatBubble from "../ChatBubble/ChatBubble";
import styles from "./ChatDetail.module.scss";

type ChatDetailProp = {
	displayName?: string | undefined;
	username?: string | undefined;
	bio?: string | undefined;
	createdAt: Date | undefined;
};

const messages = [
	{
		avatar: "",
		content: "",
	},
	{
		avatar: "",
		content: "",
	},
	{
		avatar: "",
		content: "",
	},
];

function ChatDetail(props: ChatDetailProp) {
	return (
		<div className={styles.chatdetail}>
			<div className={styles.chatdetail_header}>
				<div>
					<Avatar avatar_src="" size={100} />
				</div>
				<div>{props.displayName}</div>
				<div>@{props.username}</div>
				<div>{props.bio}</div>
				<div>{props.createdAt?.getUTCDate()}</div>
			</div>
			<div className={styles.chatdetail_body}>
				{messages?.map(({ avatar, content }, index) => (
					<ChatBubble key={index} avatar={avatar} content={content} />
				))}
			</div>
			<div className={styles.chatdetail_input} contentEditable="true">
				<div className={styles.chatdetail_box}>sadagdsgsgagga</div>
			</div>
		</div>
	);
}

export default ChatDetail;
