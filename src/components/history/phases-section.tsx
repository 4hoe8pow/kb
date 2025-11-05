import { useRef, useState } from "react";
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
	const [activeIndex, setActiveIndex] = useState(0);
	const totalPhases = phases.length;

	const swipeStartX = useRef<number | null>(null);
	const swipeStartY = useRef<number | null>(null);
	const swipeDirection = useRef<"horizontal" | "vertical" | null>(null);

	if (totalPhases === 0) return null;

	const movePrev = () => setActiveIndex((i) => Math.max(i - 1, 0));
	const moveNext = () =>
		setActiveIndex((i) => Math.min(i + 1, totalPhases - 1));

	const handleTouchStart = (event: React.TouchEvent) => {
		if (event.touches.length !== 1) return;
		const touch = event.touches[0];
		swipeStartX.current = touch.clientX;
		swipeStartY.current = touch.clientY;
		swipeDirection.current = null;
	};

	const handleTouchMove = (event: React.TouchEvent) => {
		if (
			event.touches.length !== 1 ||
			swipeStartX.current === null ||
			swipeStartY.current === null
		)
			return;

		const touch = event.touches[0];
		const deltaX = touch.clientX - swipeStartX.current;
		const deltaY = touch.clientY - swipeStartY.current;

		if (swipeDirection.current === null) {
			const absX = Math.abs(deltaX);
			const absY = Math.abs(deltaY);
			if (absX > 10 || absY > 10) {
				swipeDirection.current = absX > absY ? "horizontal" : "vertical";
			}
		}

		if (swipeDirection.current === "horizontal") {
			event.preventDefault();
		}
	};

	const resetSwipe = () => {
		swipeStartX.current = null;
		swipeStartY.current = null;
		swipeDirection.current = null;
	};

	const handleTouchEnd = (event: React.TouchEvent) => {
		if (swipeStartX.current === null) return;
		if (event.changedTouches.length === 0) {
			resetSwipe();
			return;
		}
		const touch = event.changedTouches[0];
		const deltaX = touch.clientX - swipeStartX.current;
		const swipeThreshold = 45;

		if (Math.abs(deltaX) > swipeThreshold && totalPhases > 1) {
			if (deltaX < 0) moveNext();
			else movePrev();
		}

		resetSwipe();
	};

	const handleTouchCancel = () => {
		resetSwipe();
	};

	return (
		<section className="about-section about-section--phases">
			<SectionHeader
				kicker="Historical Phases"
				title="振興の沿革"
				intro="年代ごとの主要な出来事を整理し、普及と競技化のプロセスを俯瞰します。"
			/>
			<fieldset className="phase-carousel">
				<div
					className="phase-carousel-window"
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
					onTouchCancel={handleTouchCancel}
				>
					<div
						className="phase-carousel-track"
						style={{ ["--phase-index" as any]: activeIndex }}
					>
						{phases.map((phase, index) => (
							<article
								key={phase.id}
								className="phase-card"
								aria-roledescription="slide"
								aria-hidden={activeIndex === index ? "false" : "true"}
								tabIndex={activeIndex === index ? 0 : -1}
							>
								<header className="phase-card-header">
									<span className="phase-card-index">{phase.id}</span>
									<div className="phase-card-meta">
										<h3 className="phase-card-title">{phase.period}</h3>
										<p className="phase-card-summary">{phase.summary}</p>
									</div>
								</header>
								<div className="phase-card-track" aria-hidden="true">
									<span
										className="phase-card-bar"
										style={{
											["--phase-start" as any]: `${phase.timeline.start}%`,
											["--phase-span" as any]: `${phase.timeline.span}%`,
										}}
									/>
								</div>
								<ul className="phase-card-topics">
									{phase.topics.map((topic) => (
										<li key={topic.title} className="phase-topic-card">
											<h4 className="phase-topic-title">{topic.title}</h4>
											<ul className="phase-topic-items">
												{topic.items.map((item, itemIndex) => (
													<li
														key={`${topic.title}-${itemIndex}`}
														className="phase-topic-item"
													>
														{item}
													</li>
												))}
											</ul>
										</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</div>
				<div className="phase-carousel-controls">
					<button
						type="button"
						className="phase-carousel-button"
						onClick={movePrev}
						disabled={activeIndex === 0}
						aria-label="前のフェーズへ"
					>
						<span aria-hidden="true">&lt;</span>
					</button>
					<span className="phase-carousel-status">
						{activeIndex + 1}/{totalPhases}
					</span>
					<button
						type="button"
						className="phase-carousel-button"
						onClick={moveNext}
						disabled={activeIndex === totalPhases - 1}
						aria-label="次のフェーズへ"
					>
						<span aria-hidden="true">&gt;</span>
					</button>
				</div>
				<div className="phase-carousel-pagination">
					{phases.map((phase, index) => (
						<button
							key={phase.id}
							type="button"
							className={`phase-carousel-dot${activeIndex === index ? " phase-carousel-dot--active" : ""}`}
							onClick={() => setActiveIndex(index)}
							aria-label={`${phase.period}に移動`}
							aria-current={activeIndex === index ? "true" : undefined}
						/>
					))}
				</div>
			</fieldset>
		</section>
	);
};
