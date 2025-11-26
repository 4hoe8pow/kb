import { motion } from "motion/react";

// 共有エフェクトコンポーネント

// 布の織り目パターン SVG
export const FabricPattern = () => (
	<svg
		className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.06] pointer-events-none mix-blend-overlay z-50"
		aria-hidden="true"
	>
		<title>Fabric weave pattern</title>
		<defs>
			<pattern id="weave" width="6" height="6" patternUnits="userSpaceOnUse">
				<path
					d="M0 0h3v3H0zM3 3h3v3H3z"
					className="fill-stone-700 dark:fill-stone-300"
				/>
				<circle
					cx="1.5"
					cy="1.5"
					r="0.5"
					className="fill-stone-600/50 dark:fill-stone-400/50"
				/>
				<circle
					cx="4.5"
					cy="4.5"
					r="0.5"
					className="fill-stone-600/50 dark:fill-stone-400/50"
				/>
			</pattern>
		</defs>
		<rect width="100%" height="100%" fill="url(#weave)" />
	</svg>
);

// ノイズテクスチャ
export const NoiseTexture = () => (
	<svg className="absolute inset-0 w-full h-full opacity-[0.015] dark:opacity-[0.025] pointer-events-none z-50">
		<title>Noise texture</title>
		<filter id="noise">
			<feTurbulence
				type="fractalNoise"
				baseFrequency="0.9"
				numOctaves="4"
				stitchTiles="stitch"
			/>
		</filter>
		<rect width="100%" height="100%" filter="url(#noise)" />
	</svg>
);

// 糸が揺れるアニメーション
export const FloatingThread = ({
	delay = 0,
	x = "50%",
}: {
	delay?: number;
	x?: string;
}) => (
	<motion.div
		className="absolute w-[1.5px] h-40 origin-top bg-gradient-to-b from-stone-600/40 via-stone-600/20 to-transparent blur-[0.5px] z-50"
		style={{
			left: x,
			top: 0,
		}}
		animate={{
			rotateZ: [-4, 4, -4],
			scaleY: [1, 1.15, 1],
			opacity: [0.6, 0.8, 0.6],
		}}
		transition={{
			duration: 5 + delay,
			repeat: Number.POSITIVE_INFINITY,
			delay,
			ease: "easeInOut",
		}}
	/>
);

// 光の粒子エフェクト
export const LightParticle = ({
	delay = 0,
	x = "50%",
	duration = 8,
}: {
	delay?: number;
	x?: string;
	duration?: number;
}) => (
	<motion.div
		className="absolute w-1 h-1 rounded-full bg-amber-400/40 dark:bg-amber-300/30 -top-[10px] z-50"
		style={{ left: x }}
		animate={{
			y: ["0vh", "100vh"],
			opacity: [0, 0.8, 0.8, 0],
			scale: [0, 1, 1, 0],
		}}
		transition={{
			duration,
			repeat: Number.POSITIVE_INFINITY,
			delay,
			ease: "linear",
		}}
	/>
);

// 斜めの布の縫い目ライン
export const DiagonalStitchLines = () => (
	<div className="absolute inset-0 pointer-events-none opacity-[0.12] z-50 [background-image:repeating-linear-gradient(45deg,transparent,transparent_50px,currentColor_50px,currentColor_51px),repeating-linear-gradient(-45deg,transparent,transparent_70px,currentColor_70px,currentColor_71px)]" />
);

