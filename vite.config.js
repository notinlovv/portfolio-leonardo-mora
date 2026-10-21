import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // <-- Corregido el nombre aquí
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
