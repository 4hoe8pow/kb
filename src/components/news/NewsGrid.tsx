import { NewsCard } from "@/components/news/NewsCard";
import { NewsEmptyState } from "@/components/news/NewsEmptyState";
import { NewsGridSkeleton } from "@/components/news/NewsGridSkeleton";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import type { NewsItem } from "@/lib/articles";
import type { TabType } from "@/lib/tabConfig";

interface NewsGridProps {
	articles: NewsItem[];
	loading: boolean;
	activeTab: TabType;
	onArticleClick: (article: NewsItem) => void;
}

export function NewsGrid({
	articles,
	loading,
	activeTab,
	onArticleClick,
}: NewsGridProps) {
	if (loading) {
		return <NewsGridSkeleton activeTab={activeTab} />;
	}

	if (articles.length === 0) {
		return <NewsEmptyState activeTab={activeTab} />;
	}

	return (
		<>
			{/* モバイル: ScrollStack */}
			<div className="block md:hidden h-[600px] overflow-y-auto -mx-4 px-2">
				<ScrollStack itemStackDistance={30} stackPosition="5" baseScale={1}>
					{articles.map((article, index) => (
						<ScrollStackItem key={article.id}>
							<NewsCard
								article={article}
								index={index}
								onArticleClick={onArticleClick}
							/>
						</ScrollStackItem>
					))}
				</ScrollStack>
			</div>

			{/* デスクトップ: グリッドレイアウト */}
			<div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{articles.map((article, index) => (
					<NewsCard
						key={article.id}
						article={article}
						index={index}
						onArticleClick={onArticleClick}
					/>
				))}
			</div>
		</>
	);
}
