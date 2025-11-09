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
			<div className="relative w-full py-8 md:py-20">
				{/* Page Title */}
				<div className="mb-6 md:mb-12 text-center px-4">
					<h1 className="text-3xl md:text-5xl lg:text-6xl font-hard tracking-widest bg-gradient-to-r from-bland via-sirocco to-chanterelle bg-clip-text text-transparent hover:from-chanterelle hover:via-sirocco hover:to-bland transition-all duration-500 drop-shadow-2xl">
						KABADDI TIMES
					</h1>
					<div className="mt-3 md:mt-4 flex items-center justify-center gap-2">
						<div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-bland"></div>
						<p className="text-xs md:text-sm text-muted-foreground/80 font-body tracking-wider uppercase">
							カバディ速報
						</p>
						<div className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-bland"></div>
					</div>
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
