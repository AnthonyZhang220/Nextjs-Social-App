import Avatar from "@/components/CustomComponents/Avatar";
import PostAction from "@/components/CustomComponents/PostAction";
import Image from "@/components/CustomComponents/Image";
import Link from "next/link";

import styles from "./Post.module.scss";

interface PostData {
	avatar?: string;
	profile_url?: string;
	displayName: string;
	username: string;
	image?: string;
	content: string;
}

function Post(props: PostData) {
	const { avatar, username, image, content, displayName, profile_url } = props;

	return (
		<article className={styles.post}>
			<div className={styles.post_container}>
				<div className={styles.post_avatar}>
					<Avatar avatar_src={avatar} size={45} />
				</div>
				<div className={styles.post_body}>
					<div className={styles.post_username}>
						<Link href={profile_url || ""}>
							<span>{displayName}</span>
						</Link>
						<Link href={profile_url || ""}>
							<span>@{username}</span>
						</Link>
					</div>
					<div className={styles.post_content}>
						<span>{content}</span>
					</div>
					<div className={styles.post_image}>
						<Image
							src={image}
							width={500}
							height={300}
							alt={username}
							borderRadius={12}
						/>
					</div>
					<PostAction />
				</div>
			</div>
		</article>
	);
}

export default Post;
