type GlassCardProps = {
	title: string;
	description?: React.ReactNode;
	footer?: React.ReactNode;
};

const GlassCard = ({ title, description, footer }: GlassCardProps) => {
	return (
		<div
			className={
				"rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm p-2 md:p-4"
			}
		>
			<h3 className="font-semibold text-lg">{title}</h3>
			{description && (
				<div className="mt-2 text-sm opacity-80">{description}</div>
			)}
			{footer && <div className="text-right">{footer}</div>}
		</div>
	);
};

export default GlassCard;
