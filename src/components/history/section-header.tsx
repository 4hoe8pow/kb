export type SectionHeaderProps = {
	kicker: string;
	title: string;
	intro: string;
};

export const SectionHeader = ({ kicker, title, intro }: SectionHeaderProps) => {
	return (
		<div className="about-hero-panel">
			<p className="about-section-kicker">{kicker}</p>
			<h2 className="about-hero-title">{title}</h2>
			<p className="about-section-intro">{intro}</p>
		</div>
	);
};
