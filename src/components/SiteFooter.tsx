import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export const SiteFooter = () => {
	const currentYear = new Date().getFullYear();

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
			<footer className="relative overflow-hidden border-t font-dramatic backdrop-blur-xs bg-background/80 w-full text-foreground">
				<div className="footer-container relative z-10 w-full grid grid-cols-[1fr_auto_1fr]">
					{/* 左カラム（ブランド & ナビゲーション） */}
					<div
						className="flex flex-col items-start justify-between"
						style={{ gap: `${spacing.md}rem` }}
					>
						<Link
							to="/"
							className="text-xs tracking-[0.24em] uppercase text-foreground hover:text-foreground/70 transition-colors"
						>
							ANKLEHOLD
						</Link>
						<div
							className="flex flex-col items-start"
							style={{ gap: `${spacing.xs}rem` }}
						>
							<Link
								to="/how-to-play"
								className="text-xs tracking-[0.24em] uppercase text-foreground hover:text-foreground/70 transition-colors"
							>
								&gt; Game Rules
							</Link>
							<Link
								to="/history"
								className="text-xs tracking-[0.24em] uppercase text-foreground hover:text-foreground/70 transition-colors"
							>
								&gt; History
							</Link>
							<Link
								to="/news"
								className="text-xs tracking-[0.24em] uppercase text-foreground hover:text-foreground/70 transition-colors"
							>
								&gt; Kabaddi Times
							</Link>
						</div>
						<span className="text-xs tracking-[0.24em] uppercase text-foreground/80">
							SPARK THE VOID.
						</span>
					</div>

					{/* 中央カラム（テーマトグルアイコン） */}
					<div className="flex items-center justify-center">
						<ModeToggle />
					</div>

					{/* 右カラム（リーガルリンク） */}
					<div
						className="flex flex-col items-end justify-between"
						style={{ gap: `${spacing.md}rem` }}
					>
						<div
							className="flex flex-col items-end"
							style={{ gap: `${spacing.xs}rem` }}
						>
							<Link
								to="/legal"
								className="text-xs tracking-[0.24em] uppercase text-foreground hover:text-foreground/70 transition-colors"
							>
								Editorial Policy
							</Link>
							<Link
								to="/privacy"
								className="text-xs tracking-[0.24em] uppercase text-foreground hover:text-foreground/70 transition-colors"
							>
								Privacy Policy
							</Link>
						</div>
						<p className="text-[0.625rem] tracking-[0.12em] uppercase whitespace-nowrap text-foreground/70">
							&copy; {currentYear} Yu Tokunaga
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};
