import { lazy, Suspense } from "react";
import { useTheme } from "../theme-provider";

// 重いアニメーションコンポーネントを遅延ロード
const ASCIIText = lazy(() => import("../ASCIIText"));

const SlideOne = () => {
	const { theme } = useTheme();

	// システムテーマを解決
	const resolvedTheme =
		theme === "system"
			? typeof window !== "undefined" &&
				window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light"
			: theme;

	return (
		<section className="min-h-screen snap-start flex items-center justify-center bg-cannoli-cream dark:bg-transparent">
			<Suspense fallback={null}>
				<ASCIIText
					text="ANKLEHOLD"
					enableWaves={true}
					asciiFontSize={5}
					theme={resolvedTheme}
				/>
			</Suspense>
		</section>
	);
};

export default SlideOne;
