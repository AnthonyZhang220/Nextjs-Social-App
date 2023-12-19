"use client";

import ErrorUI from "@/components/ErrorUI";

function Error() {
	return (
		<div
			style={{
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
			}}
		>
			<ErrorUI />
		</div>
	);
}

export default Error;
