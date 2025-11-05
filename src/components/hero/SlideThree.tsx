import { Clock, Play } from "lucide-react";
import { Link } from "react-router-dom";
import GlassCard from "../ui/glass-card";

// Slide layout that strictly follows the silver ratio (√2) for md+ screens.
// We inject a small responsive rule so mobile keeps a stacked layout while
// wider viewports use grid columns = √2 : 1 (left : right).
const SlideThree = () => {
	const silver = Math.SQRT2.toFixed(6); // precise silver ratio (~1.414214)

	return (
		<>
			{/* responsive rule: on md+ set columns to (√2)fr and 1fr */}
			<style>{`@media (min-width: 768px) { .silver-grid { grid-template-columns: ${silver}fr 1fr; } }`}</style>

			<section className="min-h-screen snap-start flex items-center justify-center px-6 md:px-12 py-16">
				<div className="w-full max-w-7xl grid grid-cols-1 silver-grid gap-12 items-center">
					{/* Left: 主見出しとアクション（より荘厳に） */}
					<div className="flex flex-col items-start gap-8">
						<h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-500 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
							Welcome to the spotlight
						</h2>

						<p className="max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">
							このページはヒーローらしさを厳密に表現しました。余白と比率を整え、視線を主見出しに導くことで
							落ち着いた荘厳さを実現しています。下の操作でサイトを深く探索してください。
						</p>

						<div className="flex gap-4 mt-4">
							<Link
								to="/how-to-play"
								className="inline-flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl transition shadow-sm"
								aria-label="How to play"
							>
								<Play
									className="w-5 h-5 text-cyan-300"
									role="img"
									aria-hidden={false}
								/>
								How to play
							</Link>

							<Link
								to="/history"
								className="inline-flex items-center gap-3 px-6 py-4 border border-white/10 hover:bg-white/5 text-white rounded-xl transition"
								aria-label="History"
							>
								<Clock
									className="w-5 h-5 text-slate-200"
									role="img"
									aria-hidden={false}
								/>
								History
							</Link>
						</div>
					</div>

					{/* Right: 特徴カード群（余白を確保して上品に表示） */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
						<GlassCard
							title="Quick Start"
							description={
								"初めての方はここから。基本のフローをわかりやすく案内します。"
							}
							className="min-h-56 p-8"
						/>

						<GlassCard
							title="Community"
							description={"国際的な取り組みや最近のハイライトをチェック。"}
							className="min-h-56 p-8"
						/>

						<GlassCard
							title="Rules"
							description={
								"ルールや進行を丁寧に整理。学びやすく設計しています。"
							}
							className="min-h-56 p-8"
						/>

						<GlassCard
							title="Get involved"
							description={"プレイの始め方や参加方法の導線を用意。"}
							footer={
								<Link
									to="/how-to-play"
									className="text-sm text-cyan-300 hover:underline"
								>
									Start guide →
								</Link>
							}
							className="min-h-56 p-8"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default SlideThree;
