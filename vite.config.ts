import react from '@vitejs/plugin-react-swc'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import { compression } from 'vite-plugin-compression2'
import { visualizer } from 'rollup-plugin-visualizer'
import sitemap from 'vite-plugin-sitemap'
import fs from 'fs'
import matter from 'gray-matter'

// 記事IDを動的に取得する関数
function getArticleIds(): string[] {
  const articlesDir = path.resolve(__dirname, './src/assets/articles')
  try {
    const files = fs.readdirSync(articlesDir)
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const content = fs.readFileSync(path.join(articlesDir, file), 'utf-8')
        const { data } = matter(content)
        return data.id as string
      })
      .filter(Boolean)
  } catch (error) {
    console.warn('Failed to read articles directory:', error)
    return []
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Gzip圧縮を有効化
    compression({
      include: [/\.(js|css|html|svg)$/],
      threshold: 1024, // 1KB以上のファイルを圧縮
    }),
    // バンドルサイズ分析（ANALYZE=true時のみ）
    process.env.ANALYZE === 'true' && visualizer({
      open: true,
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
    // Sitemap生成
    sitemap({
      hostname: 'https://anklehold.jocarium.productions',
      dynamicRoutes: getArticleIds().map(id => `/news/${id}`),
      exclude: ['/404'],
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssMinify: 'lightningcss',
    minify: 'esbuild',
    // モジュールプリロードを最適化（LCP改善）
    modulePreload: {
      polyfill: false, // ポリフィル削減
      resolveDependencies: (filename, deps) => {
        // 初期ロードに必要な最小限のチャンクのみプリロード
        if (filename.includes('index')) {
          return deps.filter(dep => 
            dep.includes('react-vendor') || 
            dep.includes('router')
          );
        }
        return [];
      },
    },
    // ターゲットブラウザを指定（モダンブラウザのみ）
    target: 'es2020',
    // ソースマップを無効化（本番環境）
    sourcemap: false,
    // CSSコード分割を無効化（FCP改善）
    cssCodeSplit: false,
    // アセットのインライン化閾値を上げる（小さいファイルをインライン化）
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // ファイル名にハッシュを追加してキャッシュ最適化
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        manualChunks: (id) => {
          // React関連を分離（最優先でロード）
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          // React Router単独で分離（初期ロードのみ）
          if (id.includes('node_modules/react-router-dom')) {
            return 'router';
          }
          // アニメーションライブラリを分離（遅延ロード）
          if (id.includes('node_modules/gsap') || 
              id.includes('node_modules/@gsap') || 
              id.includes('node_modules/motion') || 
              id.includes('node_modules/lenis')) {
            return 'animation';
          }
          // 3Dライブラリを分離（重い - 遅延ロード）
          if (id.includes('node_modules/three') || 
              id.includes('node_modules/ogl')) {
            return '3d-vendor';
          }
          // Markdown関連を分離（遅延ロード）
          if (id.includes('node_modules/react-markdown') ||
              id.includes('node_modules/remark-') ||
              id.includes('node_modules/rehype-') ||
              id.includes('node_modules/highlight.js') ||
              id.includes('node_modules/katex')) {
            return 'markdown';
          }
          // UI関連を分離（遅延ロード）
          if (id.includes('node_modules/@radix-ui') ||
              id.includes('node_modules/lucide-react')) {
            return 'ui-vendor';
          }
        },
      },
    },
    // チャンクサイズ警告の閾値を調整
    chunkSizeWarningLimit: 600,
    // 圧縮を有効化
    reportCompressedSize: true,
  },
  // 最適化設定
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['three', 'ogl', 'gsap'],
  },
  // サーバー設定（開発時のパフォーマンス向上）
  server: {
    warmup: {
      clientFiles: ['./src/main.tsx', './src/routes/HeroPage.tsx'],
    },
  },
})