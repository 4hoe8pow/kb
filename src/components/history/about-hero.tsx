import { useEffect, useRef } from "react";

export type HeroStat = {
	value: string;
	label: string;
	detail: string;
	color: string;
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
			<div>
				<p className="text-sm uppercase tracking-widest text-gray-500">
					Kabaddi in Japan
				</p>
				<h1 className="mt-1 text-2xl md:text-3xl font-extrabold text-gray-900">
					日本カバディ史の概要
				</h1>
				<p className="mt-2 text-base text-gray-600">
					1970年代後半の展示試合から2020年代の国際タイトルまで、日本でのカバディ導入と普及の流れを年代別に整理します。
				</p>
			</div>
			<div className="overflow-hidden py-3" aria-live="off">
				<div className="flex gap-4 w-max" ref={statsTrackRef}>
					{loopingStats.map((stat, index) => (
						<div
							key={`${stat.value}-${index}`}
							className="flex flex-col gap-2 p-4 rounded-lg border border-gray-200 bg-white shadow-sm min-w-[160px]"
							style={{ backgroundColor: stat.color }}
							aria-hidden={index >= uniqueStats.length}
						>
							<span className="text-2xl md:text-3xl font-bold text-gray-900">
								{stat.value}
							</span>
							<span className="text-xs uppercase tracking-wide text-gray-600">
								{stat.label}
							</span>
							<p className="mt-1 text-sm text-gray-700">{stat.detail}</p>
						</div>
					))}
				</div>
			</div>
		</header>
	);
};
