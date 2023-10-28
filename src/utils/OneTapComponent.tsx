"use client";

import useOneTapSignin from "@/hooks/useOneTapSignin";

import styles from "../styles/sass/layout/OneTap.module.scss";

const OneTapComponent = () => {
	const { isLoading: oneTapIsLoading } = useOneTapSignin({
		redirect: false,
		parentContainerId: "oneTap",
	});

	return <div id="oneTap" className={styles.oneTap} />;
};

export default OneTapComponent;
