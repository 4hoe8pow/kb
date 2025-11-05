import { useScrollFade } from "./scroll-fade";

export interface RulesIntroStat {
	value: string;
	label: string;
}

export interface RulesIntroPanelProps {
	accentLabel: string;
	title: string;
	copy: string;
	stats: RulesIntroStat[];
}

export const RulesIntroPanel = (props: RulesIntroPanelProps) => {
	const { accentLabel, title, copy, stats } = props;
	const scrollFade = useScrollFade({ threshold: 0.2 });

	return (
		<section
			ref={scrollFade.ref}
			data-scroll-fade
			className={`scroll-fade${scrollFade.visible ? " scroll-fade--visible" : ""} rules-intro-panel silver-container w-full`}
		>
			<div className="rules-intro-content">
				<div className="rules-intro-copy">
					<p className="accent-label">{accentLabel}</p>
					<h2 className="rules-intro-title">{title}</h2>
					<p className="rules-intro-text">{copy}</p>
				</div>
				<div className="rules-intro-stats">
					{stats.map((stat) => (
						<div key={stat.label} className="rules-stat">
							<span className="rules-stat-value">{stat.value}</span>
							<span className="rules-stat-label">{stat.label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
