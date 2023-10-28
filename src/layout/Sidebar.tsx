import Card from "@/components/Card";
import ListItem from "@/components/ListItem";
import styles from "../styles/sass/layout/Sidebar.module.scss";

function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<aside className={styles.sidebar_container}>
				<Card title="Following">
					<div>content</div>
				</Card>
				<Card title="Following">
					<div>content</div>
				</Card>
				<Card title="Following">
					<div>content</div>
				</Card>
				<Card title="Following">
					<div>content</div>
				</Card>
				<Card title="Following">
					<div>content</div>
				</Card>
			</aside>
		</div>
	);
}

export default Sidebar;
