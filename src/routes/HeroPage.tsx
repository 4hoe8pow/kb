import { lazy, memo, Suspense, startTransition, useMemo } from "react";
import { useTheme } from "@/components/theme-provider";
import { Spinner } from "@/components/ui/spinner";
import { usePageTitle } from "@/hooks/usePageTitle";

// Lazy load components with preloading
const LightRays = lazy(() => import("@/components/LightRays"));
const SlideOne = lazy(() => import("@/components/hero/SlideOne"));
const SlideTwo = lazy(() => import("@/components/hero/SlideTwo"));

// Preload components for better UX
const preloadComponents = () => {
	startTransition(() => {
		import("@/components/hero/SlideOne");
		import("@/components/hero/SlideTwo");
		import("@/components/LightRays");
	});
};

// Main loading spinner
const MainLoadingSpinner = memo(() => (
	<div className="flex items-center justify-center h-screen bg-background">
		<div className="flex flex-col items-center space-y-4">
			<Spinner className="size-8" />
			<p className="text-muted-foreground">Loading...</p>
		</div>
	</div>
));

function HeroPage() {
	usePageTitle("ANKLEHOLD");
	const { theme } = useTheme();
	const isDarkMode = theme === "dark";

	// Preload components on mount
	useMemo(() => {
		preloadComponents();
	}, []);

	return (
		<Suspense fallback={<MainLoadingSpinner />}>
			<div style={{ position: "relative", height: "100vh" }}>
				{/* Background - render immediately in dark mode */}
				{isDarkMode && (
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
					<SlideOne />
					<SlideTwo />
				</div>
			</div>
		</Suspense>
	);
}

export default HeroPage;