// 背景の装飾的なシンボル
export const BackgroundSymbols = ({
	opacity,
}: {
	opacity: import("motion/react").MotionValue<number>;
}) => {
	const symbolData = [
		{ symbol: "𓃭", left: "10%", top: "20%", duration: 35 },
		{ symbol: "𓆈", left: "25%", top: "45%", duration: 43 },
		{ symbol: "𓃵", left: "40%", top: "20%", duration: 51 },
		{ symbol: "𓋹", left: "55%", top: "45%", duration: 59 },
		{ symbol: "𓃟", left: "70%", top: "20%", duration: 67 },
		{ symbol: "𓆣", left: "85%", top: "45%", duration: 75 },
	];

	return (
		<motion.div
			className="absolute inset-0 pointer-events-none overflow-hidden z-50"
			style={{ opacity }}
		>
			{symbolData.map((data) => (
				<motion.div
					key={`bg-symbol-${data.symbol}`}
					className="absolute text-[12rem] sm:text-[18rem] md:text-[24rem] text-stone-200/[0.06] blur-[2px]"
					style={{
						left: data.left,
						top: data.top,
					}}
					animate={{
						rotate: [0, 360],
						scale: [1, 1.15, 1],
						y: [0, -30, 0],
					}}
					transition={{
						duration: data.duration,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
				>
					{data.symbol}
				</motion.div>
			))}
		</motion.div>
	);
};

// 放射状の光線エフェクト
export const RadialLightRays = () => (
	<div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
		<motion.div
			className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 [background:conic-gradient(from_0deg,transparent_0deg,rgba(251,113,133,0.08)_45deg,transparent_90deg,transparent_180deg,rgba(251,191,36,0.08)_225deg,transparent_270deg)]"
			animate={{ rotate: 360 }}
			transition={{
				duration: 60,
				repeat: Number.POSITIVE_INFINITY,
				ease: "linear",
			}}
		/>
	</div>
);

// 多層グローエフェクト
export const MultiLayerGlow = () => (
	<>
		<motion.div
			className="absolute -inset-16 bg-gradient-to-r from-rose-500/40 via-amber-500/40 to-rose-500/40 blur-[80px]"
			animate={{
				scale: [1, 1.3, 1],
				opacity: [0.4, 0.7, 0.4],
				rotate: [0, 180, 360],
			}}
			transition={{
				duration: 10,
				repeat: Number.POSITIVE_INFINITY,
				ease: "easeInOut",
			}}
		/>
		<motion.div
			className="absolute -inset-12 bg-gradient-to-r from-amber-400/30 via-rose-400/30 to-amber-400/30 blur-[60px]"
			animate={{
				scale: [1.2, 1, 1.2],
				opacity: [0.3, 0.6, 0.3],
				rotate: [360, 180, 0],
			}}
			transition={{
				duration: 8,
				repeat: Number.POSITIVE_INFINITY,
				ease: "easeInOut",
			}}
		/>
	</>
);

// 回転するリング
export const RotatingRings = () => (
	<>
		<motion.div
			className="absolute inset-0 border-2 border-rose-400/30 rounded-full"
			animate={{ rotate: 360, scale: [1, 1.1, 1] }}
			transition={{
				duration: 20,
				repeat: Number.POSITIVE_INFINITY,
				ease: "linear",
			}}
		/>
		<motion.div
			className="absolute inset-0 border-2 border-amber-400/20 rounded-full"
			animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
			transition={{
				duration: 15,
				repeat: Number.POSITIVE_INFINITY,
				ease: "linear",
			}}
		/>
	</>
);

// 和紙の質感オーバーレイ
export const WashiTextureOverlay = () => (
	<div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%270_0_400_400%27_xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter_id=%27noiseFilter%27%3E%3CfeTurbulence_type=%27fractalNoise%27_baseFrequency=%272%27_numOctaves=%273%27_stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect_width=%27100%25%27_height=%27100%25%27_filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E')]" />
);

// 四隅の装飾フレーム
export const CornerDecorations = () => {
	const corners = [
		{ pos: "top-4 left-4", border: "border-t-[3px] border-l-[3px]" },
		{ pos: "top-4 right-4", border: "border-t-[3px] border-r-[3px]" },
		{ pos: "bottom-4 left-4", border: "border-b-[3px] border-l-[3px]" },
		{ pos: "bottom-4 right-4", border: "border-b-[3px] border-r-[3px]" },
	];

	return (
		<>
			{corners.map((corner, i) => (
				<motion.div
					key={`corner-${corner.pos}`}
					className={`absolute ${corner.pos} w-8 h-8 border-amber-600/40 ${corner.border}`}
					animate={{ opacity: [0.4, 0.8, 0.4] }}
					transition={{
						duration: 3,
						repeat: Number.POSITIVE_INFINITY,
						delay: i * 0.2,
					}}
				/>
			))}
		</>
	);
};

// 印鑑コンポーネント - 名前の最後の文字の後ろ半分に重なるように配置
export const Hanko = ({
	text,
	className = "",
}: {
	text: string;
	className?: string;
}) => {
	// テキストを文字の配列に分割
	const chars = Array.from(text);
	const firstChar = chars[0];
	const lastIndex = chars.length - 1;

	return (
		<span className={`relative inline-block ${className}`}>
			{chars.map((char, index) => (
				<span
					key={`char-${index}-${char}`}
					className={
						index === lastIndex ? "relative inline-block" : "inline-block"
					}
				>
					{char}
					{/* 最後の文字の後ろ半分に印鑑を重ねる */}
					{index === lastIndex && (
						<motion.span
							className="absolute -bottom-0.5 -right-3 sm:-bottom-1 sm:-right-4 md:-right-5 w-[1.4em] h-[1.4em] rounded-full border-[2px] sm:border-[2.5px] border-rose-600 bg-rose-600/5 flex items-center justify-center z-10"
							initial={{ opacity: 0, scale: 0, rotate: -180 }}
							whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 1.7, type: "spring" }}
						>
							<span className="text-rose-600 font-bold text-[0.85em] -rotate-[8deg]">
								{firstChar}
							</span>
						</motion.span>
					)}
				</span>
			))}
		</span>
	);
};
