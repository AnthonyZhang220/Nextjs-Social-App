"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import styles from "../styles/sass/components/Video.module.scss";

type VideoProp = {
	src: string | undefined;
	alt?: string | undefined;
	width?: string | undefined;
	height?: string | undefined;
};

export default function Video(props: VideoProp) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const { ref, inView } = useInView({ threshold: 1, delay: 1000 });

	useEffect(() => {
		if (videoRef.current === null) return;

		if (inView === true) {
			videoRef.current.muted = true;
			videoRef.current.play();
		} else {
			videoRef.current.muted = true;
			videoRef.current.pause();
		}
	});

	return (
		<div className={styles.video_container} ref={ref}>
			<video width="100%" height={props.height} ref={videoRef} muted controls>
				<source src={props.src} />
			</video>
		</div>
	);
}
