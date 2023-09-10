import Link from "next/link";
import CustomButton from "./CustomComponents/Button";
import styles from "./Header.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<div className={styles.navbar_link}>
					<Link href="/">Social App</Link>
					<Link href="/home">Home</Link>
					<Link href="/moments">Moments</Link>
				</div>
				<div className={styles.navbar_button}>
					<div className={styles.navbar_search}>
						<form action="" method="post">
							<input type="search" name="search" />
							<button type="submit">Search</button>
						</form>
					</div>
					<div className={styles.navbar_signup}>
						<button type="button">
							<span>Sign up</span>
						</button>
					</div>
					<div className={styles.navbar_login}>
						<button type="button">
							<span>Login</span>
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
}
