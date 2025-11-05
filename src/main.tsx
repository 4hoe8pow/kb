import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import { ThemeProvider } from "./components/theme-provider.tsx";
import Layout from "./Layout.tsx";
import HeroPage from "./routes/HeroPage.tsx";
import HisroryPage from "./routes/HistoryPage.tsx";
import HowToPlayPage from "./routes/HowToPlayPage.tsx";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(
	<StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<HeroPage />} />
						<Route path="how-to-play" element={<HowToPlayPage />} />
						<Route path="history" element={<HisroryPage />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>,
);
