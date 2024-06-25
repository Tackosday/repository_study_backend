import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export const env = loadEnv("development", process.cwd(), "VITE")
export default defineConfig({
  plugins: [react()],
})
