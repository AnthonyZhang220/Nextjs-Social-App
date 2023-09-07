import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<div className={styles.navbar_link}>
					<Link href="/">Social App</Link>
					<Link href="/home">Home</Link>
					<Link href="/post">Posts</Link>
				</div>
				<div className={styles.navbar_button}>
					<div className={styles.navbar_search}>
						<form action="" method="post">
							<input type="search" name="search" />
							<button type="submit">Search</button>
						</form>
					</div>
					<div className={styles.navbar_signup}>
						<button type="button">Sign up</button>
					</div>
					<div className={styles.navbar_login}>
						<button type="button">Login</button>
					</div>
				</div>
			</nav>
		</header>
	);
}
