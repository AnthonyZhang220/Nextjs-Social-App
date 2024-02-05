"use client";

import Landing from "@/layout/Landing";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import LoadingUI from "@/components/LoadingUI";

export default function LandingPage() {
	const session = useSession();

	if (session.status === "authenticated") {
		return redirect("/home");
	}

	if (session.status === "loading") {
		return <LoadingUI />;
	}
	return <Landing />;
}
