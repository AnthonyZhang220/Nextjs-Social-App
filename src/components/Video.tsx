"use client";

import { forwardRef } from "react";
import styles from "../styles/sass/components/Video.module.scss";

type VideoPropType = {
	src: string | undefined;
	alt?: string | undefined;
	width?: string | undefined;
	height?: string | undefined;
	borderRadius?: number;
};

const Video = forwardRef<HTMLVideoElement, VideoPropType>((props, ref) => {
	return (
		<div
			className={styles.video_container}
			style={{ borderRadius: props.borderRadius }}
		>
			<video
				width="100%"
				height={props.height}
				ref={ref}
				
			>
				<source src={props.src} />
			</video>
		</div>
	);
});

export default Video;
