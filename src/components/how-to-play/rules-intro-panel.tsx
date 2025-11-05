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
			className={`scroll-fade${scrollFade.visible ? " scroll-fade--visible" : ""} silver-container w-full rounded-[28px] bg-white/90 border-t border-b border-gray-200 p-6 shadow-2xl`}
		>
			<div className="flex flex-col md:flex-row items-start gap-6">
				<div className="flex-1">
					<p className="text-xs uppercase tracking-widest text-gray-500">
						{accentLabel}
					</p>
					<h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-gray-900">
						{title}
					</h2>
					<p className="mt-3 text-base text-gray-700">{copy}</p>
				</div>
				<div className="flex gap-4 mt-4 md:mt-0">
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="flex flex-col gap-1 p-3 rounded-lg border border-gray-100 bg-white shadow-sm min-w-[120px]"
						>
							<span className="text-2xl md:text-3xl font-bold text-gray-900">
								{stat.value}
							</span>
							<span className="text-xs uppercase tracking-wide text-gray-500">
								{stat.label}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
