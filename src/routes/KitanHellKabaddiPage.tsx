import { CharacterSection } from "@/components/special/kitan/CharacterSection";
import { FooterCTASection } from "@/components/special/kitan/FooterCTASection";
import { HeroSection } from "@/components/special/kitan/HeroSection";
import { WorldviewSection } from "@/components/special/kitan/WorldviewSection";
import { usePageTitle } from "@/hooks/usePageTitle";

const KitanHellKabaddiPage = () => {
	usePageTitle("奇譚ヘルカバディ");

	return (
		<div className="relative bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 dark:from-stone-950 dark:via-stone-900 dark:to-stone-800 text-stone-900 dark:text-stone-50 transition-colors duration-500">
			<HeroSection />
			<WorldviewSection />
			<CharacterSection />
			<FooterCTASection />
		</div>
	);
};

export default KitanHellKabaddiPage;
