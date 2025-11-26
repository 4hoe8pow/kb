import { Outlet } from "react-router-dom";
import { SiteFooter } from "./components/SiteFooter";

export default function Layout() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1">
				<Outlet />
			</main>
			<SiteFooter />
		</div>
	);
}
