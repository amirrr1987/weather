import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'


export default defineConfig({
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
