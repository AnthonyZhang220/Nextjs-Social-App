import Card from "../components/Card";
import styles from "../../styles/sass/layout/Sidebar.module.scss";

function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<aside className={styles.sidebar_container}>
				<Card title="Following" />
				<Card title="Following" />
				<Card title="Following" />
				<Card title="Following" />
				<Card title="Following" />
			</aside>
		</div>
	);
}

export default Sidebar;
