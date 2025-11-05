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
			className={`scroll-fade${scrollFade.visible ? " scroll-fade--visible" : ""} rules-card-section silver-container mt-[3.5rem] md:mt-[5rem] w-full`}
		>
			<div className="rules-card-header">
				<p className="accent-label">{accentLabel}</p>
				<h3 className="rules-card-title">{title}</h3>
			</div>
			<div className="rules-card-grid">
				{cards.map((card, index) => (
					<article
						key={card.title}
						className="rule-card"
						data-card-index={index + 1}
					>
						<span className="rule-card-tag">{card.tag}</span>
						<h4 className="rule-card-title-text">{card.title}</h4>
						<p className="rule-card-copy">{card.description}</p>
					</article>
				))}
			</div>
		</section>
	);
};
