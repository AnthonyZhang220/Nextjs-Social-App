import ChatList from "../../../../layout/ChatList";
import { auth } from "../../../api/auth/[...nextauth]/options";

export default async function Chats() {
	const session = await auth();
	return <ChatList />;
}
