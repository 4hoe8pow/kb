import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ActionButtonProps {
	to: string;
	icon: LucideIcon;
	text: string;
	primary?: boolean;
	ariaLabel: string;
}

const ActionButton = ({
	to,
	icon: Icon,
	text,
	primary = false,
	ariaLabel,
}: ActionButtonProps) => {
	if (primary) {
		return (
			<Link
				to={to}
				className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-chocolate-martini via-baltic-amber to-sirocco dark:from-safari dark:via-chanterelle dark:to-bland rounded-xl font-semibold shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
				aria-label={ariaLabel}
			>
				<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
				<Icon
					className="w-5 h-5 text-cannoli-cream dark:text-chocolate-martini relative z-10"
					role="img"
					aria-hidden={false}
				/>
				<span className="relative z-10 text-cannoli-cream dark:text-chocolate-martini">
					{text}
				</span>
			</Link>
		);
	}

	return (
		<Link
			to={to}
			className="group relative inline-flex items-center gap-2 px-5 py-4 border border-sirocco/30 dark:border-cannoli-cream/20 rounded-xl text-sm overflow-hidden transition-all duration-300 hover:border-sirocco/50 dark:hover:border-cannoli-cream/40 hover:shadow-md"
			aria-label={ariaLabel}
		>
			<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
			<Icon
				className="w-4 h-4 text-chocolate-martini dark:text-cream-tan relative z-10"
				role="img"
				aria-hidden={false}
			/>
			<span className="relative z-10 text-chocolate-martini dark:text-cream-tan">
				{text}
			</span>
		</Link>
	);
};

export default ActionButton;
