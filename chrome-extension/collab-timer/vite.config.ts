import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/main.tsx'),
        background: resolve(__dirname, 'src/background/background.ts'),
      },
      output: {
        entryFileNames: '[name].js',
        dir: 'dist',
      },
    },
  },
  plugins: [
    react(),
    copy({
      verbose: true,
      hook: 'writeBundle',
      targets: [
        {
          src: 'manifets.json',
          dest: 'dist',
        },
        {
          src: 'public/*',
          dest: 'dist/public',
        },
        {
          src: 'index.html',
          dest: 'dist',
        },
      ],
    }),
  ],
})
