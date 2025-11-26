import { motion } from "motion/react";
import highlightImage from "@/assets/special/test-alt3.png";
import { FabricPattern, NoiseTexture } from "./shared-effects";

export const FooterCTASection = () => {
	return (
		<section className="relative min-h-screen flex items-center bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200 dark:from-stone-800 dark:via-stone-850 dark:to-stone-800 overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
			<FabricPattern />
			<NoiseTexture />

			{/* 背景の大きなグラデーション */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent dark:from-rose-400/15" />
				<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent dark:from-indigo-400/15" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent dark:from-amber-400/20" />
			</div>

			{/* 浮遊する古代シンボル */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				{["𓆈", "𓃭", "𓃵", "𓋹", "𓂀", "𓆣"].map((symbol, idx) => (
					<motion.div
						key={`symbol-${symbol}`}
						className="absolute text-5xl sm:text-6xl md:text-7xl text-stone-400 dark:text-stone-600 opacity-10 dark:opacity-20"
						style={{
							left: `${10 + idx * 15}%`,
							top: `${15 + (idx % 3) * 25}%`,
							filter: "blur(1px)",
						}}
						animate={{
							y: [0, -30, 0],
							rotate: [0, 15, -15, 0],
							scale: [1, 1.1, 1],
						}}
						transition={{
							duration: 8 + idx * 2,
							repeat: Number.POSITIVE_INFINITY,
							delay: idx * 0.5,
							ease: "easeInOut",
						}}
					>
						{symbol}
					</motion.div>
				))}
			</div>

			<div className="relative z-10 max-w-6xl mx-auto w-full">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
					className="relative"
				>
					{/* 背景の放射光 */}
					<motion.div
						className="absolute -inset-12 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,_var(--tw-gradient-stops))] from-amber-500/30 via-rose-500/15 to-transparent dark:from-amber-400/40 dark:via-rose-400/20 dark:to-transparent blur-3xl"
						animate={{
							scale: [1, 1.1, 1],
							opacity: [0.5, 0.8, 0.5],
						}}
						transition={{
							duration: 4,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
					/>

					<div className="relative bg-gradient-to-br from-stone-300/95 via-stone-200/95 to-stone-300/95 dark:from-stone-700/95 dark:via-stone-750/95 dark:to-stone-800/95 border-4 border-amber-500/70 dark:border-amber-400/70 shadow-2xl p-8 sm:p-10 md:p-12 lg:p-14 backdrop-blur-sm">
						{/* 内側のテクスチャ */}
						<div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.1)_0%,_transparent_50%)]" />

						{/* 角の装飾 */}
						<div className="absolute top-3 left-3 w-8 h-8 border-t-3 border-l-3 border-amber-400 dark:border-amber-300" />
						<div className="absolute top-3 right-3 w-8 h-8 border-t-3 border-r-3 border-amber-400 dark:border-amber-300" />
						<div className="absolute bottom-3 left-3 w-8 h-8 border-b-3 border-l-3 border-amber-400 dark:border-amber-300" />
						<div className="absolute bottom-3 right-3 w-8 h-8 border-b-3 border-r-3 border-amber-400 dark:border-amber-300" />

						{/* 追加の装飾ライン */}
						<div className="absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
						<div className="absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

						{/* メイン動画サムネイル */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.8,
								delay: 0.2,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="relative group cursor-pointer mb-10 sm:mb-12"
						>
							<div className="relative aspect-video overflow-hidden border-4 border-stone-600 dark:border-stone-500 shadow-2xl rounded-lg">
								<motion.img
									src={highlightImage}
									alt="奇譚ヘルカバディ 予告編"
									className="w-full h-full object-cover"
									whileHover={{ scale: 1.08 }}
									transition={{ duration: 0.6, ease: "easeOut" }}
								/>

								<motion.div
									className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"
									whileHover={{ opacity: 0.7 }}
									transition={{ duration: 0.4 }}
								/>

								{/* 再生ボタン */}
								<div className="absolute inset-0 flex items-center justify-center">
									<motion.div
										whileHover={{ scale: 1.15 }}
										whileTap={{ scale: 0.95 }}
										transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
									>
										<motion.div
											className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-300 dark:to-amber-500 flex items-center justify-center shadow-2xl group-hover:from-amber-300 group-hover:to-amber-500 dark:group-hover:from-amber-200 dark:group-hover:to-amber-400 transition-all duration-300"
											animate={{
												boxShadow: [
													"0 0 40px rgba(245, 158, 11, 0.5), 0 0 80px rgba(245, 158, 11, 0.3)",
													"0 0 60px rgba(245, 158, 11, 0.8), 0 0 120px rgba(245, 158, 11, 0.5)",
													"0 0 40px rgba(245, 158, 11, 0.5), 0 0 80px rgba(245, 158, 11, 0.3)",
												],
											}}
											transition={{
												duration: 2.5,
												repeat: Number.POSITIVE_INFINITY,
												ease: "easeInOut",
											}}
										>
											<div className="absolute inset-2 rounded-full border-2 border-white/30" />
											<svg
												className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-stone-900 ml-2 drop-shadow-lg"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-label="再生"
											>
												<title>再生</title>
												<path d="M8 5v14l11-7z" />
											</svg>
										</motion.div>
									</motion.div>
								</div>

								{/* 角の装飾 */}
								<div className="absolute top-3 left-3 w-8 h-8 border-t-3 border-l-3 border-amber-300 dark:border-amber-200" />
								<div className="absolute top-3 right-3 w-8 h-8 border-t-3 border-r-3 border-amber-300 dark:border-amber-200" />
								<div className="absolute bottom-3 left-3 w-8 h-8 border-b-3 border-l-3 border-amber-300 dark:border-amber-200" />
								<div className="absolute bottom-3 right-3 w-8 h-8 border-b-3 border-r-3 border-amber-300 dark:border-amber-200" />

								<div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
									<motion.p
										className="text-xl sm:text-2xl md:text-3xl font-black text-white drop-shadow-2xl"
										style={{ fontFamily: "var(--font-dramatic)" }}
										whileHover={{ scale: 1.05 }}
									>
										予告編を見る
									</motion.p>
								</div>
							</div>

							{/* ホバー時の光沢エフェクト */}
							<motion.div
								className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg overflow-hidden"
								style={{
									background:
										"linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
								}}
								animate={{ x: ["-100%", "200%"] }}
								transition={{
									duration: 2.5,
									repeat: Number.POSITIVE_INFINITY,
									ease: "linear",
								}}
							/>
						</motion.div>

						{/* 特徴タグ */}
						<motion.div
							className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
						>
							{[
								{ text: "本格3DCG", icon: "𓂀", color: "rose" },
								{ text: "本格コメディ", icon: "𓆣", color: "indigo" },
								{ text: "本格カバディ", icon: "𓃰", color: "amber" },
							].map((item, idx) => (
								<motion.div
									key={item.text}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: 0.5 + idx * 0.1 }}
									whileHover={{ scale: 1.1, y: -4 }}
									whileTap={{ scale: 0.95 }}
									className={`group relative flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-br ${
										item.color === "rose"
											? "from-rose-100 to-rose-200 dark:from-rose-900/80 dark:to-rose-800/80 border-rose-400/60"
											: item.color === "indigo"
												? "from-indigo-100 to-indigo-200 dark:from-indigo-900/80 dark:to-indigo-800/80 border-indigo-400/60"
												: "from-amber-100 to-amber-200 dark:from-amber-900/80 dark:to-amber-800/80 border-amber-400/60"
									} border-2 shadow-lg rounded-lg cursor-pointer transition-all duration-300`}
								>
									<motion.span
										className="text-xl sm:text-2xl"
										animate={{ rotate: [0, 10, -10, 0] }}
										transition={{
											duration: 2,
											repeat: Number.POSITIVE_INFINITY,
											delay: idx * 0.2,
										}}
									>
										{item.icon}
									</motion.span>
									<span className="text-xs sm:text-sm font-black text-stone-800 dark:text-stone-100 tracking-wide">
										{item.text}
									</span>
									<div
										className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg ${
											item.color === "rose"
												? "shadow-lg shadow-rose-500/50"
												: item.color === "indigo"
													? "shadow-lg shadow-indigo-500/50"
													: "shadow-lg shadow-amber-500/50"
										}`}
									/>
								</motion.div>
							))}
						</motion.div>
					</div>
				</motion.div>
			</div>
			{/* 下部の糸の装飾 */}
			<div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 pointer-events-none overflow-hidden">
				{[3, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 97].map((xPos, i) => (
					<motion.div
						key={`bottom-thread-${xPos}`}
						className="absolute w-[1.5px] origin-bottom"
						style={{
							left: `${xPos}%`,
							bottom: 0,
							height: `${40 + (i % 4) * 15}px`,
							background:
								"linear-gradient(to top, rgba(120, 113, 108, 0.3), rgba(120, 113, 108, 0.15), transparent)",
							filter: "blur(0.5px)",
						}}
						animate={{
							rotateZ: [-3, 3, -3],
							opacity: [0.4, 0.6, 0.4],
						}}
						transition={{
							duration: 4 + i * 0.3,
							repeat: Number.POSITIVE_INFINITY,
							delay: i * 0.2,
							ease: "easeInOut",
						}}
					/>
				))}
			</div>
		</section>
	);
};
