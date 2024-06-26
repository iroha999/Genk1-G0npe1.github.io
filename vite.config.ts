import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Genk1-G0npe1.github.io/'  // ここを自分のリポジトリ名に変更
})
