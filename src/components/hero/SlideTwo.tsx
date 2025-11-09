import { Clock, Newspaper, Play } from "lucide-react";
import TextType from "../TextType";
import ActionButton from "./ActionButton";
import GlassCard from "./glass-card";

// Slide layout that strictly follows the silver ratio (√2) for md+ screens.
// We inject a small responsive rule so mobile keeps a stacked layout while
// wider viewports use grid columns = √2 : 1 (left : right).
const SlideTwo = () => {
	const silver = Math.SQRT2.toFixed(6); // precise silver ratio (~1.414214)

	// 白銀比ベースの余白システム: 基準値 24px から階層的に展開
	const base = 24;
	const spacing = {
		xs: (base / Math.SQRT2).toFixed(2), // 24 / √2 ≈ 16.97px
		sm: base.toFixed(2), // 24px
		md: (base * Math.SQRT2).toFixed(2), // 24 * √2 ≈ 33.94px
		lg: (base * Math.SQRT2 * Math.SQRT2).toFixed(2), // 24 * 2 = 48px
		xl: (base * Math.SQRT2 * Math.SQRT2 * Math.SQRT2).toFixed(2), // 24 * 2√2 ≈ 67.88px
	};

	return (
		<>
			{/* responsive rule: on md+ set columns to (√2)fr and 1fr */}
			<style>{`
				@media (min-width: 768px) { 
					.silver-grid { 
						grid-template-columns: ${silver}fr 1fr; 
					} 
				}
				/* モバイル: sm間隔、デスクトップ: xl間隔 */
				.silver-gap { gap: ${spacing.sm}px; }
				@media (min-width: 768px) { .silver-gap { gap: ${spacing.xl}px; } }
				
				/* 左カラム内部の要素間: モバイル sm、デスクトップ lg */
				.silver-gap-inner { gap: ${spacing.sm}px; }
				@media (min-width: 768px) { .silver-gap-inner { gap: ${spacing.lg}px; } }
				
				/* カード間: モバイル xs、デスクトップ md */
				.silver-gap-cards { gap: ${spacing.xs}px; }
				@media (min-width: 768px) { .silver-gap-cards { gap: ${spacing.md}px; } }
			`}</style>

			<section className="min-h-screen snap-start flex items-center justify-center px-6 md:px-12 lg:px-24 xl:px-32 py-16">
				<div className="w-full grid grid-cols-1 silver-grid silver-gap items-start">
					<div className="flex flex-col items-start silver-gap-inner">
						<h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-bland via-sirocco to-baltic-amber dark:from-safari dark:via-chanterelle dark:to-bland drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
							戦略性コンタクトスポーツ、カバディ
						</h2>

						<p className="max-w-2xl text-base md:text-lg text-chocolate-martini dark:text-cream-tan leading-relaxed">
							<TextType
								text={[
									"アジア競技大会正式種目。",
									"インドプロリーグの年間視聴者数4億人。",
									"鬼ごっこの駆け引きとラグビーの身体能力",
									"両方が同時に求められる唯一無二の競技です。",
								]}
								typingSpeed={81}
								pauseDuration={2900}
								showCursor={true}
								cursorCharacter={"・"}
								deletingSpeed={40}
							/>
						</p>

						<div className="flex flex-wrap silver-gap-cards mt-4">
							<ActionButton
								to="/how-to-play"
								icon={Play}
								text="カバディのやり方"
								primary
								ariaLabel="ルールを理解する"
							/>
							<ActionButton
								to="/history"
								icon={Clock}
								text="競技の背景を知る"
								ariaLabel="競技の背景を知る"
							/>
							<ActionButton
								to="/news"
								icon={Newspaper}
								text="KABADDI TIMES"
								ariaLabel="最新ニュース"
							/>
						</div>
					</div>

					{/* Right: 価値提案カード群 */}
					<div className="grid grid-cols-2 md:grid-cols-2 silver-gap-cards w-full self-stretch">
						<GlassCard
							title="認知負荷の高い競技設計"
							description={"7対7の限られた空間で、攻守が瞬時に入れ替わる。"}
						/>

						<GlassCard
							title="グローバル市場の拡大"
							description={"インドプロリーグの市場規模は年間約200億円。"}
						/>

						<GlassCard
							title="観戦者にも戦略が見える"
							description={"40分間で平均80回の攻守交代。"}
						/>

						<GlassCard
							title="最小限の設備投資"
							description={"13m×10mのコートのみ。特殊な用具は不要。"}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default SlideTwo;
