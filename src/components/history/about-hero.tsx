import { useEffect, useRef } from "react";
import SpotlightCard from "../SpotlightCard";
import { SectionHeader } from "../section-header";

export type HeroStat = {
	value: string;
	label: string;
	detail: string;
};

export type AboutHeroProps = {
	stats: HeroStat[];
};

export const AboutHero = ({ stats }: AboutHeroProps) => {
	const uniqueStats = stats;
	const loopingStats = [...uniqueStats, ...uniqueStats];
	const statsTrackRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const trackEl = statsTrackRef.current;
		if (!trackEl) return;

		const updateMetrics = () => {
			const uniqueWidth = trackEl.scrollWidth / 2;
			if (!uniqueWidth) return;

			const pxPerSecond = 80;
			const duration = Math.max(uniqueWidth / pxPerSecond, 12);
			const formattedOffset = `${uniqueWidth}px`;
			const formattedDuration = `${duration.toFixed(2)}s`;

			trackEl.style.setProperty("--hero-stats-offset", formattedOffset);
			trackEl.style.setProperty("--hero-stats-duration", formattedDuration);
			trackEl.style.animationDuration = formattedDuration;
		};

		updateMetrics();
		const timeoutId = window.setTimeout(updateMetrics, 420);

		let observer: ResizeObserver | undefined;
		if (typeof ResizeObserver === "function") {
			observer = new ResizeObserver(updateMetrics);
			observer.observe(trackEl);
		}

		return () => {
			if (observer) observer.disconnect();
			window.clearTimeout(timeoutId);
		};
	}, []);

	return (
		<header className="relative grid gap-6 p-6 rounded-2xl bg-white/90 border border-gray-200">
			<SectionHeader
				kicker="Kabaddi in Japan"
				title="日本カバディ史の概要"
				intro="1970年代後半の展示試合から2020年代の国際タイトルまで、日本でのカバディ導入と普及の流れを年代別に整理します。"
			/>
			<div className="overflow-hidden py-3" aria-live="off">
				<div className="flex gap-4 w-max" ref={statsTrackRef}>
					{loopingStats.map((stat, index) => (
						<SpotlightCard
							key={`${stat.value}-${index}`}
							className="flex flex-col gap-2 p-4 rounded-lg border border-gray-200 shadow-sm min-w-40"
							aria-hidden={index >= uniqueStats.length}
						>
							<span className="text-2xl md:text-3xl font-bold font-display">
								{stat.value}
							</span>
							<span className="text-xs uppercase tracking-wide">
								{stat.label}
							</span>
							<p className="mt-1 text-sm font-body">{stat.detail}</p>
						</SpotlightCard>
					))}
				</div>
			</div>
		</header>
	);
};
