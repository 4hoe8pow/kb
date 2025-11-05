import FadeContent from "../FadeContent";
import SpotlightCard from "../SpotlightCard";
import { SectionHeader } from "../section-header";

export type HighlightEntry = {
	title: string;
	details: string[];
};

export type RecentHighlightsSectionProps = {
	highlights: HighlightEntry[];
};

export const RecentHighlightsSection = ({
	highlights,
}: RecentHighlightsSectionProps) => {
	return (
		<FadeContent
			blur={true}
			duration={1000}
			easing="ease-out"
			initialOpacity={0}
			className="w-full"
		>
			<section className="rounded-2xl bg-white/90 border border-gray-200 p-6 shadow-sm">
				<SectionHeader
					kicker="Recent Highlights"
					title="近年の成果と注目"
					intro="2025年における国内大会と国際大会での成果を記録し、現行世代の動向を把握します。"
				/>
				<div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-4 font-body">
					{highlights.map((highlight) => (
						<SpotlightCard
							key={highlight.title}
							className="p-6 rounded-lg border border-gray-200 shadow-sm"
						>
							<h3 className="text-lg font-semibold ">{highlight.title}</h3>
							<ul className="mt-3 list-none p-0 m-0 space-y-2 ">
								{highlight.details.map((detail) => (
									<li key={detail}>{detail}</li>
								))}
							</ul>
						</SpotlightCard>
					))}
				</div>
			</section>
		</FadeContent>
	);
};
