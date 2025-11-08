import FadeContent from "../FadeContent";
import { SectionHeader } from "./section-header";

export type InternationalResult = {
	year: string;
	event: string;
	location: string;
	outcome: string;
};

export type InternationalResultsSectionProps = {
	results: InternationalResult[];
};

export const InternationalResultsSection = ({
	results,
}: InternationalResultsSectionProps) => {
	return (
		<FadeContent
			blur={true}
			duration={1000}
			easing="ease-out"
			initialOpacity={0}
			className="w-full"
		>
			<section className="rounded-2xl bg-cannoli-cream/90 dark:bg-chocolate-martini/90 border border-safari/20 dark:border-baltic-amber/70 p-6 shadow-sm text-chocolate-martini dark:text-cannoli-cream">
				<SectionHeader
					kicker="International Stage"
					title="日本代表の国際大会出場実績"
					intro="アジア競技大会での出場と成果を一覧化し、競技力強化の節目を把握します。"
				/>
				<div className="overflow-x-auto rounded-lg border border-safari/20 dark:border-baltic-amber/70 bg-cannoli-cream/95 dark:bg-chocolate-martini/95 shadow-sm mt-4">
					<table className="w-full table-auto text-sm font-body">
						<thead>
							<tr className="bg-transparent">
								<th className="px-4 py-3 text-left text-xs uppercase tracking-wide text-sirocco dark:text-cream-tan whitespace-nowrap">
									年
								</th>
								<th className="px-4 py-3 text-left text-xs uppercase tracking-wide text-sirocco dark:text-cream-tan">
									大会
								</th>
								<th className="px-4 py-3 text-left text-xs uppercase tracking-wide text-sirocco dark:text-cream-tan whitespace-nowrap">
									開催地
								</th>
								<th className="px-4 py-3 text-left text-xs uppercase tracking-wide text-sirocco dark:text-cream-tan">
									日本代表の成果
								</th>
							</tr>
						</thead>
						<tbody>
							{results.map((result) => (
								<tr
									key={result.year}
									className="border-b border-cream-tan/20 dark:border-baltic-amber/70 odd:bg-cream-tan/50 dark:odd:bg-chocolate-martini/50"
								>
									<td className="px-4 py-3 whitespace-nowrap">{result.year}</td>
									<td className="px-4 py-3">{result.event}</td>
									<td className="px-4 py-3 whitespace-nowrap">
										{result.location}
									</td>
									<td className="px-4 py-3">{result.outcome}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</FadeContent>
	);
};
