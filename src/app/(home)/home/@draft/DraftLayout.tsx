"use client";

import { useCallback, useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import DraftPost from "@/layout/DraftPost";

const CREATE_POST = gql`
	mutation createPost($data: PostCreateInput!) {
		createPost(data: $data) {
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

export default function DraftLayout({ ...props }) {
	const { session } = props;
	const defaultInput = {
		author: session?.user?.id,
		title: "",
		visibleTo: "Everyone",
		content: "",
	};
	const [draftData, setDraftData] = useState<object>({ ...defaultInput });

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

	const [createPostMutation, { data, error }] = useMutation(CREATE_POST);

	const publishPostHandler = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		console.log(draftData);
		const { data } = await createPostMutation({
			variables: {
				data: draftData,
			},
		});

		if (data) {
			setDraftData(defaultInput);
		}
	};

	useEffect(() => {
		setDraftData({ ...defaultInput });
	}, []);

	return (
		<>
			{session ? (
				<DraftPost
					draftData={draftData}
					draftOnChange={draftOnChange}
					publishPostHandler={publishPostHandler}
					avatar={props.session.user.image}
				/>
			) : (
				<DraftPost draftData={draftData} />
			)}
		</>
	);
}
