// Heroセクションの統計データ
export interface HeroStat {
	value: string; // 年代や期間
	label: string; // 見出し
	detail: string; // 詳細説明
	color: string; // 背景色などのテーマカラー
}

// 各フェーズ（時期・発展段階）
export interface Phase {
	id: string; // "Ⅰ" などの識別子
	period: string; // 時期の説明
	summary: string; // 概要文
	timeline: PhaseTimeline; // タイムライン位置情報
	topics: PhaseTopic[]; // 小項目群
}

// タイムライン位置（％スパンなどで利用）
export interface PhaseTimeline {
	start: number; // タイムライン開始位置（%や数値単位）
	span: number; // 期間長さ
}

// 各フェーズ内のトピック
export interface PhaseTopic {
	title: string; // トピックタイトル
	items: string[]; // 箇条書き項目
}

// アジア大会など国際大会実績
export interface InternationalResult {
	year: string; // 開催年
	event: string; // 大会名
	location: string; // 開催地
	outcome: string; // 成果・結果
}

// 最近のトピックやニュース的ハイライト
export interface HighlightEntry {
	title: string; // イベント名
	details: string[]; // 詳細項目
}

// ルール紹介セクションのサブタイトルなど
export interface RulesIntroStat {
	value: string; // 数値や短いキーワード (例: "30\"", "1 vs 7")
	label: string; // 補足説明 (例: "1レイド、勝負は30秒")
}

// レイド（攻撃）の流れを表す段階ステップ
export interface RaidFlowStep {
	title: string; // カードタイトル (例: "制限時間")
	tag: string; // タグ・キーワード (例: "30s LIMIT")
	description: string; // 説明文
}

export interface RaidFlowSectionProps {
	accentLabel: string;
	title: string;
	steps: RaidFlowStep[];
}
