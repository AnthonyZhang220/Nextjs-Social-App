import LeftNav from "../../../layout/LeftNav";
import ChatList from "../../../layout/ChatList";
import ChatDetail from "../../../layout/ChatDetail";
import Header from "@/layout/Header";
import { auth } from "../../api/auth/[...nextauth]/options";

import styles from "./page.module.scss";

export default async function Chats() {
	const session = await auth();
	return (
		<>
			<div className={styles.chatlist}>
				<ChatList />
			</div>
			<div className={styles.chatdetail}>
				<div className={styles.chatdetail_container}>
					<ChatDetail createdAt={new Date()} />
				</div>
			</div>
		</>
	);
}
