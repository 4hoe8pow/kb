import { Check, Copy } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

// KaTeX/highlight.jsのCSSを動的ロード
if (typeof window !== "undefined") {
	// highlight.js CSS
	const highlightLink = document.createElement("link");
	highlightLink.rel = "stylesheet";
	highlightLink.href =
		"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css";
	document.head.appendChild(highlightLink);

	// KaTeX CSS
	const katexLink = document.createElement("link");
	katexLink.rel = "stylesheet";
	katexLink.href =
		"https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css";
	document.head.appendChild(katexLink);
}

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface CodeProps {
	children: React.ReactNode;
	className?: string;
}

interface MarkdownContentProps {
	content: string;
	className?: string;
}

function CodeBlock({ children, className }: CodeProps) {
	const [copied, setCopied] = useState(false);

	// Recursively extract text content from React nodes
	const extractTextContent = (node: React.ReactNode): string => {
		if (typeof node === "string") {
			return node;
		}
		if (typeof node === "number") {
			return String(node);
		}
		if (Array.isArray(node)) {
			return node.map(extractTextContent).join("");
		}
		if (
			node &&
			typeof node === "object" &&
			"props" in node &&
			node.props &&
			typeof node.props === "object" &&
			"children" in node.props
		) {
			return extractTextContent(
				(node.props as { children: React.ReactNode }).children,
			);
		}
		return "";
	};

	const codeContent = extractTextContent(children);

	const language =
		className?.replace("language-", "").replace("hljs ", "") || "text";

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(codeContent);
			setCopied(true);
			setTimeout(() => setCopied(false), 1600);
		} catch (err) {
			console.error("Failed to copy code:", err);
		}
	};

	return (
		<div className="relative group my-6">
			{/* File tab header */}
			<div className="flex items-start">
				<div className="inline-flex items-center gap-2 bg-chocolate-martini px-4 py-2 rounded-t-lg border-t border-l border-r border-baltic-amber relative">
					<div className="w-2 h-2 rounded-full bg-destructive"></div>
					<div className="w-2 h-2 rounded-full bg-chanterelle"></div>
					<div className="w-2 h-2 rounded-full bg-safari"></div>
					<span className="text-sm font-mono text-cream-tan ml-2">
						{language}
					</span>
					<button
						type="button"
						onClick={copyToClipboard}
						className="flex items-center gap-1 px-2 py-1 text-xs bg-baltic-amber hover:bg-sirocco text-cannoli-cream rounded transition-colors opacity-0 group-hover:opacity-100 ml-4"
					>
						{copied ? (
							<>
								<Check className="w-3 h-3" />
								Copied
							</>
						) : (
							<>
								<Copy className="w-3 h-3" />
								Copy
							</>
						)}
					</button>
				</div>
			</div>
			{/* Code content */}
			<pre className="bg-chocolate-martini/90 p-4 overflow-x-auto border border-baltic-amber border-t-0 rounded-b-lg rounded-tr-lg max-w-full">
				<code className={cn(className, "break-words whitespace-pre-wrap")}>
					{children}
				</code>
			</pre>
		</div>
	);
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
	return (
		<div
			className={cn(
				"prose prose-lg max-w-full text-foreground/90 overflow-hidden",
				"prose-p:leading-[1.8] prose-p:text-[16px] prose-p:mb-6 prose-p:text-foreground/80 prose-p:break-words",
				"prose-headings:text-foreground prose-headings:font-semibold prose-headings:tracking-tight prose-headings:break-words",
				"prose-h1:text-3xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:first:mt-0",
				"prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-10",
				"prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8",
				"prose-h4:text-lg prose-h4:mb-3 prose-h4:mt-6",
				"prose-ul:my-6 prose-ol:my-6 prose-li:my-1 prose-li:text-foreground/80",
				"prose-blockquote:border-l-2 prose-blockquote:border-primary/40 prose-blockquote:pl-6 prose-blockquote:py-2",
				"prose-blockquote:bg-muted/30 prose-blockquote:rounded-r-md prose-blockquote:not-italic prose-blockquote:text-foreground/70",
				"prose-code:bg-cream-tan dark:prose-code:bg-chocolate-martini prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:font-mono prose-code:text-sirocco dark:prose-code:text-safari prose-code:break-words",
				"prose-strong:text-foreground prose-strong:font-semibold",
				"prose-em:text-foreground/70 prose-em:not-italic prose-em:font-medium",
				className,
			)}
		>
			<ReactMarkdown
				remarkPlugins={[remarkGfm, remarkMath]}
				rehypePlugins={[rehypeRaw, rehypeKatex, rehypeHighlight]}
				components={{
					h1: ({ children }) => (
						<h1 className="text-3xl font-semibold mb-8 mt-12 first:mt-0 text-foreground tracking-tight">
							{children}
						</h1>
					),
					h2: ({ children }) => (
						<h2 className="text-2xl font-semibold mb-6 mt-10 text-foreground tracking-tight">
							{children}
						</h2>
					),
					h3: ({ children }) => (
						<h3 className="text-xl font-semibold mb-4 mt-8 text-foreground tracking-tight">
							{children}
						</h3>
					),
					h4: ({ children }) => (
						<h4 className="text-lg font-semibold mb-3 mt-6 text-foreground tracking-tight">
							{children}
						</h4>
					),
					p: ({ children }) => (
						<p className="mb-6 leading-[1.8] text-[16px] text-foreground/80">
							{children}
						</p>
					),
					ul: ({ children }) => (
						<ul className="space-y-2 my-6 ml-6">{children}</ul>
					),
					ol: ({ children }) => (
						<ol className="space-y-2 my-6 ml-6">{children}</ol>
					),
					li: ({ children }) => (
						<li className="leading-[1.7] text-foreground/80 relative before:content-['•'] before:text-primary before:font-bold before:absolute before:-left-4">
							{children}
						</li>
					),
					strong: ({ children }) => (
						<strong className="font-semibold text-foreground">
							{children}
						</strong>
					),
					em: ({ children }) => (
						<em className="font-medium text-foreground/70 not-italic">
							{children}
						</em>
					),
					blockquote: ({ children }) => (
						<blockquote className="border-l-2 border-primary/40 pl-6 py-2 my-8 bg-muted/30 rounded-r-md text-foreground/70">
							{children}
						</blockquote>
					),
					pre: ({ children }) => {
						const codeElement = Array.isArray(children)
							? children[0]
							: children;

						if (
							codeElement &&
							typeof codeElement === "object" &&
							"props" in codeElement
						) {
							const props = codeElement.props as CodeProps;
							return (
								<CodeBlock className={props.className}>
									{props.children}
								</CodeBlock>
							);
						}

						return <pre>{children}</pre>;
					},
					table: ({ children }) => (
						<div className="my-8 overflow-x-auto max-w-full">
							<Table>{children}</Table>
						</div>
					),
					thead: ({ children }) => <TableHeader>{children}</TableHeader>,
					tbody: ({ children }) => <TableBody>{children}</TableBody>,
					tr: ({ children }) => <TableRow>{children}</TableRow>,
					th: ({ children }) => <TableHead>{children}</TableHead>,
					td: ({ children }) => <TableCell>{children}</TableCell>,
					hr: () => <hr className="my-12 border-t border-border/30" />,
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
}
