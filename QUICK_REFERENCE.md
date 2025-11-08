# クイックリファレンス - パフォーマンス最適化

## 🚀 コマンド

```bash
# 開発サーバー起動
bun run dev

# 本番ビルド
bun run build

# バンドルサイズ分析
bun run build:analyze

# コード品質チェック
bun run lint
```

## 📊 ビルド結果の見方

### Gzip圧縮サイズ（重要）
実際にユーザーがダウンロードするサイズ:
- ✅ 良好: < 100 KB
- ⚠️ 注意: 100-200 KB
- 🔴 改善必要: > 200 KB

### 主要チャンク
- `react-vendor.js`: 87 KB (gzip) - React本体
- `animation.js`: 47 KB (gzip) - GSAP/Motion
- `3d-vendor.js`: 142 KB (gzip) - Three.js（遅延ロード）
- `markdown.js`: 233 KB (gzip) - Markdown処理（遅延ロード）

## 🎯 最適化のポイント

### 1. コード分割 ✅
- 各ルートは遅延ロード
- ライブラリごとに分離
- 初期ロードは最小限

### 2. キャッシュ戦略 ✅
- 静的アセット: 1年間キャッシュ
- HTML: キャッシュなし
- ハッシュ付きファイル名

### 3. 圧縮 ✅
- Gzip: 広くサポート
- Brotli: より高圧縮率
- 1KB以上のファイルを圧縮

### 4. CSS最適化 ✅
- Tailwind自動パージ
- lightningcss最小化
- 不要なトランジション削除

## 📈 パフォーマンス測定

### PageSpeed Insights
https://pagespeed.web.dev/

### Lighthouse（Chrome DevTools）
1. F12でDevToolsを開く
2. Lighthouseタブ
3. "Generate report"

### 重要指標
- **FCP**: 初回コンテンツ表示（目標: < 1.8秒）
- **LCP**: 最大コンテンツ表示（目標: < 2.5秒）
- **TBT**: ブロック時間（目標: < 200ms）
- **CLS**: レイアウトシフト（目標: < 0.1）

## 🔧 トラブルシューティング

### ビルドエラー
```bash
# 依存関係の再インストール
rm -rf node_modules bun.lock
bun install
```

### キャッシュクリア
```bash
# ビルドキャッシュ削除
rm -rf dist
bun run build
```

### バンドルサイズが大きい
```bash
# 分析ツールで確認
bun run build:analyze
# → dist/stats.html で詳細確認
```

## 📝 デプロイ前チェックリスト

- [ ] `bun run build` が成功
- [ ] `dist/` フォルダが生成されている
- [ ] `.gz` と `.br` ファイルが生成されている
- [ ] `_headers` ファイルが `dist/` にコピーされている
- [ ] PageSpeed Insightsで測定（デプロイ後）

## 🌐 デプロイ設定（Cloudflare Pages）

### Git連携デプロイ（推奨）
1. GitHubにプッシュ
2. Cloudflare Pagesダッシュボードでプロジェクト作成
3. ビルド設定:
   - **フレームワークプリセット**: なし
   - **ビルドコマンド**: `bun run build`
   - **ビルド出力ディレクトリ**: `dist`
   - **環境変数**: `NODE_VERSION=20`

### Wrangler CLIデプロイ
```bash
# インストール
npm install -g wrangler

# ログイン
wrangler login

# デプロイ
wrangler pages deploy dist
```

### 自動適用される設定
- `public/_headers`: キャッシュとセキュリティヘッダー
- `public/_redirects`: SPAルーティング対応
- `wrangler.toml`: Cloudflare固有の設定（オプション）

### Cloudflare Pagesの利点
- ✅ 自動Gzip/Brotli圧縮
- ✅ グローバルCDN（世界中のエッジサーバー）
- ✅ HTTP/3対応
- ✅ 自動HTTPS
- ✅ DDoS保護
- ✅ 無制限の帯域幅（Freeプラン）

## 💡 さらなる最適化

1. **画像最適化**: WebP形式、遅延ロード
2. **Service Worker**: オフライン対応
3. **CDN**: 静的アセット配信
4. **プリロード**: 重要リソースの事前読み込み
