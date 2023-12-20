"use client";

import Login from "@/layout/Login";
import Modal from "../../../components/Modal";

export default function LoginPage() {
	return (
		<Modal title="Sign in to NextJS App" buttonContent="Login">
			<Login />
		</Modal>
	);
}
