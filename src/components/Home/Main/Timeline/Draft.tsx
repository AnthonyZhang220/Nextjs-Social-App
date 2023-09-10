import Avatar from "@/components/CustomComponents/Avatar";
import styles from "./Draft.module.scss";

const url: string =
	"https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

export default function Draft() {
	return (
		<section className={styles.draft}>
			<div className={styles.draft_container}>
				<div className={styles.draft_avatar}>
					<Avatar avatar_src={url} size={45} />
				</div>
				<div className={styles.draft_body}>
					<div className={styles.draft_form}>
						<form action="/">
							<input type="text" name="content" />
							<div className={styles.draft_action}>
								<button type="submit">
									<span>POST</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
