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

// 全記事を動的にインポート
const articleModules = import.meta.glob<string>("@/assets/articles/*.md", {
	query: "?raw",
	import: "default",
	eager: true,
});

// 全記事を読み込む関数
export async function loadAllArticles(): Promise<NewsItem[]> {
	try {
		const articles: NewsItem[] = [];

		for (const [path, content] of Object.entries(articleModules)) {
			try {
				const { frontMatter, content: articleContent } =
					parseFrontMatter(content);

				articles.push({
					...frontMatter,
					content: articleContent,
				});
			} catch (error) {
				console.error(`Error parsing article at ${path}:`, error);
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

// IDで記事を取得する関数
export async function getArticleById(id: string): Promise<NewsItem | null> {
	const allArticles = await loadAllArticles();
	return allArticles.find((article) => article.id === id) || null;
}
