import Modal from "@/components/Modal";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import TextField from "@/components/TextField";

import { url, bannerURL, profile } from "@/mockdata";

import styles from "./page.module.scss";

type ProfileData = {
	avatar?: string;
	profile_url?: string;
	name?: string;
	displayName: string;
	username: string;
	image?: string;
	content: string;
	banner: string;
	created_At?: Date;
	location?: string;
};

export default function Profile(props: ProfileData) {
	const {
		avatar,
		profile_url,
		displayName,
		username,
		image,
		content,
		banner,
		created_At,
		location,
	} = props;

	return (
		<Modal buttonContent="Save">
			<section className={styles.profile}>
				<div className={styles.profile_container}>
					<div className={styles.profile_banner}>
						<img src={banner} alt={image} />
					</div>
					<div className={styles.profile_body}>
						<div className={styles.profile_action}>
							<Link href="#" className={styles.avatar}>
								<div className={styles.avatar_aspect_ratio}>
									<Avatar avatar_src={avatar} draggable={true} />
								</div>
							</Link>
						</div>
						<div className={styles.profile_content}>
							<div className={styles.profile_user}>
								<TextField
									name="name"
									lineHeight={1.5}
									placeholder={displayName}
								/>
								<Link href={profile_url || ""}>
									<h5 className={styles.profile_username}>@{username}</h5>
								</Link>
							</div>
							<div className={styles.profile_bio}>
								<TextField name="name" lineHeight={1.5} placeholder={content} />
							</div>
							<div className={styles.profile_info}>
								<span className={styles.joined_at}>
									{created_At?.toISOString()}
								</span>
								<span className={styles.city}>{location}</span>
							</div>
							<div className={styles.profile_follow}>
								<div className={styles.profile_following}>1</div>
								<div className={styles.profile_follower}>2</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Modal>
	);
}
