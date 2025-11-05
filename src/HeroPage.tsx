import ASCIIText from "./components/ASCIIText";
import LightRays from "./components/LightRays";

function HeroPage() {
	return (
		<div style={{ position: "relative", width: "100vw", height: "100vh" }}>
			<div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
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
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<ASCIIText
					text="kabaddi"
					enableWaves={true}
					asciiFontSize={6}
					textFontSize={20}
				/>
			</div>
		</div>
	);
}

export default HeroPage;
