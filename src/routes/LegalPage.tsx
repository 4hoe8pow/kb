import { usePageTitle } from "@/hooks/usePageTitle";

function LegalPage() {
	usePageTitle("編集方針・引用規約 - KABADDI TIMES");
	window.scrollTo({ top: 0, behavior: "instant" });

	return (
		<main className="relative font-body overflow-hidden bg-background">
			{/* 外側コンテナ: 基準単位 24px (1.5rem) */}
			<div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl">
				{/* メインカード: 内側パディング 白銀比 24px → 34px */}
				<div className="bg-card border border-border rounded-lg shadow-sm px-8 py-12 md:px-12 md:py-16">
					{/* ヘッダー: マージン 白銀比 24px → 34px → 48px */}
					<header className="text-center mb-16 pb-12 border-b border-border">
						<h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
							編集方針・引用規約
						</h1>
						<div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground space-y-3 md:space-y-0">
							<div>制定日：2025年11月6日</div>
							<div>バージョン：v1.0</div>
						</div>
					</header>

					{/* コンテンツエリア: セクション間隔 白銀比 24px → 34px */}
					<div className="space-y-14">
						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								1. 基本原則
							</h2>
							<div className="bg-muted/30 p-8 rounded-md border-l-4 border-primary">
								<p className="leading-8 text-base">
									KABADDI
									TIMES（以下「当サイト」）は、公益性を有するスポーツ報道の目的に基づき、
									日本カバディ協会（以下「協会」）その他公的機関が公表した情報を引用することがある。
									当サイトは、引用に際し著作権法・肖像権・パブリシティ権その他関連法令を遵守する。
								</p>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								2. 引用の原則と要件
							</h2>
							<p className="mb-10 leading-8 text-base">
								当サイトが協会発表情報を引用する場合、以下の条件をすべて満たすものとする。
							</p>
							{/* 要件カード間隔: 白銀比 17px → 24px */}
							<div className="space-y-6">
								<div className="bg-card border border-border rounded-md p-7">
									<h4 className="font-semibold text-foreground mb-5 flex items-center">
										<span className="bg-bland text-cannoli-cream rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4">
											1
										</span>
										公表済み資料に限ること
									</h4>
									<p className="text-muted-foreground ml-11 leading-7">
										公式Webサイト、プレスリリース、試合結果速報、広報誌、認定SNSアカウント等、
										一般にアクセス可能な形で公表された情報に限定する。
									</p>
								</div>
								<div className="bg-card border border-border rounded-md p-7">
									<h4 className="font-semibold text-foreground mb-5 flex items-center">
										<span className="bg-bland text-cannoli-cream rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4">
											2
										</span>
										引用の目的が報道・批評・研究であること
									</h4>
									<p className="text-muted-foreground ml-11 leading-7">
										単なる転載・再配信ではなく、独自の編集意図（分析・考察・紹介・比較等）を伴う。
									</p>
								</div>
								<div className="bg-card border border-border rounded-md p-7">
									<h4 className="font-semibold text-foreground mb-5 flex items-center">
										<span className="bg-bland text-cannoli-cream rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4">
											3
										</span>
										引用部分は必要最小限とすること
									</h4>
									<p className="text-muted-foreground ml-11 leading-7">
										リザルト表・スコア・選手名等は必要範囲内に留め、資料全体の転載を行わない。
									</p>
								</div>
								<div className="bg-card border border-border rounded-md p-7">
									<h4 className="font-semibold text-foreground mb-5 flex items-center">
										<span className="bg-bland text-cannoli-cream rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4">
											4
										</span>
										出典を明示すること
									</h4>
									<p className="text-muted-foreground ml-11 leading-7">
										記事内または文末に「出典：日本カバディ協会公式サイト（URL）」等を明示し、
										可能な限り一次ソースへのリンクを付す。
									</p>
								</div>
								<div className="bg-card border border-border rounded-md p-7">
									<h4 className="font-semibold text-foreground mb-5 flex items-center">
										<span className="bg-bland text-cannoli-cream rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4">
											5
										</span>
										引用部分が従であること
									</h4>
									<p className="text-muted-foreground ml-11 leading-7">
										引用情報が記事本文の主題や論旨を補完する目的に留まり、
										当サイト独自の解説・文脈が主要部分となるよう構成する。
									</p>
								</div>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								3. 転載・再利用に関する禁止事項
							</h2>
							<p className="mb-10 leading-8 text-base">
								以下の行為を原則として行わない。
							</p>
							<div className="bg-destructive/5 border border-destructive/20 rounded-md p-8">
								<ul className="space-y-5">
									<li className="flex items-start">
										<span className="text-destructive mr-4 mt-1 text-lg">
											•
										</span>
										<span className="leading-7">
											協会公式資料（PDF・画像・パンフレット等）の全体または大部分を転載する行為
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-destructive mr-4 mt-1 text-lg">
											•
										</span>
										<span className="leading-7">
											協会サイト内の写真・図版・動画等を無断で複製・掲載する行為
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-destructive mr-4 mt-1 text-lg">
											•
										</span>
										<span className="leading-7">
											協会の著作物を編集・改変して再配布する行為
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-destructive mr-4 mt-1 text-lg">
											•
										</span>
										<span className="leading-7">
											協会発表前の情報を外部経路から取得し公表する行為
										</span>
									</li>
								</ul>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								4. 実名・肖像の取り扱い
							</h2>
							{/* グリッド間隔: 白銀比 24px → 34px */}
							<div className="grid md:grid-cols-2 gap-8">
								<div className="bg-card border border-border rounded-md p-8">
									<h3 className="font-semibold text-foreground mb-6 flex items-center">
										<span className="bg-cream-tan text-chocolate-martini rounded-md px-3 py-2 text-sm font-medium mr-4">
											選手名
										</span>
									</h3>
									<p className="text-muted-foreground leading-7">
										協会が公表する試合記録・公式登録名をそのまま使用可。
										ただし、私的領域（家族・SNS発言・居住地等）に関する情報は一切扱わない。
									</p>
								</div>
								<div className="bg-card border border-border rounded-md p-8">
									<h3 className="font-semibold text-foreground mb-6 flex items-center">
										<span className="bg-safari text-chocolate-martini rounded-md px-3 py-2 text-sm font-medium mr-4">
											肖像
										</span>
									</h3>
									<p className="text-muted-foreground leading-7">
										当サイトが自ら撮影した写真、または報道目的で正当に引用する写真以外は使用不可。
										SNS投稿・放送キャプチャ・他媒体素材の無断使用を禁ずる。
									</p>
								</div>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								5. 訂正・削除要請への対応
							</h2>
							<div className="space-y-6">
								<div className="bg-chanterelle/10 dark:bg-chanterelle/5 border border-chanterelle/30 dark:border-chanterelle/20 rounded-md p-8">
									<div className="flex items-start">
										<span className="bg-chanterelle/20 text-baltic-amber rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-5 mt-1">
											1
										</span>
										<p className="leading-7">
											記事内容に誤り・不適切な表現があると指摘を受けた場合、
											合理的な期間内（原則48時間以内）に調査を行い、訂正・削除・謝罪等の対応を行う。
										</p>
									</div>
								</div>
								<div className="bg-safari/10 dark:bg-safari/5 border border-safari/30 dark:border-safari/20 rounded-md p-8">
									<div className="flex items-start">
										<span className="bg-safari/20 text-sirocco rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-5 mt-1">
											2
										</span>
										<div>
											<p className="mb-4 leading-7">
												当サイトは訂正要請を受け付けるための専用窓口を常設する。
											</p>
											<div className="bg-white dark:bg-gray-900 border rounded px-4 py-3 font-mono text-sm">
												corrections@kabadditimes.jp
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								6. 免責事項
							</h2>
							<div className="bg-muted/50 border border-border rounded-md p-8">
								<p className="leading-8">
									当サイトは、引用元の内容についてその正確性を保証するものではなく、
									引用元の表現に起因する誤り・不利益について責任を負わない。
									ただし、明確な誤認・誤報を発見した場合は速やかに訂正を行う。
								</p>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								7. 準拠法
							</h2>
							<div className="bg-cream-tan/50 dark:bg-chocolate-martini/50 border border-safari/20 dark:border-baltic-amber/70 rounded-md p-8">
								<p className="leading-8">
									本ガイドラインは日本法に準拠する。
									協会または第三者との間に紛争が生じた場合、
									東京地方裁判所を第一審の専属的合意管轄裁判所とする。
								</p>
							</div>
						</section>
					</div>
				</div>
			</div>
		</main>
	);
}

export default LegalPage;
