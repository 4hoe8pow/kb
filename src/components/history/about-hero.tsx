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
		<header className="about-hero">
			<div className="about-hero-panel">
				<p className="about-hero-kicker">Kabaddi in Japan</p>
				<h1 className="about-hero-title">日本カバディ史の概要</h1>
				<p className="about-hero-description">
					1970年代後半の展示試合から2020年代の国際タイトルまで、日本でのカバディ導入と普及の流れを年代別に整理します。
				</p>
			</div>
			<div className="about-hero-stats" aria-live="off">
				<div className="about-hero-stats-track" ref={statsTrackRef}>
					{loopingStats.map((stat, index) => (
						<div
							key={`${stat.value}-${index}`}
							className="about-stat-card"
							style={{ "--stat-card-bg": stat.color } as React.CSSProperties}
							aria-hidden={index >= uniqueStats.length}
						>
							<span className="about-stat-value">{stat.value}</span>
							<span className="about-stat-label">{stat.label}</span>
							<p className="about-stat-detail">{stat.detail}</p>
						</div>
					))}
				</div>
			</div>
		</header>
	);
};
