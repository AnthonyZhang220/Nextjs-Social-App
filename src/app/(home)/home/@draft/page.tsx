import { auth } from "../../../api/auth/[...nextauth]/options";

import DraftLayout from "./DraftLayout";

export default async function DraftPage() {
	const session = await auth();
	
	return <DraftLayout session={session} />;
}
