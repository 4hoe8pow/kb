import FadeContent from "../FadeContent";
import type { RaidFlowStep } from "./rules-card-section";

export interface RaidFlowSectionProps {
	accentLabel: string;
	title: string;
	steps: RaidFlowStep[];
}

export const RaidFlowSection = (props: RaidFlowSectionProps) => {
	const { accentLabel, title, steps } = props;

	return (
		<FadeContent
			blur={true}
			duration={1000}
			easing="ease-out"
			initialOpacity={0}
			className="w-full"
		>
			<section className="container mx-auto px-4 w-full mt-12 md:mt-16 rounded-[28px] bg-chocolate-martini/60 dark:bg-cannoli-cream/60 backdrop-blur-2xl border border-baltic-amber/50 dark:border-safari/50 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
				<div className="mb-8">
					<p className="text-xs uppercase tracking-widest text-cream-tan dark:text-sirocco font-semibold">
						{accentLabel}
					</p>
					<h3 className="mt-1 text-3xl font-extrabold text-cannoli-cream dark:text-chocolate-martini">
						{title}
					</h3>
				</div>
				<div className="relative max-w-4xl mx-auto pl-16">
					{steps.map((step, index) => {
						const stepNumber = index + 1;
						const isLast = index === steps.length - 1;
						return (
							<div
								key={step.title}
								className="relative group"
								style={{
									marginLeft: `${index * 40}px`,
									marginTop: index === 0 ? "0" : "24px",
								}}
							>
								{/* 接続線 */}
								{!isLast && (
									<div
										className="absolute w-0.5 bg-border"
										style={{
											left: "-28px",
											top: "56px",
											height: "calc(100% + 24px - 56px)",
										}}
									/>
								)}

								{/* コンテンツカード */}
								<div className="relative p-6 bg-chocolate-martini/40 dark:bg-cannoli-cream/40 backdrop-blur-xl border border-baltic-amber/50 dark:border-safari/50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.16)] transition-all duration-300 transform group-hover:-translate-y-1">
									{/* ステップ番号バッジ - カード左上に固定 */}
									<div className="absolute -left-7 -top-7 w-14 h-14 rounded-full bg-bland/90 backdrop-blur-sm text-cannoli-cream flex items-center justify-center text-xl font-bold shadow-[0_8px_24px_rgba(0,0,0,0.2)] border border-baltic-amber/30 dark:border-safari/30">
										{stepNumber}
									</div>

									<p className="text-xs uppercase tracking-widest text-cream-tan dark:text-sirocco font-semibold">
										{step.tag}
									</p>
									<h4 className="mt-2 text-xl font-extrabold text-cannoli-cream dark:text-chocolate-martini">
										{step.title}
									</h4>
									<p className="mt-3 text-base text-cream-tan dark:text-baltic-amber leading-relaxed">
										{step.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</FadeContent>
	);
};
