export const SiteFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		// 2段組グリッドレイアウトのフッター
		<footer className="relative overflow-hidden border-t font-dramatic">
			<div className="relative z-10 grid grid-cols-2">
				{/* 左カラム（ブランド） */}
				<div className="flex flex-col gap-3 items-start">
					<span className="text-[0.68rem] uppercase tracking-[0.32em]">
						Kabaddi Knowledge
					</span>
					<span className="text-[0.88rem] tracking-[0.08em] uppercase">
						Movement couture for the next raid.
					</span>
				</div>
				{/* 右カラム（著作表示） */}
				<div className="flex justify-end items-center">
					<p className="m-0 text-[0.72rem] tracking-[0.28em] uppercase">
						&copy; {currentYear} Kabaddi Knowledge
					</p>
				</div>
			</div>
		</footer>
	);
};
