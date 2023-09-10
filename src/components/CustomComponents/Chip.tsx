import React from "react";
import styles from "./Chip.module.scss";
import Link from "next/link";

interface ChipProps {
	link: string;
	content: string;
	Icon: JSX.Element;
	height?: number | 50;
}

const Chip: React.FC<ChipProps> = ({ height, link, content, Icon }) => {
	return (
		<Link href={link}>
			<div className={styles.chip_container} style={{ height: `${height}px` }}>
				<div>{Icon}</div>
				<div>
					<span>{content.toUpperCase()}</span>
				</div>
			</div>
		</Link>
	);
};

export default Chip;
