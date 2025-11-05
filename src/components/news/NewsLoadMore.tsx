import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsLoadMoreProps {
	onLoadMore?: () => void;
}

export function NewsLoadMore({ onLoadMore }: NewsLoadMoreProps) {
	return (
		<div className="mt-20 text-center">
			<div className="relative inline-block">
				<Button
					size="lg"
					variant="outline"
					onClick={onLoadMore}
					className="group relative gap-3 px-8 py-4 border-2 border-bland/20 hover:border-bland bg-background/50 backdrop-blur-sm hover:bg-bland hover:text-cannoli-cream transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
				>
					<span className="font-semibold">さらに読み込む</span>
					<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
				</Button>
			</div>
		</div>
	);
}
