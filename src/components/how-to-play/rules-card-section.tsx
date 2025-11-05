import { useScrollFade } from "./scroll-fade";

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
	const scrollFade = useScrollFade({ threshold: 0.28 });

	return (
		<section
			ref={scrollFade.ref}
			data-scroll-fade
			className={`scroll-fade${scrollFade.visible ? " scroll-fade--visible" : ""} silver-container w-full mt-[3.5rem] md:mt-[5rem] rounded-[28px] p-6`}
		>
			<div className="rules-card-header">
				<p className="accent-label">{accentLabel}</p>
				<h3 className="rules-card-title">{title}</h3>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{cards.map((card, index) => (
					<article
						key={card.title}
						className="p-6 rounded-lg bg-white/95 border border-gray-100 shadow-sm hover:shadow-md transition"
						data-card-index={index + 1}
					>
						<span className="text-xs uppercase tracking-wide text-gray-500">
							{card.tag}
						</span>
						<h4 className="mt-2 text-lg font-semibold text-gray-900">
							{card.title}
						</h4>
						<p className="mt-2 text-sm text-gray-700">{card.description}</p>
					</article>
				))}
			</div>
		</section>
	);
};
