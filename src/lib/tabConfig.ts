import type { LucideIcon } from "lucide-react";
import { FlaskConical, Globe, Home, TrendingUp } from "lucide-react";

export type TabType = "domestic" | "insights" | "global" | "lab";

export interface TabConfig {
	id: TabType;
	label: string;
	description: string;
	icon: LucideIcon;
}

export const TAB_CONFIGS: TabConfig[] = [
	{
		id: "domestic",
		label: "Domestic",
		description: "国内動向",
		icon: Home,
	},
	{
		id: "insights",
		label: "Insights",
		description: "分析・文化・人物",
		icon: TrendingUp,
	},
	{
		id: "global",
		label: "Global",
		description: "PKL・海外動向",
		icon: Globe,
	},
	{
		id: "lab",
		label: "Lab",
		description: "学術研究・実験的記事",
		icon: FlaskConical,
	},
];

export function getTabConfig(tabId: TabType): TabConfig {
	const config = TAB_CONFIGS.find((tab) => tab.id === tabId);
	if (!config) {
		throw new Error(`Tab configuration not found for: ${tabId}`);
	}
	return config;
}
