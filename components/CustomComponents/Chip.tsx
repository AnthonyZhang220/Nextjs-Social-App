import React from "react";
import styles from "./Chip.module.scss";
import Link from "next/link";

interface ChipProps {
	link: string;
	label: string;
	Icon: React.FC;
	fontSize?: number | 100;
}

const Chip: React.FC<ChipProps> = ({ fontSize, link, label, Icon }) => {
	return (
		<Link href={link} className={styles.chip}>
			<div className={styles.chip_container}>
				<div>
					<Icon />
				</div>
				<div className={styles.chip_content}>
					<span>{label.toUpperCase()}</span>
				</div>
			</div>
		</Link>
	);
};

export default Chip;
