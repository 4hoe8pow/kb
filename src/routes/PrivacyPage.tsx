import { usePageTitle } from "@/hooks/usePageTitle";

function PrivacyPage() {
	usePageTitle("プライバシーポリシー - KABADDI TIMES");
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
							プライバシーポリシー
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
								1. 基本方針
							</h2>
							<div className="bg-muted/30 p-8 rounded-md border-l-4 border-primary">
								<p className="leading-8 text-base">
									KABADDI
									TIMES（以下「当サイト」）は、利用者の個人情報保護を重要な責務と認識し、
									個人情報の保護に関する法律その他関連法令を遵守し、
									適切な個人情報の取得・利用・管理を行います。
								</p>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								2. 個人情報の収集
							</h2>
							<p className="mb-10 leading-8 text-base">
								当サイトでは、以下の方法により個人情報を収集する場合があります。
							</p>
							<div className="space-y-6">
								<div className="bg-card border border-border rounded-md p-7">
									<h4 className="font-semibold text-foreground mb-5 flex items-center">
										<span className="bg-bland text-cannoli-cream rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4">
											1
										</span>
										アクセスログ情報
									</h4>
									<p className="text-muted-foreground ml-11 leading-7">
										IPアドレス、ブラウザ情報、アクセス日時、参照元URL等の技術的情報を自動的に収集します。
									</p>
								</div>
								<div className="bg-card border border-border rounded-md p-7">
									<h4 className="font-semibold text-foreground mb-5 flex items-center">
										<span className="bg-bland text-cannoli-cream rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4">
											2
										</span>
										Cookie情報
									</h4>
									<p className="text-muted-foreground ml-11 leading-7">
										サイトの利便性向上のため、Cookieを使用してブラウザ設定や利用状況を記録する場合があります。
									</p>
								</div>
								<div className="bg-card border border-border rounded-md p-7">
									<h4 className="font-semibold text-foreground mb-5 flex items-center">
										<span className="bg-bland text-cannoli-cream rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4">
											3
										</span>
										お問い合わせ情報
									</h4>
									<p className="text-muted-foreground ml-11 leading-7">
										お問い合わせフォーム等を通じて、利用者が任意に提供する連絡先情報等を収集します。
									</p>
								</div>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								3. 個人情報の利用目的
							</h2>
							<p className="mb-10 leading-8 text-base">
								収集した個人情報は、以下の目的で利用します。
							</p>
							<div className="bg-safari/10 dark:bg-safari/5 border border-safari/30 dark:border-safari/20 rounded-md p-8">
								<ul className="space-y-5">
									<li className="flex items-start">
										<span className="text-bland mr-4 mt-1 text-lg">•</span>
										<span className="leading-7">
											サイトの運営・管理およびサービス向上のための分析
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-bland mr-4 mt-1 text-lg">•</span>
										<span className="leading-7">
											お問い合わせへの対応および必要な連絡
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-bland mr-4 mt-1 text-lg">•</span>
										<span className="leading-7">
											不正アクセスやスパム等の防止・検知
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-bland mr-4 mt-1 text-lg">•</span>
										<span className="leading-7">
											法令に基づく対応が必要な場合の調査・報告
										</span>
									</li>
								</ul>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								4. 第三者提供
							</h2>
							<div className="bg-chanterelle/10 dark:bg-chanterelle/5 border border-chanterelle/30 dark:border-chanterelle/20 rounded-md p-8">
								<p className="leading-8">
									当サイトは、法令に基づく場合を除き、利用者の同意なく個人情報を第三者に提供することはありません。
									ただし、以下の場合は除きます：
								</p>
								<ul className="mt-6 space-y-3">
									<li className="flex items-start">
										<span className="text-baltic-amber mr-3 mt-1">•</span>
										<span className="leading-7">
											法令に基づく開示要求がある場合
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-baltic-amber mr-3 mt-1">•</span>
										<span className="leading-7">
											生命・身体・財産の保護のため緊急の必要がある場合
										</span>
									</li>
								</ul>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								5. 外部サービスの利用
							</h2>
							<div className="grid md:grid-cols-2 gap-8">
								<div className="bg-card border border-border rounded-md p-8">
									<h3 className="font-semibold text-foreground mb-6 flex items-center">
										<span className="bg-safari text-chocolate-martini rounded-md px-3 py-2 text-sm font-medium mr-4">
											分析
										</span>
									</h3>
									<p className="text-muted-foreground leading-7">
										Google Analytics等のアクセス解析サービスを利用し、
										サイト改善のための統計情報を収集する場合があります。
									</p>
								</div>
								<div className="bg-card border border-border rounded-md p-8">
									<h3 className="font-semibold text-foreground mb-6 flex items-center">
										<span className="bg-sirocco text-cannoli-cream rounded-md px-3 py-2 text-sm font-medium mr-4">
											CDN
										</span>
									</h3>
									<p className="text-muted-foreground leading-7">
										コンテンツ配信ネットワーク（CDN）サービスを利用し、
										サイトの表示速度向上を図る場合があります。
									</p>
								</div>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								6. 個人情報の管理・保護
							</h2>
							<div className="space-y-6">
								<div className="bg-cream-tan/50 dark:bg-chocolate-martini/50 border border-safari/20 dark:border-baltic-amber/70 rounded-md p-8">
									<div className="flex items-start">
										<span className="bg-cream-tan text-chocolate-martini rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-5 mt-1">
											1
										</span>
										<p className="leading-7">
											個人情報への不正アクセス、紛失、破壊、改ざん、漏洩等を防止するため、
											適切な安全管理措置を講じます。
										</p>
									</div>
								</div>
								<div className="bg-cream-tan/50 dark:bg-chocolate-martini/50 border border-safari/20 dark:border-baltic-amber/70 rounded-md p-8">
									<div className="flex items-start">
										<span className="bg-cream-tan text-chocolate-martini rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-5 mt-1">
											2
										</span>
										<p className="leading-7">
											個人情報は利用目的達成後、適切な方法で削除または匿名化処理を行います。
										</p>
									</div>
								</div>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								7. お問い合わせ
							</h2>
							<div className="bg-muted/50 border border-border rounded-md p-8">
								<p className="leading-8 mb-4">
									個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
								</p>
								<div className="bg-white dark:bg-gray-900 border rounded px-4 py-3 font-mono text-sm">
									privacy@kabadditimes.jp
								</div>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								8. ポリシーの変更
							</h2>
							<div className="bg-muted/50 border border-border rounded-md p-8">
								<p className="leading-8">
									本プライバシーポリシーは、法令の変更やサービス内容の変更に伴い、
									予告なく変更する場合があります。変更後のポリシーは、
									当サイトに掲載した時点から効力を生じるものとします。
								</p>
							</div>
						</section>
					</div>
				</div>
			</div>
		</main>
	);
}

export default PrivacyPage;
