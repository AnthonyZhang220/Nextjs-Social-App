"use client";

import Avatar from "./Avatar";
import Link from "next/link";

import styles from "./ListItem.module.scss";

type ListItemData = {
	avatar?: string;
	profile_url?: string;
	displayName: string;
	username: string;
	image?: string;
	content: string;
};

function ListItem(props: ListItemData) {
	const { avatar, username, content, displayName, profile_url } = props;
	return (
		<Link href="" className={styles.listitem}>
			<div className={styles.listitem_container}>
				<div className={styles.listitem_avatar}>
					<Avatar avatar_src={avatar} size={45} />
				</div>
				<div className={styles.listitem_body}>
					<div className={styles.listitem_user}>
						<div>
							<span className={styles.listitem_displayname}>{displayName}</span>
							<span className={styles.listitem_username}>@{username}</span>
						</div>
					</div>
					<div className={styles.listitem_content}>
						<span>{content}</span>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ListItem;
