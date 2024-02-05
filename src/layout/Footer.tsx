// import Link from "next/link";
import styles from "../styles/sass/layout/Footer.module.scss";

interface footerData {
	label: string;
	link: string;
}

const footerData = [
	{
		label: "Docs",
		link: "https://github.com/AnthonyZhang220/nextjs-social-app",
	},
	{ label: "Commerce", link: "" },
	{ label: "Github", link: "https://github.com/AnthonyZhang220" },
	{ label: "Cookie Policy", link: "" },
	{
		label: `@ ${new Date().getFullYear()} Anthony Zhang`,
		link: "https://anthonyzhang.netlify.app/",
	},
];

export default function Footer() {
	return (
		<footer className={styles.footer_container}>
			{footerData.map(({ label, link }, index) => (
				<div key={index}>
					<a key={link} href={link} className={styles.footer_site}>
						{label}
					</a>
				</div>
			))}
		</footer>
	);
}
