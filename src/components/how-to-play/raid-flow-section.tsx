import type { RaidFlowSectionProps } from "@/routes/kabaddi.types";
import FadeContent from "../FadeContent";
import SpotlightCard from "../SpotlightCard";

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
			<section className="container mx-auto px-4 w-full mt-12 md:mt-16 rounded-[28px] bg-white/90 border border-gray-100 p-6 shadow-sm">
				<div className="mb-4">
					<p className="text-xs uppercase tracking-widest text-gray-500">
						{accentLabel}
					</p>
					<h3 className="mt-1 text-2xl font-extrabold text-gray-900">
						{title}
					</h3>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
					{steps.map((step, index) => {
						return (
							<SpotlightCard
								key={step.title}
								className={
									"relative p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition"
								}
							>
								<span className="absolute top-4 left-4 text-3xl font-extrabold">
									0{index + 1}
								</span>
								<div className="flow-step-body pl-0">
									<h4 className="text-xl font-semibold">{step.title}</h4>
									<p className="text-sm uppercase tracking-widest mt-1">
										{step.tag}
									</p>
									<p className="mt-3 text-sm">{step.description}</p>
								</div>
							</SpotlightCard>
						);
					})}
				</div>
			</section>
		</FadeContent>
	);
};
