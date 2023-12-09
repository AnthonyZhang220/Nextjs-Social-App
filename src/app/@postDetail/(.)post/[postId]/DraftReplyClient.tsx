"use client";

import { useCallback, useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import DraftReply from "@/layout/DraftReply";

const CREATE_COMMENT = gql`
	mutation createComment($data: CommentCreateInput!, $postId: string) {
		createComment(data: $data, postId: $postId) {
			authorId
			title
			published
			visibleTo
			content
			createdAt
			viewCount
			updatedAt
		}
	}
`;

export default function DraftReplyClient({ ...props }) {
	const [draftData, setDraftData] = useState<object>({
		author: "044c2ac0-49f7-4cf8-857c-45e9ccfcd0b8",
		published: true,
		title: "",
	});
	// const draftOnChange = useCallback(
	// 	() => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
	// 		const { value, name, innerHTML } = event.target;
	// 		setDraftData({ ...draftData, [name]: value || innerHTML });
	// 	},
	// 	[draftData]
	// );

	const draftOnChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { value, name, innerHTML } = event.target;
		if (name) {
			setDraftData({ ...draftData, [name]: value });
		} else {
			setDraftData({ ...draftData, content: innerHTML });
		}
	};

	const [createComment, { data, error }] = useMutation(CREATE_COMMENT);

	const publishPostHandler = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		console.log(draftData);
		const res = await createComment({
			variables: {
				data: draftData,
			},
		});

		return res;
	};

	return (
		<DraftReply
			draftData={draftData}
			draftOnChange={draftOnChange}
			publishPostHandler={publishPostHandler}
			avatar={props.avatar}
		/>
	);
}
