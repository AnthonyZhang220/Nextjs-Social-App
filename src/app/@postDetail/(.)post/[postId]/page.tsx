import Modal from "@/components/Modal";
import getPostDetail from "@/utils/getPostDetail";
import DraftReplyClient from "./DraftReplyClient";
import { Suspense } from "react";
import PostDetail from "@/layout/PostDetail";
import LoadingUI from "@/components/LoadingUI";

async function PostPage({ params }: { params: { postId: string } }) {
	const { data, loading, error } = await getPostDetail(params.postId);
	const postDetail = data;
	if (error) return <Modal>{error.message}</Modal>;
	if (loading)
		return (
			<Modal>
				<LoadingUI />
			</Modal>
		);

	return (
		<Modal>
			<PostDetail postDetail={postDetail} />
			<DraftReplyClient />
		</Modal>
	);
}

export default PostPage;
