import Profile from "../../../layout/Profile";
import Sidebar from "../../../layout/Sidebar";
import Timeline from "../../../layout/Timeline";
import Footer from "../../../layout/Footer";

import styles from "./page.module.scss";
import getProfileById from "@/utils/getProfileById";

export default async function User({
	params,
}: {
	params: { username: string };
}) {
	const { data, loading, error } = await getProfileById();
	const profile = data.getProfileById;

	return (
		<>
			<div className={styles.timeline}>
				<Profile
					displayName={profile.displayName}
					username={profile.username}
					content={profile.content}
					banner={profile.banner}
					avatar={profile.avatar}
					createdAt={profile.createdAt}
				/>
				<Timeline />
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
