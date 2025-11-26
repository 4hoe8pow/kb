import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadingFallback } from "./components/LoadingFallback.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import Layout from "./Layout.tsx";

// HeroPageは即座にロード（FCP/LCP改善）
import HeroPage from "./routes/HeroPage.tsx";

// その他のルートは遅延ロード
const HowToPlayPage = lazy(() => import("./routes/HowToPlayPage.tsx"));
const HisroryPage = lazy(() => import("./routes/HistoryPage.tsx"));
const NewsPage = lazy(() => import("./routes/NewsPage.tsx"));
const NewsArticlePage = lazy(() => import("./routes/NewsArticlePage.tsx"));
const LegalPage = lazy(() => import("./routes/LegalPage.tsx"));
const PrivacyPage = lazy(() => import("./routes/PrivacyPage.tsx"));
const KitanHellKabaddiPage = lazy(
	() => import("./routes/KitanHellKabaddiPage.tsx"),
);
const NotFound = lazy(() => import("./components/NotFound"));

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(
	<StrictMode>
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<BrowserRouter>
				<Suspense fallback={<LoadingFallback />}>
					<Routes>
						<Route element={<Layout />}>
							<Route index element={<HeroPage />} />
							<Route path="how-to-play" element={<HowToPlayPage />} />
							<Route path="history" element={<HisroryPage />} />
							<Route path="news" element={<NewsPage />} />
							<Route path="news/:articleId" element={<NewsArticlePage />} />
							<Route path="legal" element={<LegalPage />} />
							<Route path="privacy" element={<PrivacyPage />} />
							<Route
								path="special/animation"
								element={<KitanHellKabaddiPage />}
							/>
							<Route path="*" element={<NotFound />} />
						</Route>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>,
);
