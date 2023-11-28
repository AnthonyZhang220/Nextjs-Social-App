"use client";

import { Skeleton } from "@mui/material";
import Link from "next/link";
import Button from "../components/Button";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

import styles from "../styles/sass/layout/Profile.module.scss";

export default function ProfileSkeleton() {
	return (
		<section className={styles.profile}>
			<div className={styles.profile_container}>
				<div className={styles.profile_banner}>
					<Skeleton variant="rounded" />
				</div>
				<div className={styles.profile_body}>
					<div className={styles.profile_action}>
						<Link href="#" className={styles.avatar}>
							<div className={styles.avatar_aspect_ratio}>
								<Skeleton variant="circular" />
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
							<Skeleton variant="text" />
						</div>
						<div className={styles.profile_bio}>
							<Skeleton variant="text" />
						</div>
						<div className={styles.profile_info}>
							<span className={styles.joined_at}>
								<CalendarMonthOutlinedIcon />
								<Skeleton variant="text" />
							</span>
							<span className={styles.city}>
								<PlaceOutlinedIcon />
								<Skeleton variant="text" />
							</span>
						</div>
						<div className={styles.profile_follow}>
							<Skeleton variant="text" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
