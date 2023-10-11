"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import Dropdown from "./Dropdown";
import Avatar from "../components/Avatar";
import Searchbar from "../components/Searchbar";
import SearchIcon from "@mui/icons-material/Search";
import Button from "../components/Button";
import styles from "../../styles/sass/layout/Header.module.scss";

export default function Header() {
	const { data: session } = useSession();
	const [open, setOpen] = useState(false);
	const handleOpenProfileDropdown = () => {
		setOpen(!open);
	};

	return (
		<header className={styles.header}>
			<div className={styles.header_container}>
				<nav className={styles.navbar}>
					<div className={styles.navbar_link}>
						<Link href="/">
							<img src="/logo/S-logos_white.png" width="50px" height="auto" />
						</Link>
						<Link href="/home">Home</Link>
						<Link href="/moments">Moments</Link>
						<div className={styles.navbar_search}>
							<Searchbar
								Icon={<SearchIcon />}
								lineHeight={0.2}
								value="Search"
								borderRadius={14}
								backgroundColor="#"
								htmlFor="search"
								name="search"
								padding="10px 10px 10px 10px"
								placeholder="Search"
							/>
						</div>
					</div>

					{session ? (
						session?.user ? (
							<div onClick={() => handleOpenProfileDropdown()}>
								<Avatar
									avatar_src={session.user.image ?? undefined}
									size={30}
								/>
								{open ? (
									<Dropdown>
										<Link href="/logout" onClick={() => signOut()}>
											Logout
										</Link>
									</Dropdown>
								) : null}
							</div>
						) : null
					) : (
						<div className={styles.navbar_button}>
							<div className={styles.navbar_signup}>
								<Link href="/login">
									<Button
										label="Login"
										color="#121314"
										bgColor="#ffffff"
										radius={10}
										paddingX={10}
										paddingY={5}
									/>
								</Link>
							</div>
							<div className={styles.navbar_login}>
								<Link href="/signup">
									<Button
										label="Sign Up"
										color="#ffffff"
										bgColor="#1d9bf0"
										radius={10}
										paddingX={10}
										paddingY={5}
									/>
								</Link>
							</div>
						</div>
					)}
				</nav>
			</div>
		</header>
	);
}