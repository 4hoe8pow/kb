import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import DecryptedText from "@/components/DecryptedText";
import {
	BackgroundSymbols,
	CornerDecorations,
	DiagonalStitchLines,
	FabricPattern,
	FloatingThread,
	Hanko,
	LightParticle,
	MultiLayerGlow,
	NoiseTexture,
	RadialLightRays,
	RotatingRings,
	WashiTextureOverlay,
} from "./shared-effects";

export const WorldviewSection = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const symbolOpacity = useTransform(
		scrollYProgress,
		[0, 0.3, 0.7, 1],
		[0, 1, 1, 0],
	);
	const documentScale = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[0.85, 1, 1],
	);

	return (
		<section
			ref={sectionRef}
			className="relative min-h-screen flex items-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 overflow-hidden"
		>
			<FabricPattern />
			<NoiseTexture />

			{/* 浮遊する糸 */}
			<FloatingThread delay={0} x="15%" />
			<FloatingThread delay={0.8} x="27%" />
			<FloatingThread delay={1.6} x="39%" />
			<FloatingThread delay={2.4} x="51%" />
			<FloatingThread delay={3.2} x="63%" />
			<FloatingThread delay={4.0} x="75%" />
			<FloatingThread delay={4.8} x="87%" />
			<FloatingThread delay={5.6} x="99%" />

			{/* 光の粒子 */}
			<LightParticle delay={0} x="10%" duration={8} />
			<LightParticle delay={1.2} x="18%" duration={8.5} />
			<LightParticle delay={2.4} x="26%" duration={9} />
			<LightParticle delay={3.6} x="34%" duration={9.5} />
			<LightParticle delay={4.8} x="42%" duration={10} />
			<LightParticle delay={6.0} x="50%" duration={10.5} />
			<LightParticle delay={7.2} x="58%" duration={11} />
			<LightParticle delay={8.4} x="66%" duration={11.5} />
			<LightParticle delay={9.6} x="74%" duration={12} />
			<LightParticle delay={10.8} x="82%" duration={12.5} />
			<LightParticle delay={12.0} x="90%" duration={13} />
			<LightParticle delay={13.2} x="98%" duration={13.5} />

			<DiagonalStitchLines />
			<BackgroundSymbols opacity={symbolOpacity} />
			<RadialLightRays />

			<div className="max-w-6xl mx-auto text-center relative z-10 w-full">
				{/* 古代シンボル - 強化版 */}
				<motion.div
					initial={{ opacity: 0, scale: 0.5, y: 80 }}
					whileInView={{ opacity: 1, scale: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
				>
					<div className="relative inline-block mb-16 sm:mb-20">
						<MultiLayerGlow />

						{/* シンボル本体 */}
						<motion.div
							className="relative text-8xl sm:text-9xl md:text-[12rem] text-rose-300 drop-shadow-[0_0_40px_rgba(251,113,133,0.8)]"
							animate={{
								scale: [1, 1.08, 1],
								rotate: [0, 8, 0, -8, 0],
								filter: [
									"drop-shadow(0 0 40px rgba(251,113,133,0.8))",
									"drop-shadow(0 0 60px rgba(251,191,36,0.9))",
									"drop-shadow(0 0 40px rgba(251,113,133,0.8))",
								],
							}}
							transition={{
								duration: 7,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}}
						>
							𓃭
						</motion.div>

						<RotatingRings />
					</div>
				</motion.div>

				{/* 導入テキスト - 強化版 */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1.2, delay: 0.3 }}
				>
					<div className="relative inline-block mb-8 sm:mb-16">
						<div className="absolute -inset-8 bg-gradient-to-r from-stone-100/10 via-rose-100/15 to-stone-100/10 blur-3xl" />
						<p className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-4xl mx-auto text-stone-100 font-bold px-4 font-body [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
							スーパー「ムーシーズ」で働く7名の従業員たち。
							<br />
							<span className="text-rose-300 drop-shadow-[0_0_20px_rgba(251,113,133,0.6)]">
								ある朝、店長から辞令が発表された。
							</span>
						</p>
					</div>
				</motion.div>
				{/* 辞令文書 */}
				<motion.div
					initial={{ opacity: 0, scale: 0.85, y: 50, rotateX: 15 }}
					whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
					style={{ scale: documentScale }}
					className="w-full px-4 sm:px-6"
				>
					<div className="relative mx-auto perspective-1000 w-full max-w-[min(90vw,210mm)]">
						{/* 外側の光のオーラ */}
						<motion.div
							className="absolute -inset-8 bg-gradient-to-br from-amber-500/30 via-rose-500/30 to-amber-500/30 blur-[100px]"
							animate={{
								scale: [1, 1.15, 1],
								opacity: [0.3, 0.5, 0.3],
							}}
							transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
						/>

						{/* 辞令文書本体 - A4比率 (1:1.414) */}
						<motion.div
							className="relative bg-gradient-to-br from-stone-50 via-amber-50/95 to-stone-50 shadow-[0_8px_16px_rgba(0,0,0,0.2),0_20px_40px_rgba(0,0,0,0.3),0_0_80px_rgba(251,191,36,0.2)] border-2 sm:border-4 border-amber-200/50 w-full flex flex-col"
							style={{
								aspectRatio: "1 / 1.414",
								padding: "clamp(30px, 7%, 50px) clamp(24px, 8%, 40px)",
								boxSizing: "border-box",
							}}
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<WashiTextureOverlay />
							<CornerDecorations />

							{/* タイトル「辞令」 */}
							<motion.h2
								className="font-serif font-bold text-center text-stone-900 relative [text-shadow:2px_2px_0_rgba(251,191,36,0.2)]"
								style={{
									fontSize: "clamp(2.5rem, 9vw, 52pt)",
									marginBottom: "clamp(40px, 12%, 60px)",
								}}
								initial={{ opacity: 0, y: -20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.7 }}
							>
								<span className="inline-block tracking-[0.6em] mr-[0.6em]">
									辞
								</span>
								<span className="inline-block tracking-[0.6em]">令</span>
							</motion.h2>

							{/* 本文 */}
							<div className="text-stone-900 flex-1 flex flex-col justify-between">
								<div className="space-y-[clamp(20px,5%,30px)]">
									<motion.p
										className="font-serif leading-relaxed"
										style={{
											fontSize: "clamp(1.1rem, 3.5vw, 20pt)",
										}}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.8, delay: 0.9 }}
									>
										社員
										<span className="inline-block ml-[1em]">みんな</span>
									</motion.p>

									<motion.p
										className="font-serif leading-relaxed"
										style={{
											fontSize: "clamp(1rem, 3vw, 18pt)",
										}}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.8, delay: 1.1 }}
									>
										2026年6月10日付をもって
										<br />
										以下のとおり命ず
									</motion.p>

									{/* カバディ部の行 */}
									<div style={{ marginTop: "clamp(30px, 8%, 50px)" }}>
										<DecryptedText
											text="異動 カバディ事業部 配属"
											animateOn="view"
											sequential
											speed={40}
											className="font-serif leading-relaxed text-stone-900 transition-all duration-300"
											style={{ fontSize: "clamp(1.1rem, 3.5vw, 20pt)" }}
											parentClassName="block text-center"
											encryptedClassName="font-serif leading-relaxed text-stone-400/60 transition-all duration-300"
										/>
									</div>
								</div>

								{/* 署名 */}
								<motion.div
									className="text-right"
									style={{ marginTop: "clamp(40px, 10%, 60px)" }}
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 1.5 }}
								>
									<p
										className="font-serif font-bold"
										style={{
											fontSize: "clamp(1rem, 3vw, 18pt)",
											marginBottom: "clamp(8px, 2%, 12px)",
										}}
									>
										株式会社ムーシーズ
									</p>
									<p
										className="font-serif"
										style={{ fontSize: "clamp(0.9rem, 2.5vw, 16pt)" }}
									>
										代表取締役社長
										<Hanko text="蟲酸ハシル" className="ml-[1em]" />
									</p>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
