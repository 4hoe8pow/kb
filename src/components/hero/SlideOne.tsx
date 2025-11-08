import { lazy, Suspense, useEffect, useState } from "react";

// 重いアニメーションコンポーネントを遅延ロード
const ASCIIText = lazy(() => import("../ASCIIText"));

// 軽量なプレースホルダー（FCP改善）
const Placeholder = () => (
	<div
		style={{
			fontSize: "clamp(2rem, 8vw, 6rem)",
			fontWeight: "bold",
			fontFamily: "var(--font-display)",
			textAlign: "center",
			opacity: 0.9,
		}}
	>
		ANKLEHOLD
	</div>
);

const SlideOne = () => {
	const [textFontSize, setTextFontSize] = useState(31);
	const [showASCII, setShowASCII] = useState(false);

	useEffect(() => {
		const updateFontSize = () => {
			setTextFontSize(window.innerWidth <= 768 ? 6 : 31);
		};

		updateFontSize();
		window.addEventListener("resize", updateFontSize);

		// ASCIITextを遅延表示（初期レンダリング後）
		const timer = setTimeout(() => {
			setShowASCII(true);
		}, 50);

		return () => {
			window.removeEventListener("resize", updateFontSize);
			clearTimeout(timer);
		};
	}, []);

	return (
		<section
			style={{
				height: "100vh",
				scrollSnapAlign: "start",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
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
