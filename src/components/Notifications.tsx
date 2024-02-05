import Avatar from "./Avatar";
import styles from "../styles/sass/components/Notifications.module.scss";
import { Button } from "@mui/material";
import {
	acceptFriendRequest,
	dismissNotification,
	ignoreFriendRequest,
} from "@/utils/mutateNotification";
type Profile = {
	avatar: string;
};

type User = {
	displayName: string;
	profile: Profile;
};

type NotificationDetail = {
	id: string;
	createdAt: Date;
	sender: User;
	notificationType: NotificationType;
};

type NotificationType = {
	type: string;
};
export type UserNotificationType = {
	recipient: User;
	displayName: string;
	status: string;
	isRead: boolean;
	notification: NotificationDetail;
};

export default function Notification(props: UserNotificationType) {
	const { recipient, displayName, status, isRead, notification } = props;
	const { createdAt, sender, notificationType } = notification;
	const { type } = notificationType;

	if (type === "CommentPost") return <CommentPost {...props} />;
	if (type === "FriendRequest") return <FriendRequest {...props} />;
	if (type === "LikePost") return <LikePost {...props} />;
}

export function CommentPost(props: UserNotificationType) {
	return (
		<div className={styles.notification_tab}>
			<div className={styles.notification_avatar}>
				<Avatar
					avatar_src={props.notification.sender.profile.avatar}
					alt={props.displayName}
					size={30}
				/>
			</div>
			<div className={styles.notification_body}>
				<div>
					{props.notification.sender.displayName} replied to your post <a></a>
				</div>
			</div>
			<div className={styles.notification_action}>
				<Button onClick={dismissNotification}>Dismiss</Button>
			</div>
		</div>
	);
}

export function FriendRequest(props: UserNotificationType) {
	return (
		<div className={styles.notification_tab}>
			<div className={styles.notification_avatar}>
				<Avatar
					avatar_src={props.notification.sender.profile.avatar}
					alt={props.displayName}
					size={30}
				/>
			</div>
			<div className={styles.notification_body}>
				<div>
					{props.notification.sender.displayName} requested to add you as a
					friend.
				</div>
			</div>
			<div className={styles.notification_action}>
				<Button onClick={acceptFriendRequest}>Accept</Button>
				<Button onClick={ignoreFriendRequest}>Ignore</Button>
			</div>
		</div>
	);
}

export function LikePost(props: UserNotificationType) {
	return (
		<div className={styles.notification_tab}>
			<div className={styles.notification_avatar}>
				<Avatar
					avatar_src={props.notification.sender.profile.avatar}
					alt={props.displayName}
					size={30}
				/>
			</div>
			<div className={styles.notification_body}>
				<div>
					{props.notification.sender.displayName} liked your post <a></a>
				</div>
			</div>
			<div className={styles.notification_action}>
				<Button onClick={dismissNotification}>Dismiss</Button>
			</div>
		</div>
	);
}
