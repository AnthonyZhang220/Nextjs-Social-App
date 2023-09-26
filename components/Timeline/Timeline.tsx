import Draft from "../Draft/Draft";
import Post from "../Post/Post";
import Tab from "../CustomComponents/Tab";
import styles from "./Timeline.module.scss";

export default function Timeline() {
	return (
		<section className={styles.timeline}>
			{posts.map((data, index) => (
				<Post {...data} key={index} />
			))}
		</section>
	);
}

const url: string =
	"https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

const posts = [
	{
		avatar: url,
		username: "Yoshino",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorem illo numquam culpa aperiam molestiae. Unde beatae nam cum commodi, doloremque, similique ipsa tempore ratione, atque cupiditate eveniet. Soluta, non?",
		displayName: "Yoshino220",
		profile_url: "",
	},
	{
		avatar: url,
		username: "Yoshino",
		image: url,
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorem illo numquam culpa aperiam molestiae. Unde beatae nam cum commodi, doloremque, similique ipsa tempore ratione, atque cupiditate eveniet. Soluta, non?",
		displayName: "Yoshino220",
	},
	{
		avatar: url,
		username: "Yoshino",
		image: url,
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorem illo numquam culpa aperiam molestiae. Unde beatae nam cum commodi, doloremque, similique ipsa tempore ratione, atque cupiditate eveniet. Soluta, non?",
		displayName: "Yoshino220",
	},
	{
		avatar: url,
		username: "Yoshino",
		image: url,
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorem illo numquam culpa aperiam molestiae. Unde beatae nam cum commodi, doloremque, similique ipsa tempore ratione, atque cupiditate eveniet. Soluta, non?",
		displayName: "Yoshino220",
	},
	{
		avatar: url,
		username: "Yoshino",
		image: url,
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorem illo numquam culpa aperiam molestiae. Unde beatae nam cum commodi, doloremque, similique ipsa tempore ratione, atque cupiditate eveniet. Soluta, non?",
		displayName: "Yoshino220",
	},
];
