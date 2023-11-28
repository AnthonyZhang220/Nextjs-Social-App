async function getRandomFacts() {
	const response = await fetch("https://catfact.ninja/fact", {
		method: "GET",
		mode: "no-cors",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();

	const randomFact = data.fact;
	return randomFact;
}

export default getRandomFacts;
