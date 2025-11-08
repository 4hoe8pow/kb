import { usePageTitle } from "@/hooks/usePageTitle";

function PrivacyPage() {
	usePageTitle("プライバシーポリシー - ANKLEHOLD");
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
									ANKLEHOLD（以下「当サイト」といいます。）は、利用者の個人情報の保護を重要な責務と認識し、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）その他の関連法令及びガイドラインを遵守し、適切に個人情報の取得、利用及び管理を行います。
								</p>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								2. 個人情報の取得
							</h2>
							<p className="mb-10 leading-8 text-base">
								当サイトは、以下の方法により個人情報を取得することがあります。
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
										IPアドレス、ブラウザの種類、アクセス日時、参照元URL等の技術的情報を自動的に取得します。
									</p>
								</div>
								<div className="bg-card border border-border rounded-md p-7">
									<h4 className="font-semibold text-foreground mb-5 flex items-center">
										<span className="bg-bland text-cannoli-cream rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4">
											2
										</span>
										Cookie及び類似技術
									</h4>
									<p className="text-muted-foreground ml-11 leading-7">
										当サイトの利便性向上のため、Cookie及び類似技術を使用してブラウザの設定や利用状況を記録することがあります。
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
										お問い合わせフォーム等を通じて、利用者が任意に提供された連絡先情報等を取得します。
									</p>
								</div>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								3. 個人情報の利用目的
							</h2>
							<p className="mb-10 leading-8 text-base">
								当サイトは、取得した個人情報を以下の目的で利用します。
							</p>
							<div className="bg-safari/10 dark:bg-safari/5 border border-safari/30 dark:border-safari/20 rounded-md p-8">
								<ul className="space-y-5">
									<li className="flex items-start">
										<span className="text-bland mr-4 mt-1 text-lg">•</span>
										<span className="leading-7">
											当サイトの運営、管理及びサービス向上のための分析
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-bland mr-4 mt-1 text-lg">•</span>
										<span className="leading-7">
											お問い合わせに対する回答及び必要な連絡
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-bland mr-4 mt-1 text-lg">•</span>
										<span className="leading-7">
											不正アクセス、スパム等の防止及び検知
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-bland mr-4 mt-1 text-lg">•</span>
										<span className="leading-7">
											法令に基づく対応が必要な場合における調査及び報告
										</span>
									</li>
								</ul>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								4. 個人情報の第三者提供
							</h2>
							<div className="bg-chanterelle/10 dark:bg-chanterelle/5 border border-chanterelle/30 dark:border-chanterelle/20 rounded-md p-8">
								<p className="leading-8">
									当サイトは、あらかじめ利用者の同意を得ることなく、個人情報を第三者に提供することはありません。ただし、以下の場合はこの限りではありません。
								</p>
								<ul className="mt-6 space-y-3">
									<li className="flex items-start">
										<span className="text-baltic-amber mr-3 mt-1">•</span>
										<span className="leading-7">法令に基づく場合</span>
									</li>
									<li className="flex items-start">
										<span className="text-baltic-amber mr-3 mt-1">•</span>
										<span className="leading-7">
											人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-baltic-amber mr-3 mt-1">•</span>
										<span className="leading-7">
											公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-baltic-amber mr-3 mt-1">•</span>
										<span className="leading-7">
											国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
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
											アクセス解析
										</span>
									</h3>
									<p className="text-muted-foreground leading-7">
										当サイトは、Google
										Analytics等のアクセス解析サービスを利用し、当サイトの改善のための統計情報を取得することがあります。これらのサービスは独自のプライバシーポリシーに基づき情報を取得します。
									</p>
								</div>
								<div className="bg-card border border-border rounded-md p-8">
									<h3 className="font-semibold text-foreground mb-6 flex items-center">
										<span className="bg-sirocco text-cannoli-cream rounded-md px-3 py-2 text-sm font-medium mr-4">
											CDN
										</span>
									</h3>
									<p className="text-muted-foreground leading-7">
										当サイトは、コンテンツ配信ネットワーク（CDN）サービスを利用し、当サイトの表示速度の向上を図ることがあります。
									</p>
								</div>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								6. 個人情報の安全管理措置
							</h2>
							<div className="space-y-6">
								<div className="bg-cream-tan/50 dark:bg-chocolate-martini/50 border border-safari/20 dark:border-baltic-amber/70 rounded-md p-8">
									<div className="flex items-start">
										<span className="bg-cream-tan text-chocolate-martini rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-5 mt-1">
											1
										</span>
										<p className="leading-7">
											当サイトは、個人情報への不正アクセス、個人情報の紛失、破壊、改ざん及び漏洩等を防止するため、適切な安全管理措置を講じます。
										</p>
									</div>
								</div>
								<div className="bg-cream-tan/50 dark:bg-chocolate-martini/50 border border-safari/20 dark:border-baltic-amber/70 rounded-md p-8">
									<div className="flex items-start">
										<span className="bg-cream-tan text-chocolate-martini rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-5 mt-1">
											2
										</span>
										<p className="leading-7">
											当サイトは、個人情報について利用目的の達成に必要な範囲内において、正確かつ最新の内容に保つよう努めます。
										</p>
									</div>
								</div>
								<div className="bg-cream-tan/50 dark:bg-chocolate-martini/50 border border-safari/20 dark:border-baltic-amber/70 rounded-md p-8">
									<div className="flex items-start">
										<span className="bg-cream-tan text-chocolate-martini rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-5 mt-1">
											3
										</span>
										<p className="leading-7">
											当サイトは、保有する個人情報について利用目的を達成した後、又は保有する必要がなくなったときは、遅滞なく当該個人情報を消去又は匿名化するよう努めます。
										</p>
									</div>
								</div>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								7. 開示等の請求
							</h2>
							<div className="bg-muted/50 border border-border rounded-md p-8">
								<p className="leading-8 mb-6">
									利用者は、当サイトに対し、個人情報保護法の定めに基づき、保有個人データの開示、訂正、追加、削除、利用停止等を請求することができます。請求方法については、下記のお問い合わせ窓口までご連絡ください。
								</p>
								<div className="bg-white dark:bg-gray-900 border rounded px-4 py-3 font-mono text-sm">
									support.anklehold&#64;jocarium.productions
								</div>
							</div>
						</section>

						<section>
							<h2 className="font-display text-xl font-semibold border-b border-border pb-3 mb-8">
								8. プライバシーポリシーの変更
							</h2>
							<div className="bg-muted/50 border border-border rounded-md p-8">
								<p className="leading-8">
									当サイトは、法令の変更又はサービス内容の変更等に伴い、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
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
