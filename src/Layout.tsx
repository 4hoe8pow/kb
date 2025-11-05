import { Outlet } from "react-router-dom";
import { SiteFooter } from "./components/SiteFooter";

export default function Layout() {
	return (
		<>
			<Outlet />
			<SiteFooter />
		</>
	);
}
