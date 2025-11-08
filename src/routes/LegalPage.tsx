import { usePageTitle } from "@/hooks/usePageTitle";

function LegalPage() {
	usePageTitle("コンテンツガイドライン - ANKLEHOLD");
	window.scrollTo({ top: 0, behavior: "instant" });

	return (
		<main className="relative font-body overflow-hidden bg-background">
			{/* 外側コンテナ: 基準単位 24px (1.5rem) */}
			<div className="w-full px-6 py-24 md:py-32">
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
									ANKLEHOLD（以下「当サイト」といいます。）は、カバディの普及及び発展に寄与することを目的とし、公益性を有するスポーツ報道の一環として、日本カバディ協会（以下「協会」といいます。）その他の公的機関が公表した情報を引用することがあります。当サイトは、協会をはじめとする情報提供者への敬意と感謝の念を持ち、著作権法、肖像権、パブリシティ権その他の関連法令を遵守し、適切な引用を行います。
								</p>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								2. 引用の原則と要件
							</h2>
							<p className="mb-10 leading-8 text-base">
								当サイトが協会その他の公的機関が公表した情報を引用する場合、著作権法第32条に定める引用の要件を満たすため、以下の条件をすべて遵守します。
							</p>
							{/* 要件カード間隔: 白銀比 17px → 24px */}
							<div className="space-y-6">
								<div className="bg-card border border-border rounded-md p-7">
									<h4 className="font-semibold text-foreground mb-5 flex items-center">
										<span className="bg-bland text-cannoli-cream rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4">
											1
										</span>
										公表された著作物であること
									</h4>
									<p className="text-muted-foreground ml-11 leading-7">
										公式Webサイト、プレスリリース、試合結果速報、広報誌、公式SNSアカウント等、既に公表された著作物に限定します。
									</p>
								</div>
								<div className="bg-card border border-border rounded-md p-7">
									<h4 className="font-semibold text-foreground mb-5 flex items-center">
										<span className="bg-bland text-cannoli-cream rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4">
											2
										</span>
										公正な慣行に合致すること
									</h4>
									<p className="text-muted-foreground ml-11 leading-7">
										報道、批評、研究その他の正当な目的のために行い、単なる転載又は再配信ではなく、独自の分析、考察、紹介、比較等の編集意図を伴います。
									</p>
								</div>
								<div className="bg-card border border-border rounded-md p-7">
									<h4 className="font-semibold text-foreground mb-5 flex items-center">
										<span className="bg-bland text-cannoli-cream rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4">
											3
										</span>
										引用の範囲が正当な範囲内であること
									</h4>
									<p className="text-muted-foreground ml-11 leading-7">
										試合結果、スコア、選手名等の引用は報道上必要な範囲に留め、著作物全体又はその大部分を転載することはいたしません。
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
										記事内又は文末に「出典：日本カバディ協会公式サイト（URL）」等の形式で出典を明示し、可能な限り一次情報源へのリンクを設置します。
									</p>
								</div>
								<div className="bg-card border border-border rounded-md p-7">
									<h4 className="font-semibold text-foreground mb-5 flex items-center">
										<span className="bg-bland text-cannoli-cream rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4">
											5
										</span>
										引用部分と当サイトの著作物が明瞭に区別されること
									</h4>
									<p className="text-muted-foreground ml-11 leading-7">
										引用部分を明確に区別し、当サイトの独自コンテンツが主、引用部分が従の関係となるよう構成します。
									</p>
								</div>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								3. 禁止事項
							</h2>
							<p className="mb-10 leading-8 text-base">
								当サイトは、協会その他の権利者の権利を尊重し、以下の行為を行いません。
							</p>
							<div className="bg-destructive/5 border border-destructive/20 rounded-md p-8">
								<ul className="space-y-5">
									<li className="flex items-start">
										<span className="text-destructive mr-4 mt-1 text-lg">
											•
										</span>
										<span className="leading-7">
											協会が公表した資料（PDF、画像、パンフレット等）の全体又はその大部分を転載すること
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-destructive mr-4 mt-1 text-lg">
											•
										</span>
										<span className="leading-7">
											協会の公式サイト内の写真、図版、動画等を権利者の許諾なく複製又は掲載すること
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-destructive mr-4 mt-1 text-lg">
											•
										</span>
										<span className="leading-7">
											協会の著作物を編集、改変又は翻案して再配布すること
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-destructive mr-4 mt-1 text-lg">
											•
										</span>
										<span className="leading-7">
											協会が公表する前の情報を不正な手段により取得し、又は公表すること
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-destructive mr-4 mt-1 text-lg">
											•
										</span>
										<span className="leading-7">
											権利者の名誉又は声望を害する態様で著作物を利用すること
										</span>
									</li>
								</ul>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								4. 個人情報及び肖像の取り扱い
							</h2>
							{/* グリッド間隔: 白銀比 24px → 34px */}
							<div className="grid md:grid-cols-2 gap-8">
								<div className="bg-card border border-border rounded-md p-8">
									<h3 className="font-semibold text-foreground mb-6 flex items-center">
										<span className="bg-cream-tan text-chocolate-martini rounded-md px-3 py-2 text-sm font-medium mr-4">
											選手名等
										</span>
									</h3>
									<p className="text-muted-foreground leading-7">
										協会が公表する試合記録及び公式登録名を報道目的の範囲内で使用します。選手及び関係者の私的領域（家族構成、私的なSNS発言、居住地等）に関する情報は取り扱いません。
									</p>
								</div>
								<div className="bg-card border border-border rounded-md p-8">
									<h3 className="font-semibold text-foreground mb-6 flex items-center">
										<span className="bg-safari text-chocolate-martini rounded-md px-3 py-2 text-sm font-medium mr-4">
											肖像権
										</span>
									</h3>
									<p className="text-muted-foreground leading-7">
										当サイトが適法に撮影した写真、又は報道目的で正当に引用する写真に限り使用します。SNS投稿、放送画面のキャプチャ、他媒体の素材等を権利者の許諾なく使用することはいたしません。
									</p>
								</div>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								5. 訂正及び削除要請への対応
							</h2>
							<div className="space-y-6">
								<div className="bg-chanterelle/10 dark:bg-chanterelle/5 border border-chanterelle/30 dark:border-chanterelle/20 rounded-md p-8">
									<div className="flex items-start">
										<span className="bg-chanterelle/20 text-baltic-amber rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-5 mt-1">
											1
										</span>
										<p className="leading-7">
											当サイトは、記事内容に事実誤認、不適切な表現、又は権利侵害があるとの指摘を受けた場合、速やかに調査を行い、合理的な期間内（原則として48時間以内）に訂正、削除その他の適切な措置を講じます。
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
												当サイトは、訂正及び削除要請を受け付けるための専用窓口を設置しています。
											</p>
											<div className="bg-white dark:bg-gray-900 border rounded px-4 py-3 font-mono text-sm">
												support.anklehold&#64;jocarium.productions
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
								<p className="leading-8 mb-6">
									当サイトは、掲載する情報の正確性及び完全性について最善の努力を払いますが、引用元の情報の正確性を保証するものではありません。引用元の情報に起因する誤り又は利用者が被った損害について、当サイトは責任を負いかねます。ただし、当サイトが明らかな事実誤認又は誤報を発見した場合は、速やかに訂正を行います。
								</p>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								7. 準拠法及び管轄裁判所
							</h2>
							<div className="bg-cream-tan/50 dark:bg-chocolate-martini/50 border border-safari/20 dark:border-baltic-amber/70 rounded-md p-8">
								<p className="leading-8">
									本ガイドラインの解釈及び適用については、日本法に準拠します。本ガイドラインに関連して協会その他の第三者との間に紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
								</p>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								8. ガイドラインの変更
							</h2>
							<div className="bg-muted/50 border border-border rounded-md p-8">
								<p className="leading-8">
									当サイトは、法令の変更、社会情勢の変化、又はサービス内容の変更等に伴い、本ガイドラインを変更することがあります。変更後のガイドラインは、当サイトに掲載した時点から効力を生じるものとします。
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
