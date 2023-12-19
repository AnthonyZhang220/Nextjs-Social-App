"use client";
import React, { useEffect } from "react";
import Avatar from "@/components/Avatar";
import TextField from "@/components/TextField";
import styles from "./page.module.scss";

function ProfileFormWithData({ ...props }) {
	const { newProfile, updateProfileOnChange } = props;
	return (
		<section className={styles.profile_form}>
			<form className={styles.profile_form_container}>
				<div className={styles.profile_form_banner}>
					<img
						src={
							newProfile?.banner ? newProfile?.banner : "/default_banner.jpg"
						}
						alt={newProfile?.banner}
					/>
				</div>
				<div className={styles.profile_form_body}>
					<div className={styles.profile_form_action}>
						<div className={styles.avatar}>
							<div className={styles.avatar_aspect_ratio}>
								<Avatar
									avatar_src={newProfile?.avatar}
									draggable={true}
									displayName={newProfile?.displayName}
									alt={newProfile?.displayName}
								/>
							</div>
						</div>
					</div>
					<div className={styles.profile_form_content}>
						<div className={styles.profile_form_displayName}>
							<label htmlFor="displayName">Display Name</label>
							<TextField
								name="displayName"
								type="text"
								onInputChange={updateProfileOnChange}
								value={newProfile?.displayName}
							/>
						</div>
						<div className={styles.profile_form_username}>
							<label htmlFor="username">Username</label>
							<TextField
								name="username"
								type="text"
								disabled={true}
								defaultValue={newProfile?.username}
							/>
						</div>
						<div className={styles.profile_form_email}>
							<label htmlFor="email">Email</label>
							<TextField
								name="email"
								type="text"
								disabled={true}
								defaultValue={newProfile?.email}
							/>
						</div>
						<div className={styles.profile_form_bio}>
							<label htmlFor="bio">Bio</label>
							<TextField
								name="bio"
								type="text"
								onInputChange={updateProfileOnChange}
								value={newProfile?.bio}
							/>
						</div>
					</div>
				</div>
			</form>
		</section>
	);
}

export default ProfileFormWithData;
