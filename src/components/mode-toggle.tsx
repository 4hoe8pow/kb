import reactLogo from "../assets/react.svg";
import { useTheme } from "./theme-provider";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<button
			type="button"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className="w-8 h-8 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
			aria-label="Toggle theme"
		>
			<img
				src={reactLogo}
				alt="Toggle theme"
				className={`w-full h-full transition-all duration-300 ${
					theme === "dark" ? "invert" : ""
				}`}
			/>
		</button>
	);
}
