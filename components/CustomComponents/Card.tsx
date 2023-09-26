"use client";

import styles from "./Card.module.scss";

interface CardProps {
	title: string;
	content?: string;
}

export default function Card(props: CardProps) {
	return (
		<div className={styles.card}>
			<section className={styles.card_container}>
				<div className={styles.card_title}>
					<h3>{props.title}</h3>
				</div>
				<div className={styles.card_content}>
					<div>
						<p>123</p>
					</div>
				</div>
				<div className={styles.card_action}></div>
			</section>
		</div>
	);
}
