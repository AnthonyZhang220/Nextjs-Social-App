import Avatar from "@/components/CustomComponents/Avatar";
import Button from "@/components/CustomComponents/Button";
import Icon from "@/components/CustomComponents/Icon";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import Link from "next/link";
import styles from "./Draft.module.scss";

const url: string =
	"https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

export default function Draft() {
	return (
		<section className={styles.draft}>
			<div className={styles.draft_container}>
				<div className={styles.draft_avatar}>
					<Avatar avatar_src={url} size={45} />
				</div>
				<div className={styles.draft_body}>
					<form action="/" className={styles.draft_form}>
						<div>
							<label htmlFor=""></label>
							<input type="text" name="content" />
						</div>
						<div className={styles.draft_action}>
							<Icon component={<ImageOutlinedIcon />} />
							<Icon component={<EmojiEmotionsOutlinedIcon />} />
							<Icon component={<LocationOnOutlinedIcon />} />
							<Icon src={""} height={10} width={10} />
							<Link href="/" style={{ display: "block" }}>
								<Button
									text="Post"
									radius={14}
									bgColor="#1d9bf0"
									paddingX={15}
									paddingY={5}
								/>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
