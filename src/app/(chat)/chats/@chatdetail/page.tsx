import ChatDetail from "../../../../layout/ChatDetail";
import { auth } from "../../../api/auth/[...nextauth]/options";

export default async function Chats() {
	const session = await auth();
	return <ChatDetail createdAt={new Date()} />;
}
