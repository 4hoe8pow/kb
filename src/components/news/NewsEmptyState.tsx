import { getTabConfig, type TabType } from "@/lib/tabConfig";

interface NewsEmptyStateProps {
	activeTab: TabType;
}

export function NewsEmptyState({ activeTab }: NewsEmptyStateProps) {
	const getTabIcon = (tabId: TabType) => {
		const config = getTabConfig(tabId);
		const IconComponent = config.icon;
		return <IconComponent className="w-12 h-12 text-muted-foreground" />;
	};

	return (
		<div className="col-span-full text-center py-16">
			<div className="max-w-md mx-auto">
				<div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
					<div className="w-12 h-12 text-muted-foreground">
						{getTabIcon(activeTab)}
					</div>
				</div>
				<h3 className="text-xl font-semibold mb-2">記事が見つかりません</h3>
				<p className="text-muted-foreground">
					現在、この記事タイプの記事は見つかりませんでした。
					<br />
					他のカテゴリをお試しください。
				</p>
			</div>
		</div>
	);
}
