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
		<section className="about-section about-section--highlights">
			<SectionHeader
				kicker="Recent Highlights"
				title="近年の成果と注目"
				intro="2025年における国内大会と国際大会での成果を記録し、現行世代の動向を把握します。"
			/>
			<div className="highlight-grid">
				{highlights.map((highlight) => (
					<article key={highlight.title} className="highlight-card">
						<h3 className="highlight-card-title">{highlight.title}</h3>
						<ul className="highlight-card-list">
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
