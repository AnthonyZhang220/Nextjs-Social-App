// import Link from "next/link";
import styles from "../../styles/sass/layout/Footer.module.scss";

interface LinkRef {
	label: string;
	link: string;
	type?: string;
}

interface footerData {
	category: string;
	list: Array<LinkRef>;
}

const footerData = [
	{ category: "Resource", list: [{ label: "Docs", link: "" }] },
	{ category: "More", list: [{ label: "Commerce", link: "" }] },
	{ category: "About Social App", list: [{ label: "Github", link: "" }] },
	{ category: "Legal", list: [{ label: "Privacy Policy", link: "" }] },
	{ category: "Legal", list: [{ label: "@Anthony Zhang", link: "" }] },
];

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_container}>
				{footerData.map(({ category, list }, index) => (
					<>
						{list.map(({ label, link }) => (
							<a key={link} href={link} className={styles.footer_site}>
								{label}
							</a>
						))}
					</>
				))}
			</div>
		</footer>
	);
}
