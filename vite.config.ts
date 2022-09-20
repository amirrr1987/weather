import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'


export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [

    react(),

    WindiCSS({
      scan: {
        dirs: ['.'],
        fileExtensions: ['js', 'ts', 'jsx', 'tsx'],
      },
    }),

  ]
})

