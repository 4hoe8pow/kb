import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import FuzzyText from "./FuzzyText";

export default function NotFound() {
	usePageTitle("404 - ページが見つかりません | KABADDI TIMES");
	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-primary text-primary-foreground">
			<Link to="/">
				<FuzzyText baseIntensity={0.2}>404</FuzzyText>
			</Link>
		</div>
	);
}
