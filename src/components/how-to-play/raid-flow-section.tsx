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
			className={`scroll-fade${scrollFade.visible ? " scroll-fade--visible" : ""} rules-flow-panel silver-container mt-[3rem] md:mt-[4rem] w-full`}
		>
			<div className="rules-flow-header">
				<p className="accent-label">{accentLabel}</p>
				<h3 className="rules-flow-title">{title}</h3>
			</div>
			<div className="rules-flow-grid">
				{steps.map((step, index) => (
					<article
						key={step.title}
						className={`flow-step ${layoutModifiers[index] ?? ""}`.trim()}
					>
						<span className="flow-step-index">0{index + 1}</span>
						<div className="flow-step-body">
							<h4>{step.title}</h4>
							<p className="flow-step-tagline">{step.tag}</p>
							<p className="flow-step-copy">{step.description}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};
