import { Calendar, Clock, Eye, Sparkles, Users, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import type { NewsItem } from "@/lib/articles";
import { MarkdownContent } from "./MarkdownContent";

interface NewsModalProps {
	article: NewsItem | null;
	isOpen: boolean;
	onClose: () => void;
}

export function NewsModal({ article, isOpen, onClose }: NewsModalProps) {
	if (!article) return null;

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
		<Dialog open={isOpen} onOpenChange={onClose}>
			{/* Enhanced Backdrop with Gradient */}
			<div className="fixed inset-0 z-50 bg-gradient-to-br from-chocolate-martini/90 via-chocolate-martini/85 to-chocolate-martini/90 backdrop-blur-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

			<DialogContent
				className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[calc(100vw-2rem)] md:max-w-4xl lg:max-w-6xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden bg-gradient-to-br from-background via-background to-muted/20 border border-border/30 shadow-2xl z-50 p-0"
				showCloseButton={false}
			>
				{/* Animated Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-bland/5 via-transparent to-sirocco/5 pointer-events-none opacity-60 overflow-hidden" />
				<div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-bland/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
				<div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-chanterelle/10 rounded-full blur-3xl pointer-events-none animate-pulse [animation-delay:1000ms]" />

				{/* Close Button - Floating (Hidden on mobile) */}
				<Button
					variant="ghost"
					size="icon"
					onClick={onClose}
					className="hidden md:flex absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-border/50 hover:bg-background hover:scale-110 transition-all duration-300 cursor-target shadow-lg"
				>
					<X className="w-5 h-5" />
				</Button>

				{/* Hero Header with Glassmorphism */}
				<DialogHeader className="px-4 md:px-10 pt-8 md:pt-12 pb-6 md:pb-8 relative overflow-hidden">
					{/* Category Badge - Floating Style */}
					<div className="flex flex-wrap items-center gap-2 mb-6 md:mb-8 max-w-full">
						<Badge
							variant="secondary"
							className="gap-2 bg-gradient-to-r from-bland/20 to-sirocco/20 backdrop-blur-md text-foreground px-4 py-2 text-sm font-semibold border border-bland/30 shadow-lg hover:shadow-bland/20 transition-all duration-300"
						>
							{getCategoryIcon(article.category)}
							<span>{article.category}</span>
						</Badge>
					</div>

					{/* Title with Gradient */}
					<DialogTitle className="text-2xl md:text-5xl font-bold leading-tight mb-6 md:mb-8 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent tracking-tight break-words max-w-full">
						{article.title}
					</DialogTitle>

					{/* Meta Information - Modern Grid */}
					<div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-8 max-w-full">
						<div className="flex items-center gap-2 text-sm text-muted-foreground bg-cream-tan/30 backdrop-blur-sm px-3 py-2 rounded-full border border-safari/30 min-w-0">
							<Calendar className="w-4 h-4 text-bland flex-shrink-0" />
							<span className="font-medium truncate">
								{new Date(article.date).toLocaleDateString("ja-JP")}
							</span>
						</div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground bg-cream-tan/30 backdrop-blur-sm px-3 py-2 rounded-full border border-safari/30 min-w-0">
							<Users className="w-4 h-4 text-bland flex-shrink-0" />
							<span className="font-medium truncate">{article.author}</span>
						</div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground bg-cream-tan/30 backdrop-blur-sm px-3 py-2 rounded-full border border-safari/30 min-w-0">
							<Clock className="w-4 h-4 text-bland flex-shrink-0" />
							<span className="font-medium truncate">
								{article.readingTime}
							</span>
						</div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground bg-cream-tan/30 backdrop-blur-sm px-3 py-2 rounded-full border border-safari/30 min-w-0">
							<Eye className="w-4 h-4 text-bland flex-shrink-0" />
							<span className="font-medium truncate">1,234 views</span>
						</div>
					</div>
					{/* Summary Section - Premium Card */}
					<div className="relative bg-gradient-to-br from-cream-tan/40 via-cannoli-cream/30 to-transparent backdrop-blur-xl border border-safari/40 rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden max-w-full">
						{/* Decorative Elements */}
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
						<DialogDescription className="relative text-base md:text-lg text-foreground/90 leading-relaxed font-medium break-words max-w-full">
							{article.summary}
						</DialogDescription>
					</div>
				</DialogHeader>

				{/* Content Area with Subtle Gradient */}
				<div className="px-4 md:px-10 py-6 relative overflow-hidden">
					<div className="relative bg-background/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/20 max-w-full overflow-hidden">
						<MarkdownContent
							content={article.content || ""}
							className="max-w-none break-words overflow-wrap-anywhere"
						/>
					</div>
				</div>

				{/* Footer - Glassmorphism */}
				<div className="px-4 md:px-10 py-4 md:py-6 bg-cream-tan/20 backdrop-blur-xl border-t border-safari/30 relative">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						<div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
							<div className="w-2 h-2 rounded-full bg-chanterelle animate-pulse" />
							<span className="font-medium">記事を読んでいます</span>
						</div>
						<Button
							onClick={onClose}
							className="gap-2 px-6 py-3 bg-gradient-to-r from-bland to-baltic-amber hover:from-bland/90 hover:to-baltic-amber/90 text-cannoli-cream font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-target w-full sm:w-auto"
						>
							<X className="w-4 h-4" />
							閉じる
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
