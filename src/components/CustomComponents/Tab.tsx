interface TabProps {
	content: string;
	fontSize?: number;
	p: number;
	borderRadius: number;
}

export default function Tab(props: TabProps) {
	return (
		<div
			style={{
				fontSize: props.fontSize,
				padding: props.p,
				borderRadius: props.borderRadius,
			}}
		>
			<span>{props.content.toUpperCase()}</span>
		</div>
	);
}
