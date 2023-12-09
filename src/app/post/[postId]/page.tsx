import Modal from "@/components/Modal";
import getPostDetail from "@/utils/getPostDetail";
import PostDetail from "@/layout/PostDetail";

async function PostPage({ params }: { params: { postId: string } }) {
	const { data, loading, error } = await getPostDetail(params.postId);
	const postDetail = data;
	if (error) return <Modal>{error.message}</Modal>;
	if (loading) return <Modal>loading...</Modal>;

	return (
		<Modal>
			<PostDetail postDetail={postDetail} />
		</Modal>
	);
}

export default PostPage;
