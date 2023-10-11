"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Chip from "../components/Chip";
import Icon from "../components/Icon";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CameraRoundedIcon from "@mui/icons-material/CameraRounded";
import CameraOutlinedIcon from "@mui/icons-material/CameraOutlined";

import styles from "../../styles/sass/layout/LeftNav.module.scss";

function LeftNav() {
	const pathname = usePathname();

	return (
		<nav className={styles.left_nav}>
			<div className={styles.left_nav_container}>
				<Chip
					link={"./home"}
					label="home"
					Icon={
						pathname === "/home" ? <HomeRoundedIcon /> : <HomeOutlinedIcon />
					}
					selected={pathname === "/home"}
				/>
				<Chip
					link={"./moments"}
					label="moments"
					Icon={
						pathname === "/moments" ? (
							<CameraRoundedIcon />
						) : (
							<CameraOutlinedIcon />
						)
					}
					selected={pathname === "/moments"}
				/>
				<Chip
					link={"./discover"}
					label="discover"
					Icon={
						pathname === "/discover" ? (
							<ExploreRoundedIcon />
						) : (
							<ExploreOutlinedIcon />
						)
					}
					selected={pathname === "/discover"}
				/>
				<Chip
					link={"./notifications"}
					label="notifications"
					Icon={
						pathname === "/notifications" ? (
							<NotificationsRoundedIcon />
						) : (
							<NotificationsOutlinedIcon />
						)
					}
					selected={pathname === "/notifications"}
				/>
				<Chip
					link={"./chats"}
					label="chats"
					Icon={
						pathname === "/chats" ? <ChatRoundedIcon /> : <ChatOutlinedIcon />
					}
					selected={pathname === "/chats"}
				/>
				<Chip
					link={"./me"}
					label="me"
					Icon={
						pathname === "/me" ? <PersonRoundedIcon /> : <PersonOutlinedIcon />
					}
					selected={pathname === "/me"}
				/>
			</div>
		</nav>
	);
}

export default LeftNav;
