import LeftNav from "../../components/LeftNav/LeftNav";
import ChatList from "../../components/ChatList/ChatList";
import ChatDetail from "../../components/ChatDetail/ChatDetail";

import styles from "./page.module.scss";

export default function Chat() {
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
