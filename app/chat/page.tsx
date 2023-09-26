import LeftNav from "../../components/LeftNav/LeftNav";
import ChatList from "../../components/ChatList/ChatList";
import ChatDetail from "../../components/ChatDetail/ChatDetail";

import styles from "./page.module.scss";

export default function Chat() {
	return (
		<main className={styles.main}>
			<div className={styles.main_container}>
				<div className={styles.main_leftnav}>
					<LeftNav />
				</div>
				<div className={styles.main_timeline}>
					<ChatList />
				</div>
				<div className={styles.main_chatdetail}>
					<ChatDetail />
				</div>
			</div>
		</main>
	);
}
