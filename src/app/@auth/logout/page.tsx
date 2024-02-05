"use client";

import { signOut } from "next-auth/react";
import { Suspense } from "react";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import styles from "./page.module.scss";
import Loading from "./loading";

export default function Logout() {
	return (
		<Modal title="Logout" buttonContent="Next">
			<Suspense fallback={<Loading />}>
				<div className={styles.logout}>
					<div>
						<h4>You are about to log out of your account!</h4>
					</div>
					<div onClick={() => signOut({ callbackUrl: "/home" })}>
						<Button label="Log Out" bgColor="" radius={16} />
					</div>
				</div>
			</Suspense>
		</Modal>
	);
}
