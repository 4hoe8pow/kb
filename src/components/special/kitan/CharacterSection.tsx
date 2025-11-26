import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { allCharacters } from "@/components/special/kitan/all-charcter";
import { companyColors } from "./company-colors";
import { FabricPattern, NoiseTexture } from "./shared-effects";

export const CharacterSection = () => {
	const [hoveredChar, setHoveredChar] = useState<number | null>(null);

	return (
		<section className="relative bg-gradient-to-br from-stone-50 via-stone-100 to-stone-50 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 overflow-hidden">
			<FabricPattern />
			<NoiseTexture />

			{/* 背景の装飾 */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-10 w-64 h-64 bg-rose-500/5 dark:bg-rose-400/10 rounded-full blur-3xl" />
				<div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-400/10 rounded-full blur-3xl" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 dark:bg-amber-400/10 rounded-full blur-3xl" />
			</div>

			<div className="max-w-7xl mx-auto relative z-10 w-full">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
				>
					<div className="text-center mb-12 sm:mb-16">
						<div className="relative inline-block">
							<motion.div
								className="absolute -inset-8 bg-gradient-to-r from-rose-500/20 via-amber-500/20 to-indigo-500/20 dark:from-rose-400/30 dark:via-amber-400/30 dark:to-indigo-400/30 blur-3xl"
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
							<h2
								className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 dark:text-stone-50 mb-4 sm:mb-6"
								style={{ fontFamily: "var(--font-dramatic)" }}
							>
								<span className="text-rose-600 dark:text-rose-300 drop-shadow-lg">
									地獄
								</span>
								<span className="mx-2 sm:mx-3">に落ちた</span>
								<span className="text-amber-600 dark:text-amber-300 drop-shadow-lg">
									登場人物
								</span>
							</h2>
						</div>
						<motion.p
							className="text-base sm:text-lg md:text-xl text-stone-600 dark:text-stone-300 font-medium"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							全
							<span className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 mx-1">
								21
							</span>
							名の個性豊かなキャラクターたち
						</motion.p>
					</div>
				</motion.div>

				{/* 会社別セクション */}
				{(["スーパーむしず", "みょうり商店", "ハヌマン酒造"] as const).map(
					(companyName, companyIdx) => {
						const companyChars = allCharacters.filter(
							(c) => c.company === companyName,
						);
						const colors = companyColors[companyName];

						return (
							<motion.div
								key={companyName}
								className="mb-16 sm:mb-20"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.8, delay: companyIdx * 0.1 }}
							>
								{/* 会社名ヘッダー */}
								<div className="relative mb-8 sm:mb-10">
									<motion.div
										className={`absolute -inset-2 ${colors.glowColor} blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}
									/>
									<div className="relative flex items-center gap-4">
										<div
											className={`flex-shrink-0 w-1.5 h-16 sm:h-20 bg-gradient-to-b ${colors.bgGradient.replace("from-", "from-").replace("to-", "to-")} rounded-full`}
										/>
										<div>
											<h3
												className={`text-2xl sm:text-3xl md:text-4xl font-black ${colors.colorClass} tracking-tight`}
												style={{ fontFamily: "var(--font-dramatic)" }}
											>
												{companyName}
											</h3>
											<p className="text-sm sm:text-base text-stone-500 dark:text-stone-400 font-medium mt-1">
												{colors.description}
											</p>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
									{companyChars.map((char, i) => (
										<motion.div
											key={char.name}
											initial={{ opacity: 0, y: 40, scale: 0.9 }}
											whileInView={{ opacity: 1, y: 0, scale: 1 }}
											viewport={{ once: true, margin: "-50px" }}
											transition={{
												duration: 0.5,
												delay: i * 0.05,
												ease: [0.22, 1, 0.36, 1],
											}}
										>
											<motion.div
												className="group relative cursor-pointer overflow-hidden aspect-[3/4] rounded-lg shadow-lg"
												onHoverStart={() =>
													setHoveredChar(allCharacters.indexOf(char))
												}
												onHoverEnd={() => setHoveredChar(null)}
												onClick={() => {
													const charIndex = allCharacters.indexOf(char);
													setHoveredChar(
														hoveredChar === charIndex ? null : charIndex,
													);
												}}
												whileHover={{
													y: -8,
													scale: 1.03,
													transition: {
														duration: 0.3,
														ease: [0.22, 1, 0.36, 1],
													},
												}}
												whileTap={{ scale: 0.98 }}
											>
												{/* キャラクター画像 */}
												<div className="absolute inset-0 overflow-hidden">
													<motion.img
														src={char.imagePath}
														alt={char.name}
														className="w-full h-full object-cover"
														whileHover={{ scale: 1.15 }}
														transition={{ duration: 0.6, ease: "easeOut" }}
													/>
												</div>

												{/* グラデーションオーバーレイ */}
												<motion.div
													className={`absolute inset-0 bg-gradient-to-t ${colors.bgGradient} opacity-60`}
													whileHover={{ opacity: 0.75 }}
													transition={{ duration: 0.3 }}
												/>

												{/* ホバー時のグロー効果 */}
												<motion.div
													className={`absolute inset-0 ${colors.glowColor} opacity-0`}
													whileHover={{ opacity: 0.3 }}
													transition={{ duration: 0.3 }}
												/>

												{/* 左上のシンボル */}
												<motion.div
													className="absolute top-3 left-3 text-3xl sm:text-4xl drop-shadow-2xl"
													style={{
														filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
													}}
													animate={{
														rotateY:
															hoveredChar === allCharacters.indexOf(char)
																? 360
																: 0,
														scale:
															hoveredChar === allCharacters.indexOf(char)
																? 1.2
																: 1,
													}}
													transition={{ duration: 0.6, ease: "easeOut" }}
												>
													{char.symbol}
												</motion.div>

												{/* MBTIバッジ */}
												<motion.div
													className={`absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm text-xs sm:text-sm font-mono font-bold text-white rounded border ${colors.borderClass}`}
													whileHover={{
														scale: 1.1,
														backgroundColor: "rgba(0,0,0,0.85)",
													}}
												>
													{char.mbti}
												</motion.div>

												{/* 下部のテキストオーバーレイ */}
												<div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
													<motion.h4
														className="text-base sm:text-lg font-black text-white drop-shadow-2xl leading-tight mb-1.5"
														style={{ fontFamily: "var(--font-dramatic)" }}
														whileHover={{ scale: 1.05 }}
													>
														{char.name}
													</motion.h4>
													<p className="text-xs sm:text-sm text-white/90 drop-shadow-lg font-medium line-clamp-1">
														{char.dept}
													</p>

													{/* ホバー時の詳細 */}
													<AnimatePresence>
														{hoveredChar === allCharacters.indexOf(char) && (
															<motion.div
																initial={{ opacity: 0, y: 10, height: 0 }}
																animate={{ opacity: 1, y: 0, height: "auto" }}
																exit={{ opacity: 0, y: 10, height: 0 }}
																transition={{
																	duration: 0.25,
																	ease: [0.22, 1, 0.36, 1],
																}}
																className="overflow-hidden"
															>
																<div
																	className={`mt-3 pt-3 border-t ${colors.borderClass}`}
																>
																	<p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
																		{char.comment}
																	</p>
																</div>
															</motion.div>
														)}
													</AnimatePresence>
												</div>

												{/* ホバー時のボーダー */}
												<motion.div
													className={`absolute inset-0 border-3 pointer-events-none rounded-lg ${
														hoveredChar === allCharacters.indexOf(char)
															? colors.accentColor === "rose"
																? "border-rose-400 shadow-lg shadow-rose-500/50"
																: colors.accentColor === "indigo"
																	? "border-indigo-400 shadow-lg shadow-indigo-500/50"
																	: "border-amber-400 shadow-lg shadow-amber-500/50"
															: "border-transparent"
													}`}
													initial={{ opacity: 0 }}
													animate={{
														opacity:
															hoveredChar === allCharacters.indexOf(char)
																? 1
																: 0,
													}}
													transition={{ duration: 0.2 }}
												/>

												{/* 角の装飾 */}
												{hoveredChar === allCharacters.indexOf(char) && (
													<>
														<motion.div
															className={`absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 ${
																colors.accentColor === "rose"
																	? "border-rose-300"
																	: colors.accentColor === "indigo"
																		? "border-indigo-300"
																		: "border-amber-300"
															}`}
															initial={{ opacity: 0, scale: 0 }}
															animate={{ opacity: 1, scale: 1 }}
															transition={{ duration: 0.2 }}
														/>
														<motion.div
															className={`absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 ${
																colors.accentColor === "rose"
																	? "border-rose-300"
																	: colors.accentColor === "indigo"
																		? "border-indigo-300"
																		: "border-amber-300"
															}`}
															initial={{ opacity: 0, scale: 0 }}
															animate={{ opacity: 1, scale: 1 }}
															transition={{ duration: 0.2, delay: 0.05 }}
														/>
														<motion.div
															className={`absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 ${
																colors.accentColor === "rose"
																	? "border-rose-300"
																	: colors.accentColor === "indigo"
																		? "border-indigo-300"
																		: "border-amber-300"
															}`}
															initial={{ opacity: 0, scale: 0 }}
															animate={{ opacity: 1, scale: 1 }}
															transition={{ duration: 0.2, delay: 0.1 }}
														/>
														<motion.div
															className={`absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 ${
																colors.accentColor === "rose"
																	? "border-rose-300"
																	: colors.accentColor === "indigo"
																		? "border-indigo-300"
																		: "border-amber-300"
															}`}
															initial={{ opacity: 0, scale: 0 }}
															animate={{ opacity: 1, scale: 1 }}
															transition={{ duration: 0.2, delay: 0.15 }}
														/>
													</>
												)}
											</motion.div>
										</motion.div>
									))}
								</div>
							</motion.div>
						);
					},
				)}
			</div>
		</section>
	);
};
