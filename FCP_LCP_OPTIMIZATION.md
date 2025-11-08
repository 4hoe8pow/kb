# FCP/LCP 最適化ガイド

## 🎯 目標
- **FCP (First Contentful Paint)**: 3.6s → < 1.8s
- **LCP (Largest Contentful Paint)**: 5.6s → < 2.5s

## ✅ 実装した最適化

### 1. クリティカルパスの最適化

#### HeroPageの即座ロード
**変更前**: HeroPageを遅延ロード（lazy）
```tsx
const HeroPage = lazy(() => import("./routes/HeroPage.tsx"));
```

**変更後**: HeroPageを即座にロード
```tsx
import HeroPage from "./routes/HeroPage.tsx";
```

**効果**: 初期ページのJavaScriptダウンロード待機時間を削減

#### SlideOneの即座ロード
**変更前**: SlideOneも遅延ロード
**変更後**: SlideOneを即座にロード、ASCIITextのみ遅延

**効果**: ファーストビューのコンテンツを即座に表示

### 2. プレースホルダーの実装

#### クリティカルCSS内のプレースホルダー
```css
#root:empty::after {
  content: "ANKLEHOLD";
  font-size: clamp(2rem, 8vw, 6rem);
  font-weight: bold;
  opacity: 0.9;
  animation: pulse 2s ease-in-out infinite;
}
```

**効果**: JavaScriptロード前にコンテンツを表示（FCP大幅改善）

#### SlideOneのプレースホルダー
```tsx
const Placeholder = () => (
  <div style={{ fontSize: "clamp(2rem, 8vw, 6rem)", ... }}>
    ANKLEHOLD
  </div>
);
```

**効果**: 重いASCIITextロード前に軽量なテキストを表示

### 3. 段階的なコンテンツ表示

#### 画面外コンテンツの遅延
```tsx
// SlideTwoを100ms後に表示
useEffect(() => {
  const timer = setTimeout(() => {
    setShowSlideTwo(true);
  }, 100);
  return () => clearTimeout(timer);
}, []);
```

**効果**: 初期レンダリングの負荷を軽減

#### ASCIITextの遅延
```tsx
// ASCIITextを50ms後に表示
const timer = setTimeout(() => {
  setShowASCII(true);
}, 50);
```

**効果**: プレースホルダーを先に表示してFCPを改善

### 4. CSS最適化

#### CSSコード分割の無効化
```ts
build: {
  cssCodeSplit: false,
}
```

**効果**: CSS読み込みの往復回数を削減

#### クリティカルCSSの強化
- 背景色とテキスト色を事前定義
- ダークモード対応
- 初期ローディングアニメーション

**効果**: スタイルシートロード前に正しい色で表示

### 5. モジュールプリロードの最適化

```ts
modulePreload: {
  polyfill: true,
  resolveDependencies: (_filename, deps) => {
    // 重要なチャンクのみプリロード
    return deps.filter(dep => 
      dep.includes('react-vendor') || 
      dep.includes('index')
    );
  },
}
```

**効果**: 不要なプリロードを削減、重要なチャンクを優先

### 6. LoadingFallbackの軽量化

**変更前**: Spinnerコンポーネントを使用
**変更後**: CSSのみで実装

**効果**: 依存関係を削減、ロード時間短縮

## 📊 期待される改善

### レンダリングタイムライン

**最適化前**:
```
0ms ────────────────────────────────────────────────────────────────
     ↓ HTML ダウンロード
100ms ↓ CSS ダウンロード
     ↓ JS ダウンロード（react-vendor + index）
1000ms ↓ HeroPage lazy ロード
     ↓ SlideOne lazy ロード
     ↓ ASCIIText lazy ロード
3600ms ← FCP（初回コンテンツ表示）
     ↓ 画像/アニメーション読み込み
5600ms ← LCP（最大コンテンツ表示）
```

**最適化後**:
```
0ms ────────────────────────────────────────────────────────────────
     ↓ HTML ダウンロード
50ms ← FCP（クリティカルCSSのプレースホルダー表示）
     ↓ CSS ダウンロード（単一ファイル）
     ↓ JS ダウンロード（react-vendor + index + HeroPage）
500ms ↓ SlideOne Placeholder 表示
     ↓ ASCIIText 遅延ロード（50ms後）
800ms ← LCP（ASCIIText表示）
     ↓ SlideTwo 遅延ロード（100ms後）
1000ms ← 完全表示
```

### 改善予測

| 指標 | 改善前 | 目標 | 改善率 |
|------|--------|------|--------|
| FCP | 3.6s | < 1.0s | 72%↓ |
| LCP | 5.6s | < 1.5s | 73%↓ |
| TBT | 240ms | < 150ms | 38%↓ |

## 🔍 測定方法

### ローカル測定
```bash
# ビルド
bun run build

# プレビュー
bunx vite preview

# Lighthouseで測定
# Chrome DevTools → Lighthouse → Generate report
```

### 本番測定
1. Cloudflare Pagesにデプロイ
2. [PageSpeed Insights](https://pagespeed.web.dev/) で測定
3. モバイルとデスクトップ両方を確認

## 🎨 ユーザー体験の改善

### 最適化前
1. 白い画面（3.6秒）
2. ローディングスピナー
3. コンテンツ表示

### 最適化後
1. **即座に**「ANKLEHOLD」テキスト表示（< 100ms）
2. スムーズにASCIITextに切り替わり（< 1秒）
3. 段階的に追加コンテンツ表示

## 🚀 さらなる最適化案

### 1. 画像最適化
```bash
# WebP形式への変換
bun add -D vite-plugin-imagemin
```

### 2. フォントの最適化
- フォントサブセット化（使用する文字のみ）
- `font-display: swap` の活用

### 3. Service Worker
```bash
# オフライン対応とキャッシュ戦略
bun add -D vite-plugin-pwa
```

### 4. HTTP/2 Server Push
Cloudflare Pagesで自動的に有効化されるが、
重要なリソースを明示的にプッシュ可能

## 📝 チェックリスト

デプロイ前:
- [ ] `bun run build` が成功
- [ ] ローカルでLighthouse測定（FCP < 1.8s）
- [ ] モバイルでの表示確認
- [ ] ダークモード動作確認

デプロイ後:
- [ ] PageSpeed Insights測定（モバイル）
- [ ] PageSpeed Insights測定（デスクトップ）
- [ ] 実機での体感速度確認
- [ ] Cloudflare Analyticsで確認

## 🔗 参考リンク

- [Web Vitals](https://web.dev/vitals/)
- [Optimize FCP](https://web.dev/fcp/)
- [Optimize LCP](https://web.dev/lcp/)
- [Critical Rendering Path](https://web.dev/critical-rendering-path/)
