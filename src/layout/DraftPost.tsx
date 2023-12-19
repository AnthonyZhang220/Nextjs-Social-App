"use client";

import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Icon from "../components/Icon";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import Link from "next/link";
import styles from "../styles/sass/layout/Draft.module.scss";

export default function DraftPost({ ...props }) {
	const { draftData, publishPostHandler, draftOnChange, avatar } = props;

	return (
		<section className={styles.draft}>
			<div className={styles.draft_container}>
				<div className={styles.draft_avatar}>
					<Avatar avatar_src={avatar} alt={avatar} size={45} />
				</div>
				<form className={styles.draft_content}>
					<div className={styles.draft_visibility}>
						<select
							name="visibleTo"
							defaultValue={"Everyone"}
							onChange={draftOnChange}
							className={styles.select}
						>
							<option value="Everyone">Everyone</option>
							<option value="Friends">Friends Only</option>
							<option value="Me">Me Only</option>
						</select>
					</div>
					<div
						contentEditable="true"
						dangerouslySetInnerHTML={{ __html: draftData.content }}
						onBlur={draftOnChange}
						className={styles.draft_userinput}
						placeholder="What's happening?"
					></div>
					<div className={styles.draft_action}>
						<div className={styles.draft_attachment}>
							<ImageOutlinedIcon />
							<EmojiEmotionsOutlinedIcon />
							<LocationOnOutlinedIcon />
							<AlternateEmailOutlinedIcon />
						</div>
						<div className={styles.draft_post}>
							<Link href="/">
								<Button
									label="Post"
									radius={14}
									bgColor="#1d9bf0"
									paddingX={15}
									paddingY={5}
									onClick={(event) => publishPostHandler(event)}
								/>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
}
