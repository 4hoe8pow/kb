import type { RaidFlowSectionProps } from "@/routes/kabaddi.types";
import { useScrollFade } from "./scroll-fade";

export const RaidFlowSection = (props: RaidFlowSectionProps) => {
	const { accentLabel, title, steps } = props;
	const scrollFade = useScrollFade({ threshold: 0.24 });
	const layoutModifiers = [
		"flow-step--span-two",
		"flow-step--top-right",
		"flow-step--bottom-left",
		"flow-step--span-two-reverse",
	];

	return (
		<section
			ref={scrollFade.ref}
			data-scroll-fade
			className={`scroll-fade${scrollFade.visible ? " scroll-fade--visible" : ""} silver-container w-full mt-[3rem] md:mt-[4rem] rounded-[28px] bg-white/90 border border-gray-100 p-6 shadow-sm`}
		>
			<div className="rules-flow-header">
				<p className="accent-label">{accentLabel}</p>
				<h3 className="rules-flow-title">{title}</h3>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{steps.map((step, index) => {
					const modifier = layoutModifiers[index] ?? "";
					const modifierClasses = [
						modifier === "flow-step--span-two" ? "md:col-span-2" : "",
						modifier === "flow-step--top-right"
							? "md:col-start-2 md:row-start-1"
							: "",
						modifier === "flow-step--bottom-left"
							? "md:col-start-1 md:row-start-2"
							: "",
						modifier === "flow-step--span-two-reverse" ? "md:col-span-2" : "",
					]
						.filter(Boolean)
						.join(" ");

					return (
						<article
							key={step.title}
							className={`relative p-6 rounded-lg bg-white/95 border border-gray-100 shadow-sm hover:shadow-md transition ${modifierClasses}`.trim()}
						>
							<span className="absolute top-4 left-4 text-3xl font-extrabold text-gray-200">
								0{index + 1}
							</span>
							<div className="flow-step-body pl-0">
								<h4 className="text-xl font-semibold text-gray-900">
									{step.title}
								</h4>
								<p className="text-sm uppercase tracking-widest text-gray-500 mt-1">
									{step.tag}
								</p>
								<p className="mt-3 text-sm text-gray-700">{step.description}</p>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};
