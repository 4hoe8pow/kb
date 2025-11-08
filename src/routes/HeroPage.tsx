import { lazy, Suspense, useEffect, useState } from "react";
// SlideOneは即座にロード（FCP/LCP改善）
import SlideOne from "@/components/hero/SlideOne";
import { useTheme } from "@/components/theme-provider";
import { usePageTitle } from "@/hooks/usePageTitle";

// 画面外のコンポーネントは遅延ロード
const LightRays = lazy(() => import("@/components/LightRays"));
const SlideTwo = lazy(() => import("@/components/hero/SlideTwo"));

function HeroPage() {
	usePageTitle("ANKLEHOLD");
	const { theme } = useTheme();
	const isDarkMode = theme === "dark";
	const [showSlideTwo, setShowSlideTwo] = useState(false);

	// SlideTwoを遅延表示（初期レンダリング後）
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSlideTwo(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div style={{ position: "relative", height: "100vh" }}>
			{/* Background - 遅延ロード */}
			{isDarkMode && (
				<Suspense fallback={null}>
					<div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
						<LightRays
							raysOrigin="top-center"
							raysColor="oklch(0.826 0.056 68.2)"
							raysSpeed={1.5}
							lightSpread={0.8}
							rayLength={1.7}
							followMouse={true}
							mouseInfluence={0.1}
							noiseAmount={0.1}
							distortion={0.05}
							className="custom-rays"
						/>
					</div>
				</Suspense>
			)}

			{/* Main content */}
			<div
				style={{
					position: "relative",
					zIndex: 1,
					height: "100%",
					overflowY: "auto",
					scrollSnapType: "y mandatory",
					WebkitOverflowScrolling: "touch",
				}}
			>
				{/* SlideOne - 即座に表示（FCP/LCP最適化） */}
				<SlideOne />

				{/* SlideTwo - 遅延表示 */}
				{showSlideTwo && (
					<Suspense fallback={null}>
						<SlideTwo />
					</Suspense>
				)}
			</div>
		</div>
	);
}

export default HeroPage;
