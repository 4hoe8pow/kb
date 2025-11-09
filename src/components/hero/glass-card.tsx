type GlassCardProps = {
	title: string;
	description?: React.ReactNode;
	footer?: React.ReactNode;
};

const GlassCard = ({ title, description, footer }: GlassCardProps) => {
	return (
		<div
			className={
				"rounded-2xl bg-cream-tan/30 dark:bg-white/5 border border-sirocco/20 dark:border-white/10 backdrop-blur-sm p-2 md:p-4"
			}
		>
			<h3 className="font-semibold text-lg text-chocolate-martini dark:text-cream-tan">
				{title}
			</h3>
			{description && (
				<div className="mt-2 text-sm text-chocolate-martini/80 dark:text-cream-tan/80">
					{description}
				</div>
			)}
			{footer && (
				<div className="text-right text-chocolate-martini dark:text-cream-tan">
					{footer}
				</div>
			)}
		</div>
	);
};

export default GlassCard;
