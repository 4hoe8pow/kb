import FadeContent from "../FadeContent";
import SpotlightCard from "../SpotlightCard";

export interface RaidFlowStep {
	title: string;
	tag: string;
	description: string;
}

export interface RulesCardSectionProps {
	accentLabel: string;
	title: string;
	cards: RaidFlowStep[];
}

export const RulesCardSection = (props: RulesCardSectionProps) => {
	const { accentLabel, title, cards } = props;

	return (
		<FadeContent
			blur={true}
			duration={1000}
			easing="ease-out"
			initialOpacity={0}
			className="w-full"
		>
			<section className="container mx-auto px-4 w-full mt-14 md:mt-20 rounded-[28px] p-6">
				<div className="mb-4">
					<p className="text-xs uppercase tracking-widest">{accentLabel}</p>
					<h3 className="mt-1 text-2xl font-extrabold">{title}</h3>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{cards.map((card, index) => (
						<SpotlightCard
							key={card.title}
							className="p-6 rounded-lg border border-safari/20 shadow-sm hover:shadow-md transition"
						>
							<div data-card-index={index + 1}>
								<span className="text-xs uppercase tracking-wide">
									{card.tag}
								</span>
								<h4 className="mt-2 text-lg font-semibold">{card.title}</h4>
								<p className="mt-2 text-sm">{card.description}</p>
							</div>
						</SpotlightCard>
					))}
				</div>
			</section>
		</FadeContent>
	);
};
