import { auth } from "@/app/api/auth/[...nextauth]/options";
import styles from "./page.module.scss";
import getMyNotifications from "@/utils/getMyNotifications";
import Notification from "@/components/Notifications";
import type { UserNotificationType } from "@/components/Notifications";

export default async function Notifications() {
	const session = await auth();
	const {
		data: notifications,
		error,
		loading,
	} = await getMyNotifications(session?.user?.id);

	return (
		<div className={styles.notification}>
			<div>
				{notifications?.map((notification: UserNotificationType) => (
					<Notification key={notification.notification.id} {...notification} />
				))}
			</div>
		</div>
	);
}
