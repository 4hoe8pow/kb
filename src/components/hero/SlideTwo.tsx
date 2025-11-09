import { Clock, Newspaper, Play } from "lucide-react";
import TextType from "../TextType";
import ActionButton from "./ActionButton";
import GlassCard from "./glass-card";

// Slide layout that strictly follows the silver ratio (√2) for md+ screens.
// Mobile: stacked layout, Desktop: grid columns with √2 : 1 ratio (left : right).
// 白銀比ベースの余白: 17px(xs) / 24px(sm) / 34px(md) / 48px(lg) / 68px(xl)
const SlideTwo = () => {
	return (
		<section className="min-h-screen snap-start flex items-center justify-center px-4 md:px-12 lg:px-24 xl:px-32 py-16 bg-cannoli-cream dark:bg-transparent">
			<div className="w-full max-w-full grid grid-cols-1 md:grid-cols-[1.414fr_1fr] gap-6 md:gap-[68px] items-start">
				<div className="flex flex-col items-start gap-6 md:gap-12 min-w-0">
					<h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-chocolate-martini via-baltic-amber to-sirocco dark:from-safari dark:via-chanterelle dark:to-bland drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
						戦略性コンタクトスポーツ、カバディ
					</h2>

					<p className="w-full max-w-2xl text-base md:text-lg text-chocolate-martini dark:text-cream-tan leading-relaxed">
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

					<div className="flex flex-wrap gap-4 md:gap-[34px] mt-4">
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
				<div className="grid grid-cols-2 gap-4 md:gap-[34px] w-full self-stretch min-w-0">
					<GlassCard
						title="認知負荷の高い競技設計"
						description={"7対7の限られた空間で、攻守が瞬時に入れ替わる。"}
					/>

					<GlassCard
						title="グローバル市場の拡大"
						description={"インドプロリーグの市場規模は年間約200億円を突破。"}
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
	);
};

export default SlideTwo;
