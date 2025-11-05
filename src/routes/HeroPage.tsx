import SlideOne from "@/components/hero/SlideOne";
import SlideThree from "@/components/hero/SlideThree";
import SlideTwo from "@/components/hero/SlideTwo";
import LightRays from "../components/LightRays";

function HeroPage() {
	return (
		<div style={{ position: "relative", height: "100vh" }}>
			{/* 固定背景 */}
			<div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
				<LightRays
					raysOrigin="top-center"
					raysColor="#00ffff"
					raysSpeed={1.5}
					lightSpread={0.8}
					rayLength={1.2}
					followMouse={true}
					mouseInfluence={0.1}
					noiseAmount={0.1}
					distortion={0.05}
					className="custom-rays"
				/>
			</div>
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
				<SlideThree />
			</div>
		</div>
	);
}

export default HeroPage;
