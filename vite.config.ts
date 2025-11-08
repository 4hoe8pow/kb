import react from '@vitejs/plugin-react-swc'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import { compression } from 'vite-plugin-compression2'
import { visualizer } from 'rollup-plugin-visualizer'

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
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssMinify: 'lightningcss',
    minify: 'esbuild',
    // モジュールプリロードを最適化
    modulePreload: {
      polyfill: true,
      resolveDependencies: (_filename, deps) => {
        // 重要なチャンクのみプリロード
        return deps.filter(dep => 
          dep.includes('react-vendor') || 
          dep.includes('index')
        );
      },
    },
    // ターゲットブラウザを指定（モダンブラウザのみ）
    target: 'es2020',
    // ソースマップを無効化（本番環境）
    sourcemap: false,
    // CSSコード分割を無効化（FCP改善）
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // ファイル名にハッシュを追加してキャッシュ最適化
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        manualChunks: (id) => {
          // React関連を分離（最優先でロード）
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/react-router-dom')) {
            return 'react-vendor';
          }
          // アニメーションライブラリを分離
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
          // UI関連を分離
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
})