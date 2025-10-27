import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build'

  return {
    plugins: [react()],
    base: isProduction ? '/lesson32-JS-MovieSearch/' : '/', // GitHub Pages base path only for production
    build: {
      outDir: 'dist',
      assetsDir: 'assets'
    }
  }
})
