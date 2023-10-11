import ListItem from "../components/ListItem";
import styles from "../../styles/sass/layout/ChatList.module.scss";

function ChatList() {
	return (
		<section className={styles.chatlist}>
			{chats.map((data, index) => (
				<ListItem {...data} key={index} />
			))}
		</section>
	);
}

export default ChatList;

const url: string =
	"https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

const chats = [
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
