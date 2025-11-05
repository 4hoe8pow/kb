import { AboutHero } from "@/components/history/about-hero";
import { InternationalResultsSection } from "@/components/history/international-results-section";
import { PhasesSection } from "@/components/history/phases-section";
import { RecentHighlightsSection } from "@/components/history/recent-highlights-section";
import type {
	HeroStat,
	HighlightEntry,
	InternationalResult,
	Phase,
} from "./kabaddi.types";

const heroStats: HeroStat[] = [
	{
		value: "1978",
		label: "初上陸",
		detail: "インド代表が来日し展示試合を実施",
		color: "#f6f0ff",
	},
	{
		value: "1981",
		label: "組織設立",
		detail: "日本カバディ協会（JAKA）設立・東金市で学校指導開始",
		color: "#eef7ff",
	},
	{
		value: "1989",
		label: "全国大会創設",
		detail: "第1回全日本カバディ選手権を開催",
		color: "#fdf7ec",
	},
	{
		value: "1990",
		label: "国際舞台進出",
		detail: "日本代表がアジア競技大会（北京）に初出場",
		color: "#ecf7f2",
	},
	{
		value: "1994",
		label: "国内開催",
		detail: "広島アジア大会でカバディ競技を日本が主催",
		color: "#fff0f5",
	},
	{
		value: "1998",
		label: "女子代表誕生",
		detail: "女子日本代表がアジア大会初出場",
		color: "#f2f1ff",
	},
	{
		value: "2000s",
		label: "大学スポーツ化",
		detail: "二松学舎大や筑波大などでクラブ設立が相次ぐ",
		color: "#f5f9ee",
	},
	{
		value: "2010",
		label: "メダル獲得",
		detail: "広州アジア大会で日本男子が銅メダル",
		color: "#fef4e8",
	},
	{
		value: "2025",
		label: "地域連携強化",
		detail: "東アジア選手権優勝・東日本連盟活動拡大",
		color: "#f0fbff",
	},
];

