import { auth } from "../../../api/auth/[...nextauth]/options";

import DraftLayout from "./DraftLayout";

export default async function DraftPage() {
	const session = await auth();

	const avatar = session?.user?.image;
	return <DraftLayout avatar={avatar} />;
}
