import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

const env = loadEnv("development", process.cwd(), 'VITE')
const config = JSON.parse(env.VITE_CONFIG_REACT);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:config
})
