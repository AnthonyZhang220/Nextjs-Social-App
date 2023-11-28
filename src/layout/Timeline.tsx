"use client";
import Post from "./Post";
import { useEffect } from "react";
import styles from "../styles/sass/layout/Timeline.module.scss";

export default function Timeline({ ...props }) {
	const { posts, randomFacts } = props;

	useEffect(() => {
		console.log("posts", posts);
	}, [posts]);

	return posts?.length > 0 ? (
		<section className={styles.timeline}>
			{posts.map(({ ...data }) => (
				<Post {...data} key={data.id} author={data.author} />
			))}
		</section>
	) : (
		<section className={styles.timeline}>
			<div className={styles.timeline_empty}>
				<div>There are no posts found.</div>
				<div>Do you know? {randomFacts}</div>
			</div>
		</section>
	);
}
