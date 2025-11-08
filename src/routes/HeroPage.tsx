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
	const [showLightRays, setShowLightRays] = useState(false);

	// requestIdleCallbackで遅延実行（メインスレッド負荷軽減）
	useEffect(() => {
		// LCPが完了してから重いコンポーネントをロード
		const loadHeavyComponents = () => {
			setShowSlideTwo(true);
			setShowLightRays(true);
		};

		if ("requestIdleCallback" in window) {
			const idleCallback = window.requestIdleCallback(loadHeavyComponents, {
				timeout: 1500, // より早くロード開始
			});
			return () => window.cancelIdleCallback(idleCallback);
		}

		// フォールバック: 1秒で実行
		const timeout = setTimeout(loadHeavyComponents, 1000);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			{/* Background - 遅延ロード（アイドル時のみ） */}
			{isDarkMode && showLightRays && (
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

			{/* Main content - スクロールスナップコンテナ */}
			<div
				className="snap-y snap-mandatory overflow-y-auto h-screen scrollbar-hide"
				style={{
					position: "relative",
					zIndex: 1,
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
		</>
	);
}

export default HeroPage;
