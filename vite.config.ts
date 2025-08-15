import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  // Auto-detect GitHub Pages base if running in Actions; fallback to '/'
  const repo = ((globalThis as any)?.process?.env?.GITHUB_REPOSITORY || '').split('/')[1] || ''
  const base = repo ? `/${repo}/` : '/'
  return {
    plugins: [react()],
    base,
  }
})
