export interface HeroLeadProps {
	title: string;
	subtitle: string;
	animate?: boolean;
}

export const HeroLead = ({
	title,
	subtitle,
	animate = false,
}: HeroLeadProps) => {
	const baseTitleClass =
		"hero__title font-display text-center font-light italic select-none opacity-0 mx-auto max-w-[18ch] text-[9.5vw] md:text-[5rem] lg:text-[5.5rem] tracking-[0.24em] md:tracking-[0.3em] leading-[0.96]";
	const titleClass = `${baseTitleClass} ${animate ? "animate-fade-blur" : ""}`;
	const baseSubtitleClass =
		"hero__subtitle font-dramatic text-center text-[0.8rem] md:text-[0.95rem] tracking-[0.28em] uppercase font-light opacity-0 mx-auto max-w-[70.7vw] leading-relaxed drop-shadow";
	const subtitleClass = `${baseSubtitleClass} ${animate ? "animate-fade-blur" : ""}`;

	return (
		<div className="silver-container py-8 md:py-12">
			<div className="hero__title-wrapper relative w-full flex justify-center">
				<h1
					className={titleClass}
					style={{ animationDelay: animate ? "0.05s" : undefined }}
				>
					{title}
					<span
						className="hero__glitch absolute inset-0 pointer-events-none"
						data-text={title}
					/>
					<span
						className="hero__glitch-alt absolute inset-0 pointer-events-none"
						data-text={title}
					/>
				</h1>
				<div className="hero__texture absolute inset-0 pointer-events-none mix-blend-overlay" />
			</div>
			<p
				className={subtitleClass}
				style={{ animationDelay: animate ? "0.18s" : undefined }}
			>
				{subtitle}
			</p>
		</div>
	);
};
