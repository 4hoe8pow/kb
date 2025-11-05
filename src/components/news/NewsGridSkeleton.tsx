import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { TabType } from "@/lib/tabConfig";

interface NewsGridSkeletonProps {
	activeTab: TabType;
}

export function NewsGridSkeleton({ activeTab }: NewsGridSkeletonProps) {
	return (
		<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{Array.from({ length: 6 }, (_, i) => `skeleton-${activeTab}-${i}`).map(
				(skeletonId) => (
					<Card key={skeletonId} className="overflow-hidden animate-pulse">
						<div className="h-56 bg-gradient-to-br from-muted to-muted/50"></div>
						<CardHeader>
							<div className="flex gap-2 mb-3">
								<div className="h-6 w-20 bg-muted rounded-full"></div>
								<div className="h-6 w-16 bg-muted rounded-full"></div>
							</div>
							<div className="h-6 w-full bg-muted rounded mb-2"></div>
							<div className="h-4 w-3/4 bg-muted rounded"></div>
						</CardHeader>
						<CardContent>
							<div className="space-y-2">
								<div className="h-4 w-full bg-muted rounded"></div>
								<div className="h-4 w-5/6 bg-muted rounded"></div>
							</div>
						</CardContent>
					</Card>
				),
			)}
		</div>
	);
}
