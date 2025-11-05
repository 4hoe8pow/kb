import type { CarouselItem } from "../Carousel";
import Carousel from "../Carousel";
import FadeContent from "../FadeContent";
import { SectionHeader } from "../section-header";

export type Phase = {
	period: string;
	summary: string;
	timeline: {
		start: number;
		span: number;
	};
	topics: PhaseTopic[];
};

export type PhaseTopic = {
	title: string;
	items: string[];
};

export type PhasesSectionProps = {
	phases: Phase[];
};

export const PhasesSection = ({ phases }: PhasesSectionProps) => {
	if (!phases || phases.length === 0) return null;

	const carouselItems: CarouselItem[] = phases.map((phase, index) => ({
		title: phase.period,
		description: phase.summary,
		id: index,
		icon: (
			<span className="h-5 w-5 flex items-center justify-center rounded-full bg-chocolate-martini dark:bg-cream-tan text-cannoli-cream dark:text-chocolate-martini text-xs">
				{index + 1}
			</span>
		),
	}));

	return (
		<FadeContent
			blur={true}
			duration={1000}
			easing="ease-out"
			initialOpacity={0}
			className="w-full"
		>
			<section className="rounded-2xl bg-cannoli-cream/90 dark:bg-chocolate-martini/90 border border-safari/20 dark:border-baltic-amber/70 p-6 shadow-sm">
				<SectionHeader
					kicker="Historical Phases"
					title="振興の沿革"
					intro="年代ごとの主要な出来事を整理し、普及と競技化のプロセスを俯瞰します。"
				/>
				<div className="mt-4 font-body">
					<Carousel
						items={carouselItems}
						baseWidth={300}
						autoplay={true}
						autoplayDelay={3000}
						pauseOnHover={true}
						loop={true}
						round={true}
					/>
				</div>
			</section>
		</FadeContent>
	);
};
