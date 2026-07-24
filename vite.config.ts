import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    target: 'es2015',
    minify: 'esbuild',
    // Manual chunks only make sense for the browser bundle; the SSR bundle is a
    // single entry used at build time by the prerenderer.
    rollupOptions: isSsrBuild
      ? undefined
      : {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              router: ['react-router-dom'],
              motion: ['framer-motion'],
            },
          },
        },
  },
  // Bundle deps into the SSR build so the prerender script is self-contained.
  ssr: {
    noExternal: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
}));
