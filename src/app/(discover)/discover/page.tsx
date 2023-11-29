import VideoSlide from "@/layout/VideoSlide";
import { auth } from "../../api/auth/[...nextauth]/options";

export default async function Discover() {
	const session = await auth();

	return <VideoSlide />;
}
