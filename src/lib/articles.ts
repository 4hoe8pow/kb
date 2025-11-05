import type { TabType } from "./tabConfig";

export interface NewsItem {
	id: string;
	title: string;
	summary: string;
	date: string;
	category: string;
	type: TabType;
	author: string;
	readingTime: string;
	content?: string;
}

interface ArticleFrontMatter {
	id: string;
	title: string;
	summary: string;
	date: string;
	category: string;
	type: TabType;
	author: string;
	readingTime: string;
}

// フロントマターとコンテンツを分離する関数
function parseFrontMatter(content: string): {
	frontMatter: ArticleFrontMatter;
	content: string;
} {
	const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
	const match = content.match(frontMatterRegex);

	if (!match) {
		throw new Error("Invalid markdown format: missing front matter");
	}

	const [, frontMatterStr, articleContent] = match;
	const frontMatter: Partial<ArticleFrontMatter> = {};

	// フロントマターをパース
	frontMatterStr.split("\n").forEach((line) => {
		const colonIndex = line.indexOf(":");
		if (colonIndex > 0) {
			const key = line.substring(0, colonIndex).trim();
			const value = line
				.substring(colonIndex + 1)
				.trim()
				.replace(/^["']|["']$/g, "");
			(frontMatter as Record<string, string>)[key] = value;
		}
	});

	// Markdownコンテンツを正規化（改行の統一など）
	const normalizedContent = articleContent
		.trim()
		.replace(/\r\n/g, "\n") // Windows改行をUnix改行に統一
		.replace(/\n{3,}/g, "\n\n"); // 3つ以上の連続改行を2つに統一

	return {
		frontMatter: frontMatter as ArticleFrontMatter,
		content: normalizedContent,
	};
}

// 記事ファイルを静的にインポート
import domestic001 from "@/assets/articles/domestic-001.md?raw";
import domestic002 from "@/assets/articles/domestic-002.md?raw";
import global001 from "@/assets/articles/global-001.md?raw";
import insights001 from "@/assets/articles/insights-001.md?raw";
import insights002 from "@/assets/articles/insights-002.md?raw";
import lab001 from "@/assets/articles/lab-001.md?raw";
import lab002 from "@/assets/articles/lab-002.md?raw";

// 全記事を読み込む関数
export async function loadAllArticles(): Promise<NewsItem[]> {
	try {
		const articleContents = [
			domestic001,
			domestic002,
			global001,
			insights001,
			insights002,
			lab001,
			lab002,
		];

		const articles: NewsItem[] = [];

		for (const content of articleContents) {
			try {
				const { frontMatter, content: articleContent } =
					parseFrontMatter(content);

				articles.push({
					...frontMatter,
					content: articleContent,
				});
			} catch (error) {
				console.error("Error parsing article:", error);
			}
		}

		// 日付順でソート（新しい順）
		return articles.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
		);
	} catch (error) {
		console.error("Error loading articles:", error);
		return [];
	}
}

// タイプ別に記事を取得する関数
export async function getArticlesByType(type: TabType): Promise<NewsItem[]> {
	const allArticles = await loadAllArticles();
	return allArticles.filter((article) => article.type === type);
}
