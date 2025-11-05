import FadeContent from "../FadeContent";
import SpotlightCard from "../SpotlightCard";

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

	return (
		<FadeContent
			blur={true}
			duration={1000}
			easing="ease-out"
			initialOpacity={0}
			className="w-full"
		>
			<section className="container mx-auto px-4 w-full rounded-[28px] bg-white/90 border-t border-b border-gray-200 p-6 shadow-2xl">
				<div className="flex flex-col md:flex-row items-start gap-6">
					<div className="flex-1">
						<p className="text-xs uppercase tracking-widest text-background">
							{accentLabel}
						</p>
						<h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-background">
							{title}
						</h2>
						<p className="mt-3 text-base text-background">{copy}</p>
					</div>
					<div className="flex gap-4 mt-4 md:mt-0">
						{stats.map((stat) => (
							<SpotlightCard
								key={stat.label}
								className="flex flex-col gap-1 p-3 rounded-lg border border-gray-100 shadow-sm min-w-[120px]"
							>
								<span className="text-2xl md:text-3xl font-bold">
									{stat.value}
								</span>
								<span className="text-xs uppercase tracking-wide">
									{stat.label}
								</span>
							</SpotlightCard>
						))}
					</div>
				</div>
			</section>
		</FadeContent>
	);
};
