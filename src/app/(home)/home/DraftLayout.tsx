"use client";

import { useCallback, useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import Draft from "@/layout/Draft";

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

	const [createPost, { data, error }] = useMutation(CREATE_POST);

	const publishPostHandler = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		console.log(draftData);
		const res = await createPost({
			variables: {
				data: draftData,
			},
		});

		return res;
	};

	return (
		<Draft
			draftData={draftData}
			draftOnChange={draftOnChange}
			publishPostHandler={publishPostHandler}
			avatar={props.avatar}
		/>
	);
}
