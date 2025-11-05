import ASCIIText from "../ASCIIText";

const SlideOne = () => (
	<section
		style={{
			height: "100vh",
			scrollSnapAlign: "start",
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
	</section>
);

export default SlideOne;
