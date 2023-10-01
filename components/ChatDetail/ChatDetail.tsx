import Avatar from "../CustomComponents/Avatar";
import ChatBubble from "../ChatBubble/ChatBubble";
import Icon from "../CustomComponents/Icon";
import styles from "./ChatDetail.module.scss";

type ChatDetailProp = {
	displayName?: string | undefined;
	username?: string | undefined;
	bio?: string | undefined;
	createdAt: Date | undefined;
};

const url: string =
	"https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

const messages = [
	{
		avatar: url,
		content: "gssssssssssssssssssssssssssss",
		me: true,
	},
	{
		avatar: url,
		content: "sdggggggggggggggggggggggggggggggggggg",
		me: false,
	},
	{
		avatar: url,
		content: "sdggggggggggggggggggggggggggggggggggg",
		me: false,
	},
	{
		avatar: url,
		content: "sdggggggggggggggggggggggggggggggggggg",
		me: false,
	},
	{
		avatar: url,
		content: "sdggggggggggggggggggggggggggggggggggg",
		me: false,
	},
	{
		avatar: url,
		content: "sdggggggggggggggggggggggggggggggggggg",
		me: false,
	},
	{
		avatar: url,
		content: "sdggggggggggggggggggggggggggggggggggg",
		me: false,
	},
	{
		avatar: url,
		content: "dgssssssssssssssssssssssssssssssssssssssss",
		me: true,
	},
	{
		avatar: url,
		content: "dgssssssssssssssssssssssssssssssssssssssss",
		me: true,
	},
	{
		avatar: url,
		content: "dgssssssssssssssssssssssssssssssssssssssss",
		me: true,
	},
	{
		avatar: url,
		content: "dgssssssssssssssssssssssssssssssssssssssss",
		me: true,
	},
	{
		avatar: url,
		content: "dgssssssssssssssssssssssssssssssssssssssss",
		me: true,
	},
	{
		avatar: url,
		content: "dgssssssssssssssssssssssssssssssssssssssss",
		me: true,
	},
];

function ChatDetail(props: ChatDetailProp) {
	return (
		<div className={styles.chatdetail}>
			<div className={styles.chatdetail_body}>
				<div className={styles.chatdetail_profile}>
					<div>
						<Avatar avatar_src={url} size={100} />
					</div>
					<div>{props.displayName}</div>
					<div>@{props.username}</div>
					<div>{props.bio}</div>
					<div>{props.createdAt?.getUTCDate()}</div>
				</div>
				<div className={styles.chatdetail_conversation}>
					{messages?.map(({ avatar, content, me }, index) => (
						<ChatBubble key={index} avatar={avatar} content={content} me={me} />
					))}
				</div>
			</div>
			<div className={styles.chatdetail_input}>
				<div className={styles.chatdetail_media}>
					<Icon src="" />
				</div>
				<div
					className={styles.chatdetail_box}
					contentEditable="true"
					data-placeholder="Enter your new message"
				></div>
			</div>
		</div>
	);
}

export default ChatDetail;
