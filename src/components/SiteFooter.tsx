import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import { useTheme } from "./theme-provider";

export const SiteFooter = () => {
	const currentYear = new Date().getFullYear();
	const { theme, setTheme } = useTheme();

	// Silver ratio calculations following SlideTwo pattern
	// Spacing scale based on silver ratio multiples (√2 ≈ 1.414214)
	const spacing = {
		xs: (0.5).toFixed(3), // 0.5rem
		sm: (Math.SQRT2 * 0.5).toFixed(3), // ~0.707rem
		md: Math.SQRT2.toFixed(3), // ~1.414rem
		lg: (Math.SQRT2 * 1.5).toFixed(3), // ~2.121rem
		xl: (Math.SQRT2 * 2).toFixed(3), // ~2.828rem
		xxl: (Math.SQRT2 * 2.5).toFixed(3), // ~3.536rem
	};

	return (
		<>
			{/* Responsive spacing rules following silver ratio */}
			<style>{`
				.footer-container {
					padding: ${spacing.lg}rem ${spacing.md}rem;
					gap: ${spacing.lg}rem;
				}
				@media (min-width: 768px) {
					.footer-container {
						padding: ${spacing.xl}rem ${spacing.xxl}rem;
						gap: ${spacing.xl}rem;
					}
				}
			`}</style>

			{/* 3段組グリッドレイアウトのフッター with silver ratio spacing */}
			<footer className="relative overflow-hidden border-t font-dramatic backdrop-blur-xs bg-background/80">
				<div className="footer-container relative z-10 w-full max-w-7xl mx-auto grid grid-cols-3">
					{/* 左カラム（ブランド & ナビゲーション） */}
					<div
						className="flex flex-col items-start"
						style={{ gap: `${spacing.md}rem` }}
					>
						<Link
							to="/"
							className="text-[0.68rem] tracking-[0.24em] uppercase hover:opacity-70 transition-opacity"
						>
							ANKLEHOLD
						</Link>
						<div
							className="flex flex-col items-start"
							style={{ gap: `${spacing.xs}rem` }}
						>
							<Link
								to="/how-to-play"
								className="text-[0.68rem] tracking-[0.24em] uppercase hover:opacity-70 transition-opacity"
							>
								&gt; Game Rules
							</Link>
							<Link
								to="/history"
								className="text-[0.68rem] tracking-[0.24em] uppercase hover:opacity-70 transition-opacity"
							>
								&gt; History
							</Link>
							<Link
								to="/news"
								className="text-[0.68rem] tracking-[0.24em] uppercase hover:opacity-70 transition-opacity"
							>
								&gt; Kabaddi Times
							</Link>
						</div>
						<span className="text-[0.88rem] tracking-[0.08em] uppercase">
							SPARK THE VOID.
						</span>
					</div>

					{/* 中央カラム（テーマトグルアイコン） */}
					<div className="flex items-center justify-center">
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
					</div>

					{/* 右カラム（リーガルリンク） */}
					<div
						className="flex flex-col items-end justify-center"
						style={{ gap: `${spacing.sm}rem` }}
					>
						<div
							className="flex flex-col items-end"
							style={{ gap: `${spacing.xs}rem` }}
						>
							<Link
								to="/legal"
								className="text-[0.68rem] tracking-[0.24em] uppercase hover:opacity-70 transition-opacity"
							>
								Editorial Policy
							</Link>
							<Link
								to="/privacy"
								className="text-[0.68rem] tracking-[0.24em] uppercase hover:opacity-70 transition-opacity"
							>
								Privacy Policy
							</Link>
						</div>
						<p className="m-0 text-[0.72rem] tracking-[0.28em] uppercase">
							&copy; {currentYear} Yu Tokunaga
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};
