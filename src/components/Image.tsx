"use client";

import styles from "../styles/sass/components/Image.module.scss";

type ImageProp = {
	src: string | undefined;
	alt?: string | undefined;
	width?: string | undefined;
	height?: string | undefined;
};

export default function Image(props: ImageProp) {
	return (
		<div className={styles.image_container}>
			<img
				src={props.src}
				alt={props.alt}
				width={props.width}
				height={props.height}
			/>
		</div>
	);
}
