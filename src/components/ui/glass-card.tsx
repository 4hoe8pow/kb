type GlassCardProps = {
	title: string;
	description?: React.ReactNode;
	footer?: React.ReactNode;
	className?: string;
};

const GlassCard = ({
	title,
	description,
	footer,
	className,
}: GlassCardProps) => {
	return (
		<div
			className={`p-5 rounded-2xl bg-white/5 border border-white/6 backdrop-blur-sm ${className ?? ""}`}
		>
			<h3 className="font-semibold text-lg text-white">{title}</h3>
			{description && (
				<div className="mt-2 text-sm text-slate-300">{description}</div>
			)}
			{footer && <div className="mt-4">{footer}</div>}
		</div>
	);
};

export default GlassCard;
