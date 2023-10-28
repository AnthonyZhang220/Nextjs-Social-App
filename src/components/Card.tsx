"use client";

import styles from "../styles/sass/components/Card.module.scss";

interface CardProps {
	title: string;
	content?: string;
	children: React.ReactNode;
}

export default function Card(props: CardProps) {
	return (
		<div className={styles.card}>
			<section className={styles.card_container}>
				<div className={styles.card_title}>
					<h5>{props.title}</h5>
				</div>
				{props.children}
			</section>
		</div>
	);
}
