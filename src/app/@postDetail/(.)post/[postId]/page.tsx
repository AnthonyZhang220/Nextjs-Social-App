import Modal from "@/components/Modal";
import getPostDetail from "@/utils/getPostDetail";
import DraftReplyClient from "./DraftReplyClient";
import { Suspense } from "react";
import PostDetail from "@/layout/PostDetail";
import LoadingUI from "@/components/LoadingUI";
import { auth } from "@/app/api/auth/[...nextauth]/options";
import getMyProfile from "@/utils/getMyProfile";

async function PostPage({ params }: { params: { postId: string } }) {
	const session = await auth();
	const {
		data: userData,
		loading: userLoading,
		error: userError,
	} = await getMyProfile(session?.user?.id);
	const {
		data: postDetail,
		loading: detailLoading,
		error: detailError,
	} = await getPostDetail(params.postId);
	
	if (detailError) return <Modal>{detailError.message}</Modal>;
	if (detailLoading)
		return (
			<Modal>
				<LoadingUI />
			</Modal>
		);

	return (
		<Modal>
			<PostDetail postDetail={postDetail} />
			<DraftReplyClient userData={userData} postDetail={postDetail} />
		</Modal>
	);
}

export default PostPage;