const phases: Phase[] = [
	{
		id: "Ⅰ",
		period: "導入期（1970年代後半〜1980年代前半）",
		summary: "展示試合と学校体育を通じて基盤を整えた時期。",
		timeline: { start: 0, span: 25 },
		topics: [
			{
				title: "カバディの日本への導入",
				items: [
					"1978年、インディア・カバディ協会による親善ツアーで代表チームが来日し、東京で展示試合を実施。",
					"この訪問を契機に、インド大使館文化部が日本の教育関係者へ競技導入を提案。",
					"1979年〜1980年、教育現場での実技研究が進み、教材化の検討が開始された。",
				],
			},
			{
				title: "東金市モデルの誕生",
				items: [
					"1981年、千葉県東金市でインド大使館と市教育委員会が連携し、小中学校でカバディ実技を導入。",
					"東金市は“カバディのまち”として知られ、体育授業・地域イベントで継続的に普及活動を展開。",
					"児童生徒の交流試合が地元メディアに取り上げられ、国内最初期のカバディ人口を形成した。",
				],
			},
			{
				title: "日本カバディ協会（JAKA）の設立",
				items: [
					"1981年、日本カバディ協会（Japan Amateur Kabaddi Association）が発足。",
					"初代会長は東金市長（当時）。協会は競技規則の日本語訳・審判育成・インド協会との連絡を担当。",
					"日本選手団の派遣体制と、国際大会出場を見据えた基盤整備が始まった。",
				],
			},
		],
	},
	{
		id: "Ⅱ",
		period: "普及・競技化期（1980年代後半〜1990年代前半）",
		summary: "メディア露出と公式大会が競技化を後押しした時期。",
		timeline: { start: 25, span: 50 },
		topics: [
			{
				title: "メディアと社会的認知",
				items: [
					"1980年代半ば、NHKや全国紙が『インド発祥の新スポーツ』としてカバディを特集。",
					"ニュース映像での取り上げが、学校教育・体育指導者層に波及。",
					"“声を絶やさず攻める”というユニークなルールが話題となり、注目を集めた。",
				],
			},
			{
				title: "国内大会と選手育成の始動",
				items: [
					"1989年 第1回全日本カバディ選手権大会が開催され、正式なルール統一が進む。",
					"1990年代初頭には東日本・西日本選手権も立ち上がり、地域間対抗の形式が確立。",
					"インドからコーチを招聘し、技術・戦略面での体系的指導が導入された。",
				],
			},
			{
				title: "国際大会への参入",
				items: [
					"1990年 日本代表を初編成し、アジア競技大会（北京）で正式競技として初出場。",
					"1994年 広島アジア大会で開催国として再出場し、日本初の国際公式戦を主催。",
					"この時期から国際カバディ連盟（IKF）加盟を視野に入れた本格的国際連携が始まった。",
				],
			},
		],
	},
	{
		id: "Ⅲ",
		period: "学生スポーツ化・国際出場の定着（1990年〜2000年代）",
		summary: "大学クラブ設立と国際大会参加が並行して進んだ時期。",
		timeline: { start: 50, span: 30 },
		topics: [
			{
				title: "大学スポーツとしての拡大",
				items: [
					"二松学舎大学柏キャンパスに日本初の大学カバディチームが結成され、体育会公認化。",
					"続いて筑波・早稲田・立教・東京学芸などでも愛好会が設立され、大学間リーグ戦が成立。",
					"大学生が審判・コーチ資格を兼任する仕組みが作られ、学生主導の普及が進む。",
				],
			},
			{
				title: "国際大会への継続出場",
				items: [
					"1998年 バンコク大会で女子代表が初出場。",
					"2002年 釜山大会・2006年 ドーハ大会へと連続出場し、常連国として定着。",
					"2010年 広州大会で銅メダルを獲得し、アジア勢としての存在感を確立した。",
				],
			},
			{
				title: "競技制度と環境整備",
				items: [
					"日本カバディ協会が指導者・審判の認定制度を整備し、競技ルールを国際基準に統一。",
					"大学と社会人クラブを統合したリーグ構想が始動し、トップカテゴリ形成を模索。",
					"文化交流イベントや国際親善試合が毎年開催され、カバディを通じた日印交流が深化した。",
				],
			},
		],
	},
	{
		id: "Ⅳ",
		period: "現代の展開と文化的波及（2010年〜）",
		summary:
			"全国的な組織整備と教育・文化への広がりが同時進行し、メディア表現を通じて若年層の関心が高まった時期。",
		timeline: { start: 80, span: 20 },
		topics: [
			{
				title: "組織の進化と地域リーグ体制",
				items: [
					"日本カバディ協会が国際カバディ連盟（IKF）加盟国として活動領域を拡大。",
					"東日本・西日本など地域連盟を整備し、国内リーグ戦の運営基盤を強化。",
					"地域クラブが育成年代チームを設立し、ジュニア世代への教育が本格化した。",
				],
			},
			{
				title: "メディア表現と認知拡大",
				items: [
					"2015年 漫画『灼熱カバディ』（武蔵野創）が連載開始、戦略性と心理戦が注目される。",
					"2021年 TVアニメ化で“カバディって実在するの？”がSNSトレンド化。",
					"2024年の完結時点で全43巻・累計発行部数300万部超を記録し、体験イベント需要が増加。",
				],
			},
			{
				title: "若年層の参入と競技課題",
				items: [
					"高校・大学での体験授業や地域イベントの開催によりZ世代の新規参加が増加。",
					"SNSで拡散されるハイライト映像が興味喚起を促進。",
					"国内競技人口は約500人規模ながら、コーチライセンス制度や審判養成講座を整備中。",
				],
			},
		],
	},
];

const asiaResults: InternationalResult[] = [
	{
		year: "1990",
		event: "第11回アジア競技大会",
		location: "北京",
		outcome: "初出場",
	},
	{
		year: "1994",
		event: "第12回アジア競技大会",
		location: "広島",
		outcome: "開催国として出場",
	},
	{
		year: "1998",
		event: "第13回アジア競技大会",
		location: "バンコク",
		outcome: "女子代表初出場",
	},
	{
		year: "2010",
		event: "第16回アジア競技大会",
		location: "広州",
		outcome: "銅メダル獲得",
	},
	{
		year: "2026",
		event: "第20回アジア競技大会",
		location: "愛知",
		outcome: "",
	},
];

const recentHighlights: HighlightEntry[] = [
	{
		title: "第9回カバディチャレンジカップ（2025年6月）",
		details: [
			"男子はWASEDA MONSTERSが優勝。",
			"東京大学4年生の今福優作選手がMVPを受賞。",
		],
	},
	{
		title: "第一回男子東アジアカバディ選手権（2025年6月）",
		details: [
			"台湾（台北）で開催。",
			"日本代表が優勝し、初代東アジアチャンピオンとなった。",
		],
	},
];

const HistoryPage = () => {
	return (
		<div className="about-container">
			<main className="about-page">
				<AboutHero stats={heroStats} />
				<PhasesSection phases={phases} />
				<InternationalResultsSection results={asiaResults} />
				<RecentHighlightsSection highlights={recentHighlights} />
			</main>
		</div>
	);
};

export default HistoryPage;
