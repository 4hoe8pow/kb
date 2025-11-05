export type SectionHeaderProps = {
	kicker: string;
	title: string;
	intro: string;
};

export const SectionHeader = ({ kicker, title, intro }: SectionHeaderProps) => {
	return (
		<div className="mb-4">
			<p className="text-sm uppercase tracking-widest text-secondary font-hard">
				{kicker}
			</p>
			<h2 className="mt-1 text-2xl md:text-3xl font-extrabold text-secondary font-dramatic">
				{title}
			</h2>
			<p className="mt-2 text-base text-secondary font-body">{intro}</p>
		</div>
	);
};
