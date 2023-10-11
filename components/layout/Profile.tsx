import Image from "../components/Image";
import Avatar from "../components/Avatar";
import Link from "next/link";
import styles from "../../styles/sass/layout/Profile.module.scss";

type ProfileData = {
	avatar?: string;
	profile_url?: string;
	displayName: string;
	username: string;
	image?: string;
	content: string;
};

export default function Profile(props: ProfileData) {
	const { avatar, profile_url, displayName, username, image, content } = props;
	return (
		<section className={styles.profile}>
			<div className={styles.profile_container}>
				<div className={styles.profile_banner}>
				</div>
				<div className={styles.profile_avatar}>
					<Avatar avatar_src={avatar} size={80} />
				</div>
				<div className={styles.profile_body}>
					<div className={styles.profile_user}>
						<Link href={profile_url || ""}>
							<span className={styles.profile_displayname}>{displayName}</span>
						</Link>
						<Link href={profile_url || ""}>
							<span className={styles.profile_username}>@{username}</span>
						</Link>
					</div>
					<div className={styles.post_content}>
						<span>{content}</span>
					</div>
					<div className={styles.profile_media}>
						<div className={styles.profile_image}>
							<Image src={image} alt={username} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
