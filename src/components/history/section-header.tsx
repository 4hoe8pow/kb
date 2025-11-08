export type SectionHeaderProps = {
	kicker: string;
	title: string;
	intro: string;
};

export const SectionHeader = ({ kicker, title, intro }: SectionHeaderProps) => {
	return (
		<div className="mb-4">
			<p className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300 font-hard">
				{kicker}
			</p>
			<h2 className="mt-1 text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-100 font-dramatic">
				{title}
			</h2>
			<p className="mt-2 text-base text-gray-700 dark:text-gray-200 font-body">
				{intro}
			</p>
		</div>
	);
};
