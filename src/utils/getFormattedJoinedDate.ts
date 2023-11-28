export default function getJoinedDate(createdAt: string) {
	const date = new Date(createdAt);
	const localDate = date.toLocaleDateString(undefined, {
		year: "numeric",
		month: "short",
		day: "2-digit",
	});

	return localDate;
}
