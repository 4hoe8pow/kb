import { lazy, Suspense, useEffect, useState } from "react";

// 重いアニメーションコンポーネントを遅延ロード
const ASCIIText = lazy(() => import("../ASCIIText"));

// 軽量なプレースホルダー（FCP/LCP改善）- これがLCPとしてカウントされる
const Placeholder = () => (
	<h1
		style={{
			fontSize: "clamp(2rem, 8vw, 6rem)",
			fontWeight: 900,
			fontFamily: "system-ui, -apple-system, sans-serif", // システムフォントで即座に表示
			textAlign: "center",
			opacity: 1,
			letterSpacing: "0.05em",
			background:
				"linear-gradient(135deg, oklch(0.697 0.066 56.8) 0%, oklch(0.738 0.089 62.1) 50%, oklch(0.826 0.056 68.2) 100%)",
			WebkitBackgroundClip: "text",
			WebkitTextFillColor: "transparent",
			backgroundClip: "text",
			animation: "fadeInScale 0.4s ease-out",
			// LCP要素として明示的にサイズを確保
			minHeight: "clamp(2rem, 8vw, 6rem)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		}}
	>
		ANKLEHOLD
		<style>{`
			@keyframes fadeInScale {
				from {
					opacity: 0;
					transform: scale(0.98);
				}
				to {
					opacity: 1;
					transform: scale(1);
				}
			}
		`}</style>
	</h1>
);

const SlideOne = () => {
	const [textFontSize, setTextFontSize] = useState(31);
	const [showASCII, setShowASCII] = useState(false);

	useEffect(() => {
		const updateFontSize = () => {
			setTextFontSize(window.innerWidth <= 768 ? 7 : 21);
		};

		updateFontSize();
		window.addEventListener("resize", updateFontSize);

		// ユーザーインタラクション後にASCIITextをロード（LCP改善）
		const loadASCII = () => setShowASCII(true);

		let cleanup: () => void;

		// より早くロード開始（ただしLCPには影響させない）
		if ("requestIdleCallback" in window) {
			const idleCallback = window.requestIdleCallback(loadASCII, {
				timeout: 1000, // 1秒後にロード開始
			});
			cleanup = () => window.cancelIdleCallback(idleCallback);
		} else {
			const timeout = setTimeout(loadASCII, 800);
			cleanup = () => clearTimeout(timeout);
		}

		return () => {
			window.removeEventListener("resize", updateFontSize);
			cleanup();
		};
	}, []);

	return (
		<section className="min-h-screen snap-start flex items-center justify-center">
			{showASCII ? (
				<Suspense fallback={<Placeholder />}>
					<ASCIIText
						text="ANKLEHOLD"
						enableWaves={true}
						asciiFontSize={5}
						textFontSize={textFontSize}
					/>
				</Suspense>
			) : (
				<Placeholder />
			)}
		</section>
	);
};

export default SlideOne;
