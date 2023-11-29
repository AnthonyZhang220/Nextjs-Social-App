"use client";
import { gql, useMutation } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useSession } from "next-auth/react";
import { useState, useEffect, useCallback, Suspense } from "react";

import Modal from "@/components/Modal";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import Loading from "@/components/LoadingUI";
import Error from "@/components/Error";
import styles from "./page.module.scss";
import LoadingNext from "./loading";

const UPDATE_MY_PROFILE = gql`
	mutation updateProfile(
		$id: String!
		$displayName: String!
		$bio: String!
		$image: String!
		$banner: String!
		$avatar: String!
		$city: String!
	) {
		updateProfile(
			id: $id
			displayName: $displayName
			bio: $bio
			image: $image
			banner: $banner
			avatar: $avatar
			city: $city
		) {
			id
			displayName
			email
			image
			profile {
				bio
				banner
				avatar
				location {
					city
				}
			}
		}
	}
`;

const GET_MY_PROFILE = gql`
	query getMyProfile($id: String!) {
		getMyProfile(id: $id) {
			id
			displayName
			name
			image
			profile {
				avatar
				banner
				bio
				location {
					city
				}
			}
		}
	}
`;

type ProfileUpdateType = {
	id?: string;
	displayName?: string;
	bio?: string;
	image?: string;
	avatar?: string;
	banner?: string;
	city?: string;
};

export default function Profile() {
	const session = useSession();
	const [profileData, setProfileData] = useState<ProfileUpdateType>({
		id: "",
		displayName: "",
		bio: "",
		image: "",
		avatar: "",
		banner: "",
		city: "",
	});
	const { data: queryData, error: queryError } = useSuspenseQuery(
		GET_MY_PROFILE,
		{
			variables: {
				id: "044c2ac0-49f7-4cf8-857c-45e9ccfcd0b8",
			},
		}
	);

	const {
		id,
		image,
		displayName,
		username,
		profile: { ...profile },
	} = queryData.getMyProfile;

	const { location } = profile;

	useEffect(() => {
		console.log(profile);
		setProfileData({
			id,
			displayName: displayName || "",
			bio: profile?.bio || "",
			image: image || "",
			avatar: profile?.avatar || "",
			banner: profile?.banner || "",
			city: location?.city || "",
		});
	}, [queryData]);

	const [updateProfile, { loading: updateLoading, error: updateError }] =
		useMutation(UPDATE_MY_PROFILE);

	const updateProfileHandler = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		console.log("Profile", profileData);
		await updateProfile({
			variables: profileData,
		});
	};

	const updateProfileOnChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = event.target;
		setProfileData({ ...profileData, [name]: value });
	};

	const statusText = (): string => {
		if (updateLoading) return "Loading";
		if (updateError) return "Error";
		return "Save";
	};

	if (queryError) {
		return (
			<Modal buttonContent="Save">
				<Error queryError={queryError} />
			</Modal>
		);
	}

	return (
		<Modal
			buttonContent={statusText()}
			buttonAction={updateProfileHandler}
			title="Edit Profile Detail"
		>
			<Suspense fallback={<LoadingNext />}>
				<section className={styles.profile_form}>
					<form className={styles.profile_form_container}>
						<div className={styles.profile_form_banner}>
							<img
								src={profile.banner ? profile.banner : "/default_banner.jpg"}
								alt={profile.banner}
							/>
						</div>
						<div className={styles.profile_form_body}>
							<div className={styles.profile_form_action}>
								<div className={styles.avatar}>
									<div className={styles.avatar_aspect_ratio}>
										<Avatar
											avatar_src={image}
											draggable={true}
											displayName={displayName}
											alt={displayName}
										/>
									</div>
								</div>
							</div>
							<div className={styles.profile_form_content}>
								<div className={styles.profile_form_displayName}>
									<label>Display Name</label>
									<TextField
										name="displayName"
										type="text"
										value={profileData.displayName}
										onInputChange={updateProfileOnChange}
									/>
								</div>
								<div className={styles.profile_form_username}>
									<label>Username</label>
									<TextField
										type="text"
										disabled={true}
										defaultValue={`@${username}`}
									/>
								</div>
								<div className={styles.profile_form_bio}>
									<label>Bio</label>
									<TextField
										name="bio"
										type="text"
										value={profileData.bio}
										onInputChange={updateProfileOnChange}
									/>
								</div>
								<div className={styles.profile_form_info}>
									<label>Location</label>
									<TextField
										name="city"
										type="text"
										value={profileData.city}
										onInputChange={updateProfileOnChange}
									/>
								</div>
							</div>
						</div>
					</form>
				</section>
			</Suspense>
		</Modal>
	);
}
