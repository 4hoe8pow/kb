import { useEffect } from "react";

export const usePageTitle = (title: string) => {
	useEffect(() => {
		const previousTitle = document.title;
		document.title = title;

		// クリーンアップ関数で元のタイトルに戻す
		return () => {
			document.title = previousTitle;
		};
	}, [title]);
};
