import styles from "./Image.module.scss";

interface ImageProp {
	src: string | undefined;
	alt?: string | undefined;
}

export default function Image(props: ImageProp) {

	return (
		<div className={styles.image_container}>
			<img src={props.src} alt={props.alt} />
		</div>
	);
}
