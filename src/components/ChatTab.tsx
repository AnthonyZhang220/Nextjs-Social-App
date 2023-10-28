"use client";
import Avatar from "./Avatar";
import styles from "../styles/sass/components/ChatTab.module.scss";

interface ChatTabProps {
	avatar_src: string;
	displayName: string;
	username: string;
	date: Date;
	lastMessage: string;
}

export default function ChatTab(props: ChatTabProps) {
	return (
		<div className={styles.chat_tab}>
			<div className={styles.chat_tab_container}>
				<div className={styles.chat_tab_avatar}>
					<Avatar avatar_src="" size={20} />
				</div>
				<div className={styles.chat_tab_detail}>
					<div>
						<span>displayName</span>
					</div>
					<div>
						<span>Last Message is displayed here!</span>
					</div>
				</div>
			</div>
		</div>
	);
}
