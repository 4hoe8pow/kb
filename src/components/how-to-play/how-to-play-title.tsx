export interface HowToPlayTitleProps {
	title: string;
	subtitle: string;
}

export const HowToPlayTitle = ({ title, subtitle }: HowToPlayTitleProps) => {
	const titleClass =
		"font-display text-center font-light italic select-none mx-auto max-w-[18ch] text-[9.5vw] md:text-[5rem] lg:text-[5.5rem] tracking-[0.24em] md:tracking-[0.3em] leading-[0.96]";
	const subtitleClass =
		"font-dramatic text-center text-[0.8rem] md:text-[0.95rem] tracking-[0.28em] uppercase font-light mx-auto max-w-[70.7vw] leading-relaxed drop-shadow";

	return (
		<div className="container mx-auto px-4 py-8 md:py-12">
			<div className="relative w-full flex justify-center">
				<h1 className={titleClass}>{title}</h1>
			</div>
			<p className={subtitleClass}>{subtitle}</p>
		</div>
	);
};
