import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  WindiCSS({
    scan: {
      dirs: ['.'], // all files in the cwd
      fileExtensions: ['vue', 'js', 'ts'], // also enabled scanning for js/ts
    },
  }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
