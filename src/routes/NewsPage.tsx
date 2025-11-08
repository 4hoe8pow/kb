import { useEffect, useState } from "react";
import {
	NewsGrid,
	NewsLoadMore,
	NewsModal,
	NewsTabNavigation,
} from "@/components/news";
import TargetCursor from "@/components/TargetCursor";
import { usePageTitle } from "@/hooks/usePageTitle";
import { getArticlesByType, type NewsItem } from "@/lib/articles";
import type { TabType } from "@/lib/tabConfig";

function NewsPage() {
	usePageTitle("KABADDI TIMES - ANKLEHOLD");
	// ページロード時に最上部に移動
	window.scrollTo({ top: 0, behavior: "instant" });

	const [activeTab, setActiveTab] = useState<TabType>("domestic");
	const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [articles, setArticles] = useState<NewsItem[]>([]);
	const [loading, setLoading] = useState(true);

	// 記事を読み込む
	useEffect(() => {
		const loadArticles = async () => {
			setLoading(true);
			try {
				const articlesByType = await getArticlesByType(activeTab);
				setArticles(articlesByType);
			} catch (error) {
				console.error("Failed to load articles:", error);
				setArticles([]);
			} finally {
				setLoading(false);
			}
		};

		loadArticles();
	}, [activeTab]);

	const handleTabChange = (tab: TabType) => {
		setActiveTab(tab);
	};

	const handleArticleClick = (article: NewsItem) => {
		setSelectedArticle(article);
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
		setSelectedArticle(null);
	};

	const handleLoadMore = () => {
		// TODO: ページネーション機能
		console.log("Load more articles");
	};

	return (
		<main className="relative font-body overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
			<TargetCursor
				spinDuration={6}
				hideDefaultCursor={true}
				parallaxOn={true}
			/>
			<div className="relative container mx-auto md:px-6 py-8 md:py-20 max-w-7xl">
				{/* Site Title */}
				<div className="mb-2 md:mb-6">
					<h1 className="text-2xl md:text-3xl font-hard tracking-wider text-foreground/80 hover:text-foreground transition-colors duration-300">
						KABADDI TIMES
					</h1>
				</div>

				{/* Tab Navigation */}
				<NewsTabNavigation
					activeTab={activeTab}
					onTabChange={handleTabChange}
				/>

				{/* News Grid */}
				<NewsGrid
					articles={articles}
					loading={loading}
					activeTab={activeTab}
					onArticleClick={handleArticleClick}
				/>

				{/* Load More Section */}
				<NewsLoadMore onLoadMore={handleLoadMore} />

				{/* Article Modal */}
				<NewsModal
					article={selectedArticle}
					isOpen={isModalOpen}
					onClose={handleModalClose}
				/>
			</div>
		</main>
	);
}

export default NewsPage;
