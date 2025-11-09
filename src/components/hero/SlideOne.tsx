import { lazy, Suspense, useEffect, useState } from "react";
import { LoadingFallback } from "../LoadingFallback";

// 重いアニメーションコンポーネントを遅延ロード
const ASCIIText = lazy(() => import("../ASCIIText"));

// ASCIITextの遅延ロード設定
const ASCII_LOAD_DELAY = {
	IDLE_TIMEOUT: 1000, // requestIdleCallbackのタイムアウト（ms）
	FALLBACK_DELAY: 800, // requestIdleCallback非対応時の遅延（ms）
} as const;

const SlideOne = () => {
	const [showASCII, setShowASCII] = useState(false);

	useEffect(() => {
		// ユーザーインタラクション後にASCIITextをロード（LCP改善）
		const loadASCII = () => setShowASCII(true);

		let cleanup: () => void;

		// より早くロード開始（ただしLCPには影響させない）
		if ("requestIdleCallback" in window) {
			const idleCallback = window.requestIdleCallback(loadASCII, {
				timeout: ASCII_LOAD_DELAY.IDLE_TIMEOUT,
			});
			cleanup = () => window.cancelIdleCallback(idleCallback);
		} else {
			const timeout = setTimeout(loadASCII, ASCII_LOAD_DELAY.FALLBACK_DELAY);
			cleanup = () => clearTimeout(timeout);
		}

		return () => {
			cleanup();
		};
	}, []);

	return (
		<section className="min-h-screen snap-start flex items-center justify-center">
			{showASCII ? (
				<Suspense fallback={<LoadingFallback />}>
					<ASCIIText text="ANKLEHOLD" enableWaves={true} asciiFontSize={5} />
				</Suspense>
			) : (
				<LoadingFallback />
			)}
		</section>
	);
};

export default SlideOne;
