import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { DockItemData } from "@/components/Dock";
import Dock from "@/components/Dock";
import { Button } from "@/components/ui/button";
import { getTabConfig, TAB_CONFIGS, type TabType } from "@/lib/tabConfig";

interface NewsTabNavigationProps {
	activeTab: TabType;
	onTabChange: (tab: TabType) => void;
}

export function NewsTabNavigation({
	activeTab,
	onTabChange,
}: NewsTabNavigationProps) {
	const [hoveredTab, setHoveredTab] = useState<TabType | null>(null);
	const [isTabChanging, setIsTabChanging] = useState(false);

	const handleTabChange = (tab: TabType) => {
		if (tab !== activeTab) {
			setIsTabChanging(true);
			onTabChange(tab);
			// Reset animation state after animation completes
			setTimeout(() => setIsTabChanging(false), 800);
		}
	};

	const getTabIcon = (tabId: TabType) => {
		const config = getTabConfig(tabId);
		const IconComponent = config.icon;
		return <IconComponent className="w-5 h-5" />;
	};

	// Dockアイテムの準備
	const dockItems: DockItemData[] = TAB_CONFIGS.map((tab) => {
		const IconComponent = tab.icon;
		return {
			id: tab.id,
			icon: <IconComponent className="w-6 h-6 text-white" />,
			label: tab.label,
			onClick: () => handleTabChange(tab.id),
			className: activeTab === tab.id ? "ring-2 ring-primary" : "",
		};
	});

	return (
		<>
			{/* モバイル用Dock */}
			<div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
				<Dock
					items={dockItems}
					magnification={60}
					distance={150}
					panelHeight={64}
					baseItemSize={44}
				/>
			</div>

			{/* デスクトップ用タブナビゲーション */}
			<motion.div
				className="relative mb-6 md:mb-20 hidden md:block"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<motion.div className="flex flex-nowrap justify-center gap-1.5 md:gap-6 p-1.5 md:p-3 tab-nav-bg backdrop-blur-md rounded-xl md:rounded-3xl border border-border/50 shadow-2xl overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
					{TAB_CONFIGS.map((tab, index) => {
						const isActive = activeTab === tab.id;
						const isHovered = hoveredTab === tab.id;

						return (
							<motion.div
								key={tab.id}
								initial={{ opacity: 0, y: 20, scale: 0.9 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								transition={{
									duration: 0.5,
									ease: "easeOut",
									delay: index * 0.1,
								}}
								whileHover={{
									scale: 1.05,
									y: -2,
									transition: { duration: 0.2 },
								}}
								whileTap={{
									scale: 0.98,
									transition: { duration: 0.1 },
								}}
								onHoverStart={() => setHoveredTab(tab.id)}
								onHoverEnd={() => setHoveredTab(null)}
								className="relative"
							>
								<Button
									variant="ghost"
									size="lg"
									onClick={() => handleTabChange(tab.id)}
									className={`
									relative flex items-center gap-2 md:gap-3 h-auto py-2 md:py-4 px-2 md:px-6 rounded-lg md:rounded-2xl
									overflow-hidden border md:border-2 transition-all duration-300 cursor-target shrink-0
									${
										isActive
											? "bg-gradient-to-br from-bland to-sirocco text-cannoli-cream font-bold shadow-xl md:shadow-2xl shadow-bland/30 border-bland/50"
											: "text-muted-foreground hover:bg-gradient-to-br hover:from-background/90 hover:to-background/70 hover:text-foreground border-transparent hover:border-border/30"
									}
								`}
								>
									{/* Tab change celebration effect */}
									<AnimatePresence>
										{isActive && isTabChanging && (
											<motion.div
												className="absolute inset-0 bg-gradient-to-br from-bland/30 to-chanterelle/10 rounded-2xl"
												initial={{ opacity: 0, scale: 0.8 }}
												animate={{
													opacity: [0, 1, 0],
													scale: [0.8, 1.2, 1],
												}}
												exit={{ opacity: 0 }}
												transition={{
													duration: 0.8,
													ease: "easeOut",
												}}
											/>
										)}
									</AnimatePresence>
									{/* Hover effect background - only show on hover */}
									<AnimatePresence>
										{isHovered && !isActive && (
											<motion.div
												className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl"
												initial={{ opacity: 0, scale: 0.8 }}
												animate={{ opacity: 1, scale: 1 }}
												exit={{ opacity: 0, scale: 0.8 }}
												transition={{ duration: 0.2 }}
											/>
										)}
									</AnimatePresence>

									<motion.div
										className={`relative p-1.5 md:p-3 rounded-lg md:rounded-xl transition-all duration-300 ${
											isActive
												? "bg-cannoli-cream/20 shadow-lg"
												: "bg-muted/50 group-hover:bg-muted/70"
										}`}
										animate={
											isActive && isTabChanging
												? { scale: [1, 1.3, 1], rotate: [0, 360, 0] }
												: isHovered && !isActive
													? { rotate: [0, -5, 5, 0], scale: 1.05 }
													: { rotate: 0, scale: 1 }
										}
										transition={{
											duration: isActive && isTabChanging ? 0.8 : 0.4,
											ease: "easeInOut",
										}}
									>
										<div className="w-4 h-4 md:w-5 md:h-5 [&>svg]:w-full [&>svg]:h-full">
											{getTabIcon(tab.id)}
										</div>
									</motion.div>

									<div className="relative text-left z-10 hidden md:block">
										<motion.div
											className="text-base font-bold"
											animate={{
												scale: isActive ? 1.05 : 1,
											}}
											transition={{ duration: 0.2 }}
										>
											{tab.label}
										</motion.div>
										<motion.div
											className="text-xs opacity-80"
											animate={{
												opacity: isActive ? 1 : 0.8,
												y: isActive ? -1 : 0,
											}}
											transition={{ duration: 0.2 }}
										>
											{tab.description}
										</motion.div>
									</div>

									{/* Active indicator - static */}
									<AnimatePresence>
										{isActive && (
											<motion.div
												className="absolute -bottom-1 md:-bottom-2 left-1/2 -translate-x-1/2"
												initial={{ opacity: 0, scale: 0 }}
												animate={{
													opacity: 1,
													scale: 1,
												}}
												exit={{ opacity: 0, scale: 0 }}
												transition={{
													duration: 0.3,
													ease: "easeOut",
												}}
											>
												<div className="w-2 h-2 md:w-3 md:h-3 bg-bland rounded-full shadow-lg" />
											</motion.div>
										)}
									</AnimatePresence>
								</Button>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</>
	);
}
