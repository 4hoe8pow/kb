import { lazy, Suspense } from "react";
import SlideOne from "@/components/hero/SlideOne";
import SlideTwo from "@/components/hero/SlideTwo";
import { useTheme } from "@/components/theme-provider";
import { usePageTitle } from "@/hooks/usePageTitle";

const LightRays = lazy(() => import("@/components/LightRays"));

function HeroPage() {
	usePageTitle("ANKLEHOLD");
	const { theme } = useTheme();
	const isDarkMode = theme === "dark";

	return (
		<>
			{/* Background */}
			<Suspense fallback={null}>
				<div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
					<LightRays
						raysOrigin={isDarkMode ? "top-center" : "bottom-center"}
						raysColor={
							isDarkMode ? "oklch(0.6 0.042 68.2)" : "oklch(0.631 0.108 54.3)"
						}
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

			{/* Main content */}
			<div
				className="snap-y snap-mandatory overflow-y-auto overflow-x-hidden h-screen scrollbar-hide"
				style={{
					position: "relative",
					zIndex: 1,
				}}
			>
				<SlideOne />
				<SlideTwo />
			</div>
		</>
	);
}

export default HeroPage;
