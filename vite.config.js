import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Set the base path for the application to be served from a subdirectory
  base: '/react-tailwind-boiler-plate/',
})