import { SectionHeader } from "./section-header";

export type HighlightEntry = {
	title: string;
	details: string[];
};

export type RecentHighlightsSectionProps = {
	highlights: HighlightEntry[];
};

export const RecentHighlightsSection: React.FC<
	RecentHighlightsSectionProps
> = ({ highlights }) => {
	return (
		<section className="rounded-2xl bg-white/90 border border-gray-200 p-6 shadow-sm">
			<SectionHeader
				kicker="Recent Highlights"
				title="近年の成果と注目"
				intro="2025年における国内大会と国際大会での成果を記録し、現行世代の動向を把握します。"
			/>
			<div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-4">
				{highlights.map((highlight) => (
					<article
						key={highlight.title}
						className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm"
					>
						<h3 className="text-lg font-semibold text-gray-900">
							{highlight.title}
						</h3>
						<ul className="mt-3 list-none p-0 m-0 space-y-2 text-gray-700">
							{highlight.details.map((detail) => (
								<li key={detail}>{detail}</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	);
};
