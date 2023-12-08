import LoadingUI from "@/components/LoadingUI";
import Modal from "@/components/Modal";

export default function LoadingNext() {
	return (
		<Modal title="Edit Profile Detail" buttonContent="loading">
			<LoadingUI />
		</Modal>
	);
}
