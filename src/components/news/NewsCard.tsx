import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { NewsItem } from "@/lib/articles";
import { getTabConfig, type TabType } from "@/lib/tabConfig";

interface NewsCardProps {
	article: NewsItem;
	index: number;
}

export function NewsCard({ article, index }: NewsCardProps) {
	const getTabIcon = (tabId: TabType) => {
		const config = getTabConfig(tabId);
		const IconComponent = config.icon;
		return <IconComponent className="w-5 h-5" />;
	};

	const getCategoryIcon = (category: string) => {
		if (
			category.includes("大会") ||
			category.includes("PKL") ||
			category.includes("世界選手権")
		) {
			return <Calendar className="w-3 h-3" />;
		}
		return <Clock className="w-3 h-3" />;
	};

	return (
		<Link to={`/news/${article.id}`} className="block h-full">
			<Card
				className="group overflow-hidden cursor-pointer h-full flex flex-col transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 cursor-target"
				style={{
					animationDelay: `${index * 100}ms`,
				}}
			>
				{/* Enhanced image placeholder with dynamic gradients */}
				<div className="relative h-56 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-bland/20 via-cream-tan/10 to-bland/5 group-hover:from-bland/30 group-hover:via-cream-tan/20 group-hover:to-bland/10 transition-all duration-500"></div>

					{/* Animated background pattern */}
					<div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
						<div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-safari/30 rounded-full animate-pulse [animation-delay:500ms]"></div>
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-bland/20 rounded-lg rotate-45 [animation:spin-slow_8s_linear_infinite]"></div>
					</div>

					{/* Category icon with enhanced styling */}
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="p-4 rounded-2xl bg-background/20 backdrop-blur-sm border border-bland/20 group-hover:scale-110 transition-transform duration-300">
							{getTabIcon(article.type)}
						</div>
					</div>

					{/* Gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent"></div>
				</div>

				<CardHeader className="pb-4 flex-grow relative">
					<div className="flex items-center justify-between mb-3">
						<Badge
							variant="secondary"
							className="gap-2 bg-gradient-to-r from-bland to-sirocco text-cannoli-cream hover:from-bland/90 hover:to-sirocco/90 border-0 shadow-lg px-3 py-1"
						>
							{getCategoryIcon(article.category)}
							{article.category}
						</Badge>
						<Badge
							variant="outline"
							className="gap-1 text-xs px-3 py-1 bg-background/50 backdrop-blur-sm border-safari/50"
						>
							<Calendar className="w-3 h-3" />
							{new Date(article.date).toLocaleDateString("ja-JP")}
						</Badge>
					</div>
					<CardTitle className="text-xl font-bold leading-tight group-hover:text-bland transition-colors duration-300 line-clamp-2">
						{article.title}
					</CardTitle>
				</CardHeader>

				<CardContent className="pt-0">
					<CardDescription className="text-sm leading-relaxed mb-6 text-muted-foreground line-clamp-3">
						{article.summary}
					</CardDescription>

					{/* Enhanced read more indicator */}
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-1 text-xs text-muted-foreground">
							<Clock className="w-3 h-3" />
							<span>3分</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}
