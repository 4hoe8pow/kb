import { motion } from "motion/react";
import heroBgImage from "@/assets/special/test-alt2.png";
import Shuffle from "@/components/Shuffle";
import { FloatingThread } from "./shared-effects";

export const HeroSection = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* 背景画像 */}
			<div className="absolute inset-0">
				<div className="absolute inset-0">
					<img
						src={heroBgImage}
						alt=""
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-stone-50/85 via-stone-100/70 to-stone-200/90 dark:from-stone-950/90 dark:via-stone-900/75 dark:to-stone-800/95" />
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.15)_100%)] dark:bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
				</div>
			</div>

			{/* 垂れ下がる糸 */}
			<div className="absolute inset-x-0 top-0 h-56 pointer-events-none overflow-hidden">
				{[5, 12, 20, 28, 35, 43, 50, 58, 65, 73, 80, 88, 95].map((xPos, i) => (
					<FloatingThread key={xPos} x={`${xPos}%`} delay={i * 0.3} />
				))}
			</div>

			{/* エレベーター操作パネル - 背景として配置 */}
			<motion.div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xs"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
			>
				<div className="relative">
					{/* エレベーター操作パネル - ニューモーフィズム */}
					<div className="relative bg-stone-200 dark:bg-stone-800 rounded-3xl shadow-[8px_8px_16px_rgba(0,0,0,0.15),-8px_-8px_16px_rgba(255,255,255,0.7)] dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)] p-5 sm:p-6">
						{/* 階数ボタン */}
						<div className="flex flex-col items-center gap-2 mb-4">
							{["3", "2", "1", "B1", "H444"].map((floor, index) => {
								const isActive = floor === "H444";
								return (
									<motion.button
										key={floor}
										type="button"
										className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full font-bold text-sm sm:text-base font-mono transition-all ${
											isActive
												? "bg-rose-500 dark:bg-rose-600 text-white shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.2)] dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.1)]"
												: "bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_rgba(255,255,255,0.7)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]"
										}`}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.5 + index * 0.05 }}
										whileHover={{
											scale: 1.02,
											boxShadow: isActive
												? "inset 4px 4px 8px rgba(0,0,0,0.3), inset -4px -4px 8px rgba(255,255,255,0.2)"
												: "3px 3px 6px rgba(0,0,0,0.15), -3px -3px 6px rgba(255,255,255,0.7)",
										}}
										whileTap={{
											scale: 0.98,
											boxShadow: isActive
												? "inset 4px 4px 8px rgba(0,0,0,0.3), inset -4px -4px 8px rgba(255,255,255,0.2)"
												: "inset 4px 4px 8px rgba(0,0,0,0.2), inset -4px -4px 8px rgba(255,255,255,0.7)",
										}}
									>
										{isActive && (
											<motion.div
												className="absolute inset-0 rounded-full"
												animate={{
													boxShadow: [
														"0 0 15px rgba(244, 63, 94, 0.5)",
														"0 0 25px rgba(244, 63, 94, 0.7)",
														"0 0 15px rgba(244, 63, 94, 0.5)",
													],
												}}
												transition={{
													duration: 2,
													repeat: Number.POSITIVE_INFINITY,
													ease: "easeInOut",
												}}
											/>
										)}
										<span className="relative z-10">{floor}</span>
									</motion.button>
								);
							})}
						</div>

						{/* 区切り線 - ニューモーフィズム */}
						<div className="w-full h-0.5 rounded-full bg-stone-200 dark:bg-stone-800 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.15),inset_-2px_-2px_4px_rgba(255,255,255,0.7)] dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_rgba(255,255,255,0.05)] mb-4" />

						{/* 開閉・カバボタン */}
						<div className="flex gap-2 justify-center">
							{/* 開ボタン */}
							<motion.button
								type="button"
								className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 font-bold text-sm sm:text-base shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_rgba(255,255,255,0.7)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)] flex items-center justify-center"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.9 }}
							>
								<span>開</span>
							</motion.button>

							{/* 閉ボタン */}
							<motion.button
								type="button"
								className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 font-bold text-sm sm:text-base shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_rgba(255,255,255,0.7)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)] flex items-center justify-center"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.95 }}
							>
								<span>閉</span>
							</motion.button>

							{/* カバボタン */}
							<motion.button
								type="button"
								className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 font-bold text-sm sm:text-base shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_rgba(255,255,255,0.7)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)] flex items-center justify-center"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1 }}
							>
								<motion.span
									animate={{
										scale: [1, 1.05, 1],
									}}
									transition={{
										duration: 1.5,
										repeat: Number.POSITIVE_INFINITY,
										ease: "easeInOut",
									}}
								>
									カバディ
								</motion.span>
							</motion.button>
						</div>
					</div>
				</div>
			</motion.div>

			{/* タイトルコンテンツ - パネルの上に重ねる */}
			<div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pointer-events-none ">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
				>
					{/* タイトル装飾 */}
					<motion.div
						className="mb-6 sm:mb-8 "
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
					>
						<div className="inline-block relative">
							<motion.div
								className="absolute -inset-4 bg-gradient-to-r from-rose-500/20 via-amber-500/20 to-indigo-500/20 dark:from-rose-400/30 dark:via-amber-400/30 dark:to-indigo-400/30 blur-2xl"
								animate={{
									scale: [1, 1.1, 1],
									opacity: [0.3, 0.5, 0.3],
								}}
								transition={{
									duration: 4,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
								}}
							/>
							<Shuffle
								text="奇譚ヘルカバディ"
								tag="h1"
								className="drop-shadow-2xl [text-shadow:0_4px_20px_rgba(0,0,0,0.3),0_0_40px_rgba(245,158,11,0.2)] text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-dramatic tracking-tighter select-none text-stone-900 dark:text-stone-50"
								shuffleTimes={4}
								duration={0.5}
								stagger={0.05}
								scrambleCharset="奇譚地獄社畜責任カバディ"
								threshold={0.3}
							/>
						</div>
					</motion.div>
					<motion.div
						className="relative inline-block"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 1 }}
					>
						<p className="relative font-hard text-lg sm:text-xl md:text-2xl tracking-[0.3em] text-stone-700 dark:text-stone-300 py-2">
							THE HELL KABADDI TALES
						</p>
					</motion.div>
				</motion.div>
			</div>

			{/* スクロール誘導 */}
			<motion.div
				className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 z-20"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.5, duration: 1 }}
			>
				<motion.div
					animate={{ y: [0, 12, 0] }}
					transition={{
						duration: 2.5,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
					className="flex flex-col items-center gap-2"
				>
					<p className="text-xs sm:text-sm font-medium text-stone-600 dark:text-stone-400 tracking-wider mb-1">
						SCROLL
					</p>
				</motion.div>
			</motion.div>
		</section>
	);
};
