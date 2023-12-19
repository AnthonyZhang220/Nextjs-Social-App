"use client";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState, useEffect, useCallback, Suspense } from "react";
import Modal from "@/components/Modal";
import { useSession } from "next-auth/react";
import ProfileFormWithData from "./ProfileFormWithData";
import LoadingUI from "@/components/LoadingUI";

const UPDATE_MY_PROFILE = gql`
	mutation updateProfile(
		$id: String!
		$displayName: String!
		$bio: String!
		$avatar: String!
		$banner: String!
	) {
		updateProfile(
			id: $id
			displayName: $displayName
			bio: $bio
			avatar: $avatar
			banner: $banner
		) {
			id
			name
			displayName
			username
			email
			profile {
				bio
				banner
				avatar
			}
		}
	}
`;

const GET_MY_PROFILE = gql`
	query getMyProfile($id: String!) {
		getMyProfile(id: $id) {
			id
			displayName
			username
			name
			email
			profile {
				avatar
				banner
				bio
			}
		}
	}
`;

export type ProfileUpdateType = {
	id?: string;
	displayName?: string;
	username?: string;
	bio?: string;
	avatar?: string;
	banner?: string;
	email?: string;
};

export default function Profile() {
	const session = useSession();

	const [newProfile, setNewProfile] = useState<ProfileUpdateType>({
		displayName: "",
		bio: "",
		avatar: "",
		banner: "",
		username: "",
		email: "",
	});

	const { data, loading, error } = useQuery(GET_MY_PROFILE, {
		variables: {
			id: session.data?.user?.id,
		},
	});

	const [updateProfile, { loading: updateLoading, error: updateError }] =
		useMutation(UPDATE_MY_PROFILE);

	const updateProfileHandler = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		console.log("Profile", newProfile);
		await updateProfile({
			variables: {
				...newProfile,
				id: session.data?.user?.id,
			},
		});
	};

	const updateProfileOnChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = event.target;
		setNewProfile({ ...newProfile, [name]: value });
	};

	const statusText = (): string => {
		if (updateLoading) return "Loading";
		if (updateError) return "Error";
		return "Save";
	};

	useEffect(() => {
		if (data && data.getMyProfile) {
			console.log(data, data.getMyProfile);
			setNewProfile({
				displayName: data.getMyProfile.displayName || "",
				bio: data.getMyProfile.profile.bio || "",
				username: data.getMyProfile.username || "",
				email: data.getMyProfile.email || "",
				avatar: data.getMyProfile.profile.avatar || "",
			});
		}
	}, [data]);

	return (
		<Modal
			buttonContent={statusText()}
			buttonAction={updateProfileHandler}
			title="Edit Profile Detail"
		>
			<Suspense fallback={<LoadingUI />}>
				<ProfileFormWithData
					newProfile={newProfile}
					updateProfileOnChange={updateProfileOnChange}
				/>
			</Suspense>
		</Modal>
	);
}
