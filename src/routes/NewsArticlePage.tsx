import { ArrowLeft, Calendar, Clock, Eye, Sparkles, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingFallback } from "@/components/LoadingFallback";
import { MarkdownContent } from "@/components/news/MarkdownContent";
import TargetCursor from "@/components/TargetCursor";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/usePageTitle";
import { getArticleById, type NewsItem } from "@/lib/articles";

function NewsArticlePage() {
	const { articleId } = useParams<{ articleId: string }>();
	const navigate = useNavigate();
	const [article, setArticle] = useState<NewsItem | null>(null);
	const [loading, setLoading] = useState(true);

	usePageTitle(article ? `${article.title} - KABADDI TIMES` : "KABADDI TIMES");

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });

		const loadArticle = async () => {
			if (!articleId) {
				navigate("/news");
				return;
			}

			setLoading(true);
			try {
				const foundArticle = await getArticleById(articleId);
				if (foundArticle) {
					setArticle(foundArticle);
				} else {
					navigate("/news");
				}
			} catch (error) {
				console.error("Failed to load article:", error);
				navigate("/news");
			} finally {
				setLoading(false);
			}
		};

		loadArticle();
	}, [articleId, navigate]);

	if (loading) {
		return <LoadingFallback />;
	}

	if (!article) {
		return null;
	}

	const getCategoryIcon = (category: string) => {
		if (
			category.includes("大会") ||
			category.includes("PKL") ||
			category.includes("世界選手権")
		) {
			return <Calendar className="w-4 h-4" />;
		}
		return <Clock className="w-4 h-4" />;
	};

	return (
		<main className="relative font-body overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
			<TargetCursor
				spinDuration={6}
				hideDefaultCursor={true}
				parallaxOn={true}
			/>

			<div className="relative w-full py-8 md:py-20">
				<div className="max-w-5xl mx-auto px-4 md:px-6">
					{/* Back Button */}
					<Button
						variant="ghost"
						onClick={() => navigate("/news")}
						className="mb-6 gap-2 hover:bg-bland/10 cursor-target"
					>
						<ArrowLeft className="w-4 h-4" />
						ニュース一覧に戻る
					</Button>

					{/* Article Container */}
					<article className="relative bg-gradient-to-br from-background via-background to-muted/20 border border-border/30 shadow-2xl rounded-3xl overflow-hidden">
						{/* Animated Gradient Overlay */}
						<div className="absolute inset-0 bg-gradient-to-br from-bland/5 via-transparent to-sirocco/5 pointer-events-none opacity-60" />
						<div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-bland/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
						<div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-chanterelle/10 rounded-full blur-3xl pointer-events-none animate-pulse [animation-delay:1000ms]" />

						{/* Header */}
						<header className="px-4 md:px-10 pt-8 md:pt-12 pb-6 md:pb-8 relative">
							{/* Category Badge */}
							<div className="flex flex-wrap items-center gap-2 mb-6 md:mb-8">
								<Badge
									variant="secondary"
									className="gap-2 bg-gradient-to-r from-bland/20 to-sirocco/20 backdrop-blur-md text-foreground px-4 py-2 text-sm font-semibold border border-bland/30 shadow-lg hover:shadow-bland/20 transition-all duration-300"
								>
									{getCategoryIcon(article.category)}
									<span>{article.category}</span>
								</Badge>
							</div>

							{/* Title */}
							<h1 className="text-2xl md:text-5xl font-bold leading-tight mb-6 md:mb-8 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent tracking-tight">
								{article.title}
							</h1>

							{/* Meta Information */}
							<div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-8">
								<div className="flex items-center gap-2 text-sm text-muted-foreground bg-cream-tan/30 backdrop-blur-sm px-3 py-2 rounded-full border border-safari/30">
									<Calendar className="w-4 h-4 text-bland flex-shrink-0" />
									<span className="font-medium truncate">
										{new Date(article.date).toLocaleDateString("ja-JP")}
									</span>
								</div>
								<div className="flex items-center gap-2 text-sm text-muted-foreground bg-cream-tan/30 backdrop-blur-sm px-3 py-2 rounded-full border border-safari/30">
									<Users className="w-4 h-4 text-bland flex-shrink-0" />
									<span className="font-medium truncate">{article.author}</span>
								</div>
								<div className="flex items-center gap-2 text-sm text-muted-foreground bg-cream-tan/30 backdrop-blur-sm px-3 py-2 rounded-full border border-safari/30">
									<Clock className="w-4 h-4 text-bland flex-shrink-0" />
									<span className="font-medium truncate">
										{article.readingTime}
									</span>
								</div>
								<div className="flex items-center gap-2 text-sm text-muted-foreground bg-cream-tan/30 backdrop-blur-sm px-3 py-2 rounded-full border border-safari/30">
									<Eye className="w-4 h-4 text-bland flex-shrink-0" />
									<span className="font-medium truncate">1,234 views</span>
								</div>
							</div>

							{/* Summary Section */}
							<div className="relative bg-gradient-to-br from-cream-tan/40 via-cannoli-cream/30 to-transparent backdrop-blur-xl border border-safari/40 rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden">
								<div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-bland/10 rounded-full blur-3xl" />
								<div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-chanterelle/10 rounded-full blur-3xl" />

								<div className="relative flex items-center gap-3 mb-4">
									<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-bland to-sirocco shadow-lg">
										<Sparkles className="w-5 h-5 text-cannoli-cream" />
									</div>
									<span className="text-base font-bold text-foreground uppercase tracking-wider">
										要旨
									</span>
								</div>
								<p className="relative text-base md:text-lg text-foreground/90 leading-relaxed font-medium">
									{article.summary}
								</p>
							</div>
						</header>

						{/* Content */}
						<div className="px-4 md:px-10 py-6 relative">
							<div className="relative bg-background/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/20">
								<MarkdownContent
									content={article.content || ""}
									className="max-w-none"
								/>
							</div>
						</div>

						{/* Footer */}
						<footer className="px-4 md:px-10 py-4 md:py-6 bg-cream-tan/20 backdrop-blur-xl border-t border-safari/30 relative">
							<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
								<div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
									<div className="w-2 h-2 rounded-full bg-chanterelle animate-pulse" />
									<span className="font-medium">記事を読んでいます</span>
								</div>
								<Button
									onClick={() => navigate("/news")}
									className="gap-2 px-6 py-3 bg-gradient-to-r from-bland to-baltic-amber hover:from-bland/90 hover:to-baltic-amber/90 text-cannoli-cream font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-target w-full sm:w-auto"
								>
									<ArrowLeft className="w-4 h-4" />
									ニュース一覧に戻る
								</Button>
							</div>
						</footer>
					</article>
				</div>
			</div>
		</main>
	);
}

export default NewsArticlePage;
