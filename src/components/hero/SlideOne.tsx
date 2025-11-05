import { useEffect, useState } from "react";
import ASCIIText from "../ASCIIText";

const SlideOne = () => {
	const [textFontSize, setTextFontSize] = useState(31);

	useEffect(() => {
		const updateFontSize = () => {
			setTextFontSize(window.innerWidth <= 768 ? 6 : 31);
		};

		updateFontSize();
		window.addEventListener("resize", updateFontSize);
		return () => window.removeEventListener("resize", updateFontSize);
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
			<ASCIIText
				text="ANKLEHOLD"
				enableWaves={true}
				asciiFontSize={5}
				textFontSize={textFontSize}
			/>
		</section>
	);
};

export default SlideOne;
