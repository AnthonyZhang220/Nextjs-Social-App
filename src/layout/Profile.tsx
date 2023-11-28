import Image from "next/image";
import Avatar from "../components/Avatar";
import Link from "next/link";
import Button from "../components/Button";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import getFormattedJoinedDate from "@/utils/getFormattedJoinedDate";

import styles from "../styles/sass/layout/Profile.module.scss";

type ProfileData = {
	avatar: string;
	profile_url?: string;
	displayName?: string;
	username?: string;
	image?: string;
	content: string;
	banner: string;
	createdAt: string;
	city?: string;
	friendCount?: number;
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
		createdAt,
		friendCount,
		city,
	} = props;

	return (
		<section className={styles.profile}>
			<div className={styles.profile_container}>
				<div className={styles.profile_banner}>
					{banner ? (
						<img src={banner} alt={banner} />
					) : (
						<img src="/default_banner.jpg" alt="/default_banner.jpg" />
					)}
				</div>
				<div className={styles.profile_body}>
					<div className={styles.profile_action}>
						<Link href="#" className={styles.avatar}>
							<div className={styles.avatar_aspect_ratio}>
								<Avatar
									avatar_src={avatar}
									draggable={true}
									displayName={displayName}
									alt={displayName}
								/>
							</div>
						</Link>
						<div className={styles.profile_button}>
							<Link href="/profile">
								<Button label="Edit profile" bgColor="black" radius={16} />
							</Link>
						</div>
					</div>
					<div className={styles.profile_content}>
						<div className={styles.profile_user}>
							<Link href={profile_url || ""}>
								<h4 className={styles.profile_displayname}>{displayName}</h4>
							</Link>
							<Link href={profile_url || ""}>
								<h5 className={styles.profile_username}>
									{username ? `@${username}` : null}
								</h5>
							</Link>
						</div>
						<div className={styles.profile_bio}>
							<span>{content}</span>
						</div>
						<div className={styles.profile_info}>
							<span className={styles.joined_at}>
								<CalendarMonthOutlinedIcon />
								<span>Joined {getFormattedJoinedDate(createdAt)}</span>
							</span>
							<span className={styles.city}>
								<PlaceOutlinedIcon />
								<span>{city}</span>
							</span>
						</div>
						<div className={styles.profile_follow}>
							<Link href="" className={styles.profile_following}>
								<span>{friendCount}</span>
								<span className={styles.follow_tag}>Friends</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
