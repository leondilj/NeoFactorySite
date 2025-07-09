import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Corrige caminhos para produção
export default defineConfig({
  base: './',
  build: {
    assetsDir: '',
  },
  plugins: [react()],
})
