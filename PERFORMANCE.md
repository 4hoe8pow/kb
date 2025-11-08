# パフォーマンス最適化ガイド

## 実装済みの最適化

### 1. ビルド最適化
- **コード分割**: React、アニメーション、3D、Markdown、UIライブラリを個別のチャンクに分離
- **圧縮**: Gzip圧縮を有効化（1KB以上のファイル）
- **ミニファイ**: CSS（lightningcss）とJS（esbuild）の最小化
- **ハッシュ付きファイル名**: 長期キャッシュを可能にする

### 2. リソース読み込み最適化
- **DNS プリフェッチ**: Google Fontsへの接続を事前準備
- **フォント非同期読み込み**: レンダリングをブロックしない
- **クリティカルCSS**: 初期表示に必要な最小限のスタイルをインライン化
- **遅延ロード**: 各ルートコンポーネントをlazy()で読み込み

### 3. キャッシュ戦略
- **静的アセット**: 1年間キャッシュ（immutable）
- **HTML**: キャッシュなし（常に最新）
- **_headers**: Cloudflare Pages用のキャッシュ設定
- **_redirects**: SPAルーティング対応
- **wrangler.toml**: Cloudflare Pages設定（オプション）

### 4. CSS最適化
- **トランジション最適化**: 全要素ではなく必要な要素のみに適用
- **システムフォント**: フォールバックとして高速なシステムフォントを使用

## さらなる最適化の提案

### 画像最適化
```bash
# WebP形式への変換を検討
bun add -D vite-plugin-imagemin
```

### プリロード設定
重要なチャンクをプリロードする場合は、index.htmlに追加:
```html
<link rel="modulepreload" href="/assets/react-vendor.[hash].js" />
```

### Service Worker
オフライン対応やキャッシュ戦略を強化:
```bash
bun add -D vite-plugin-pwa
```

## ビルドとデプロイ

```bash
# 本番ビルド
bun run build

# バンドルサイズ分析付きビルド
bun run build:analyze

# ビルドサイズの確認
ls -lh dist/assets/
```

### ビルド結果の確認
- `.gz` ファイル: Gzip圧縮版（広くサポート）
- `.br` ファイル: Brotli圧縮版（より高圧縮率）
- `dist/stats.html`: バンドルサイズの視覚的分析（analyze時）

### Cloudflare Pagesへのデプロイ

#### 方法1: Git連携（推奨）
1. GitHubにプッシュ
2. Cloudflare Pagesダッシュボードでプロジェクト作成
3. ビルド設定:
   - **ビルドコマンド**: `bun run build`
   - **ビルド出力ディレクトリ**: `dist`
   - **Node.jsバージョン**: 20以上

#### 方法2: Wrangler CLI
```bash
# Wranglerのインストール
npm install -g wrangler

# ログイン
wrangler login

# デプロイ
wrangler pages deploy dist
```

### Cloudflare Pages の自動最適化
Cloudflare Pagesは以下を自動で提供:
- **自動圧縮**: Gzip/Brotli（`.gz`/`.br`ファイルを優先使用）
- **グローバルCDN**: 世界中のエッジサーバーから配信
- **HTTP/3**: 最新プロトコル対応
- **自動HTTPS**: SSL証明書の自動発行
- **DDoS保護**: 標準で有効

## パフォーマンス測定

- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Lighthouse**: Chrome DevToolsで実行
- **WebPageTest**: https://www.webpagetest.org/

## 目標指標

- **FCP (First Contentful Paint)**: < 1.8秒
- **LCP (Largest Contentful Paint)**: < 2.5秒
- **TBT (Total Blocking Time)**: < 200ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Speed Index**: < 3.4秒
