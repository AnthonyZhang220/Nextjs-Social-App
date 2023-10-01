"use client";

import Avatar from "../CustomComponents/Avatar";
import Button from "../CustomComponents/Button";
import Icon from "../CustomComponents/Icon";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

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
					<div className={styles.draft_form}>
						<input
							className={styles.draft_userinput}
							contentEditable="true"
							placeholder="What's happening"
						/>
						<select name="visibility" className={styles.draft_visibility}>
							<option value="everyone">Everyone</option>
							<option value="friends">Friends Only</option>
							<option value="me">Me Only</option>
						</select>
						<div className={styles.draft_action}>
							<div className={styles.draft_attachment}>
								<Icon component={<ImageOutlinedIcon />} />
								<Icon component={<EmojiEmotionsOutlinedIcon />} />
								<Icon component={<LocationOnOutlinedIcon />} />
								<Icon component={<AlternateEmailOutlinedIcon />} />
							</div>
							<div className={styles.draft_post}>
								<Link href="/" style={{ display: "block" }}>
									<Button
										label="Post"
										radius={14}
										bgColor="#1d9bf0"
										paddingX={15}
										paddingY={5}
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
