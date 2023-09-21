import Link from "next/link";
import Searchbar from "./CustomComponents/Searchbar";
import SearchIcon from "@mui/icons-material/Search";
import Button from "./CustomComponents/Button";
import styles from "./Header.module.scss";
import Search from "@mui/icons-material/Search";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.header_container}>
				<nav className={styles.navbar}>
					<div className={styles.navbar_link}>
						<Link href="/">Social App</Link>
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
					<div className={styles.navbar_button}>
						<div className={styles.navbar_signup}>
							<Button
								label="Login"
								color="#121314"
								bgColor="#ffffff"
								radius={10}
								paddingX={10}
								paddingY={5}
							/>
						</div>
						<div className={styles.navbar_login}>
							<Button
								label="Sign Up"
								color="#ffffff"
								bgColor="#1d9bf0"
								radius={10}
								paddingX={10}
								paddingY={5}
							/>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
