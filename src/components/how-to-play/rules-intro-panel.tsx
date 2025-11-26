import FadeContent from "../FadeContent";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export interface RulesIntroStat {
	value: string;
	label: string;
}

export interface RulesIntroPanelProps {
	accentLabel: string;
	title: string;
	copy: string;
	stats: RulesIntroStat[];
}

export const RulesIntroPanel = (props: RulesIntroPanelProps) => {
	const { accentLabel, title, copy, stats } = props;

	return (
		<FadeContent blur duration={800} delay={200}>
			<Card className="w-full bg-card/95 backdrop-blur-sm border shadow-2xl">
				<div className="flex flex-col md:flex-row items-start gap-8 p-8">
					<div className="flex-1 space-y-4">
						<CardHeader className="p-0 space-y-3">
							<p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
								{accentLabel}
							</p>
							<h2 className="text-3xl md:text-4xl font-bold text-card-foreground leading-tight">
								{title}
							</h2>
						</CardHeader>
						<CardContent className="p-0">
							<p className="text-lg text-muted-foreground leading-relaxed">
								{copy}
							</p>
						</CardContent>
					</div>
					<CardFooter className="p-0 mt-6 md:mt-0 md:ml-4">
						<div className="flex flex-wrap gap-3 md:flex-col md:gap-4">
							{stats.map((stat) => (
								<Badge
									key={stat.label}
									className="flex flex-col gap-2 p-4 h-auto min-w-[120px] bg-gradient-to-br from-card/80 to-card/60 hover:from-card/90 hover:to-card/70 transition-all duration-300 border-safari/50 shadow-sm hover:shadow-md"
									role="img"
									aria-label={`${stat.label}: ${stat.value}`}
								>
									<span className="text-2xl md:text-3xl font-bold text-card-foreground bg-gradient-to-r from-bland to-sirocco bg-clip-text text-transparent">
										{stat.value}
									</span>
									<span className="text-xs uppercase tracking-wide text-muted-foreground font-medium">
										{stat.label}
									</span>
								</Badge>
							))}
						</div>
					</CardFooter>
				</div>
			</Card>
		</FadeContent>
	);
};
