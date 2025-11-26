// 会社別カラー設定
export const companyColors = {
	スーパーむしず: {
		colorClass: "text-rose-600 dark:text-rose-300",
		bgGradient: "from-rose-950/90 via-rose-900/85 to-black/95",
		accentColor: "rose",
		borderClass: "border-rose-400/60",
		glowColor: "shadow-rose-500/30",
		hoverGlow: "hover:shadow-rose-400/50",
		description: "地域の老舗スーパー",
	},
	みょうり商店: {
		colorClass: "text-indigo-600 dark:text-indigo-300",
		bgGradient: "from-indigo-950/90 via-indigo-900/85 to-black/95",
		accentColor: "indigo",
		borderClass: "border-indigo-400/60",
		glowColor: "shadow-indigo-500/30",
		hoverGlow: "hover:shadow-indigo-400/50",
		description: "隣町にできた新しいスーパー",
	},
	ハヌマン酒造: {
		colorClass: "text-amber-600 dark:text-amber-300",
		bgGradient: "from-amber-950/90 via-amber-900/85 to-black/95",
		accentColor: "amber",
		borderClass: "border-amber-400/60",
		glowColor: "shadow-amber-500/30",
		hoverGlow: "hover:shadow-amber-400/50",
		description: "地獄にある酒蔵",
	},
} as const;

export type CompanyName = keyof typeof companyColors;
