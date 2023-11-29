import Timeline from "../../../layout/Timeline";
import Sidebar from "../../../layout/Sidebar";
import DraftLayout from "./DraftLayout";
import Footer from "../../../layout/Footer";
import Error from "@/components/Error";
import { auth } from "../../api/auth/[...nextauth]/options";
import getRandomFacts from "@/utils/getRandomFacts";
import getAllPublishedPost from "@/utils/getAllPublishedPosts";
import LoadingUI from "@/components/LoadingUI";
import { Suspense } from "react";

import styles from "./page.module.scss";

export default async function Home() {
	const randomFacts = await getRandomFacts();
	const session = await auth();

	const avatar = session?.user?.image;
	const { data: posts, loading, error } = await getAllPublishedPost();
	const postData = posts.getAllPublishedPost;
	console.log(postData);

	return (
		<>
			<div className={styles.main_content}>
				<div className={styles.draft_section}>
					<DraftLayout avatar={avatar} />
				</div>
				<div className={styles.timeline_section}>
					<Suspense fallback={<LoadingUI />}>
						{loading ? (
							<LoadingUI />
						) : error ? (
							<Error error={error} />
						) : (
							<Timeline posts={postData} randomFacts={randomFacts} />
						)}
					</Suspense>
				</div>
			</div>
			<div className={styles.sidebar}>
				<div className={styles.sidebar_container}>
					<Sidebar />
					<Footer />
				</div>
			</div>
		</>
	);
}
