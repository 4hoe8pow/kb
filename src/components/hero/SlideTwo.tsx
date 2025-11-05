import TextType from "../TextType";

const SlideTwo = () => (
	<section
		style={{
			height: "100vh",
			scrollSnapAlign: "start",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		}}
	>
		<TextType
			text={["Text typing effect", "for this websites", "Happy coding!"]}
			typingSpeed={81}
			pauseDuration={2900}
			showCursor={true}
			cursorCharacter={"・"}
			deletingSpeed={40}
		/>
	</section>
);

export default SlideTwo;
