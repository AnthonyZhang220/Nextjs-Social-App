import LeftNav from "../../components/LeftNav/LeftNav";
import Profile from "../../components/Profile/Profile";
import Timeline from "../../components/Timeline/Timeline";

import styles from "./page.module.scss";

export default function User() {
	return (
		<main className={styles.main}>
			<div className={styles.main_container}>
				<div className={styles.main_leftnav}>
					<LeftNav />
				</div>
				<div className={styles.main_timeline}>
					<Profile
						displayName={profile.displayName}
						username={profile.username}
						content={profile.content}
					/>
					<Timeline />
				</div>
			</div>
		</main>
	);
}

const url: string =
	"https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

const profile = {
	avatar: url,
	username: "Yoshino",
	content:
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorem illo numquam culpa aperiam molestiae. Unde beatae nam cum commodi, doloremque, similique ipsa tempore ratione, atque cupiditate eveniet. Soluta, non?",
	displayName: "Yoshino220",
	profile_url: "",
};
