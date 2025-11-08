import { Outlet } from "react-router-dom";
import { SiteFooter } from "./components/SiteFooter";

export default function Layout() {
	return (
		<div className="flex flex-col">
			<main>
				<Outlet />
			</main>
			<SiteFooter />
		</div>
	);
}
