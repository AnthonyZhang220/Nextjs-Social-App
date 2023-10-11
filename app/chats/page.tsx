import LeftNav from "../../components/layout/LeftNav";
import ChatList from "../../components/layout/ChatList";
import ChatDetail from "../../components/layout/ChatDetail";

import styles from "./page.module.scss";

export default function Chats() {
	return (
		<main className={styles.main}>
			<div className={styles.leftnav}>
				<div className={styles.menu}>
					<LeftNav />
				</div>
			</div>
			<div className={styles.main_content}>
				<div className={styles.chatlist}>
					<ChatList />
				</div>
				<div className={styles.chatdetail}>
					<div className={styles.chatdetail_container}>
						<ChatDetail createdAt={new Date()} />
					</div>
				</div>
			</div>
		</main>
	);
}
