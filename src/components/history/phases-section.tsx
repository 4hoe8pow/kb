import type { CarouselItem } from "../Carousel";
import Carousel from "../Carousel";
import { SectionHeader } from "./section-header";

export type Phase = {
	id: string;
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

export const PhasesSection: React.FC<PhasesSectionProps> = ({ phases }) => {
	if (!phases || phases.length === 0) return null;

	const carouselItems: CarouselItem[] = phases.map((phase, index) => ({
		title: phase.period,
		description: phase.summary,
		id: index,
		icon: (
			<span className="h-[20px] w-[20px] flex items-center justify-center rounded-full bg-[#060010] text-white text-xs">
				{index + 1}
			</span>
		),
	}));

	return (
		<section className="rounded-2xl bg-white/90 border border-gray-200 p-6 shadow-sm">
			<SectionHeader
				kicker="Historical Phases"
				title="振興の沿革"
				intro="年代ごとの主要な出来事を整理し、普及と競技化のプロセスを俯瞰します。"
			/>
			<div className="mt-4">
				<Carousel
					items={carouselItems}
					baseWidth={300}
					autoplay={true}
					autoplayDelay={3000}
					pauseOnHover={true}
					loop={true}
					round={false}
				/>
			</div>
		</section>
	);
};
