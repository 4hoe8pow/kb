import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function NotFound() {
	usePageTitle("404 - ページが見つかりません | KABADDI TIMES");

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-primary text-primary-foreground">
			<Link to="/">404</Link>
		</div>
	);
}
