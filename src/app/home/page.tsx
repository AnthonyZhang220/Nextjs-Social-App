import Header from "../../layout/Header";
import LeftNav from "../../layout/LeftNav";
import Timeline from "../../layout/Timeline";
import Sidebar from "../../layout/Sidebar";
import DraftLayout from "./DraftLayout";
import Footer from "../../layout/Footer";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { auth } from "../api/auth/[...nextauth]/options";
import getRandomFacts from "@/utils/getRandomFacts";
import getAllPublishedPost from "@/utils/getAllPublishedPosts";

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
			<Header session={session} />
			<main className={styles.main}>
				<div className={styles.main_container}>
					<div className={styles.leftnav}>
						<div className={styles.menu}>
							<LeftNav />
						</div>
					</div>
					<div className={styles.main_content}>
						<div className={styles.draft_section}>
							<DraftLayout avatar={avatar} />
						</div>
						<div className={styles.timeline_section}>
							{loading ? (
								<Loading />
							) : error ? (
								<Error error={error} />
							) : (
								<Timeline posts={postData} randomFacts={randomFacts} />
							)}
						</div>
					</div>
					<div className={styles.sidebar}>
						<div className={styles.sidebar_container}>
							<Sidebar />
							<Footer />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
