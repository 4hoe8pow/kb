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
		<section className="about-section about-section--table">
			<SectionHeader
				kicker="International Stage"
				title="日本代表の国際大会出場実績"
				intro="アジア競技大会での出場と成果を一覧化し、競技力強化の節目を把握します。"
			/>
			<div className="about-table-wrap">
				<table className="about-table">
					<thead>
						<tr>
							<th scope="col">年</th>
							<th scope="col">大会</th>
							<th scope="col">開催地</th>
							<th scope="col">日本代表の成果</th>
						</tr>
					</thead>
					<tbody>
						{results.map((result) => (
							<tr key={result.year}>
								<td>{result.year}</td>
								<td>{result.event}</td>
								<td>{result.location}</td>
								<td>{result.outcome}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};
