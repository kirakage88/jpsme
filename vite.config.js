import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages subpath: https://kirakage88.github.io/jpsme/
  base: '/jpsme/',
})