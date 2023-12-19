"use client";

import { Skeleton } from "@mui/material";
import Avatar from "@/components/Avatar";
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
					<Skeleton variant="rectangular" animation="wave">
						<img src="/default_banner.jpg" alt="/default_banner.jpg" />
					</Skeleton>
				</div>
				<div className={styles.profile_body}>
					<div className={styles.profile_action}>
						<Link href="" className={styles.avatar}>
							<div className={styles.avatar_aspect_ratio}>
								<Skeleton component="img" variant="circular" />
							</div>
						</Link>
						<Skeleton variant="rounded" animation="wave">
							<div className={styles.profile_button}>
								<Button label="Edit profile" bgColor="black" radius={16} />
							</div>
						</Skeleton>
					</div>
					<div className={styles.profile_content}>
						<div className={styles.profile_user}>
							<Skeleton variant="text" animation="wave" />
						</div>
						<div className={styles.profile_bio}>
							<Skeleton variant="text" animation="wave" />
						</div>
						<div className={styles.profile_info}>
							<Skeleton variant="text" animation="wave">
								<span className={styles.joined_at}>
									<CalendarMonthOutlinedIcon />
								</span>
							</Skeleton>
							<Skeleton variant="text" animation="wave">
								<span className={styles.city}>
									<PlaceOutlinedIcon />
								</span>
							</Skeleton>
						</div>
						<div className={styles.profile_follow}>
							<Skeleton variant="text" animation="wave">
								<span></span>
							</Skeleton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
