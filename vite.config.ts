import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mm-tracker/', // <--- AGREGA ESTA LÍNEA (cambia 'mm-tracker' por el nombre de tu repo)
})