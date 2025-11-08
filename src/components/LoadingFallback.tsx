import { memo } from "react";

// 超軽量なローディングコンポーネント（ルート遅延ロード用）
// Spinnerコンポーネントを使わずにCSSのみで実装
export const LoadingFallback = memo(() => (
	<div
		style={{
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: "100vh",
			flexDirection: "column",
			gap: "1rem",
		}}
	>
		<div
			style={{
				width: "2rem",
				height: "2rem",
				border: "3px solid rgba(0, 0, 0, 0.1)",
				borderTopColor: "currentColor",
				borderRadius: "50%",
				animation: "spin 1s linear infinite",
			}}
		/>
		<p style={{ fontSize: "0.875rem", opacity: 0.6 }}>Loading...</p>
		<style>{`
			@keyframes spin {
				to { transform: rotate(360deg); }
			}
		`}</style>
	</div>
));

LoadingFallback.displayName = "LoadingFallback";
