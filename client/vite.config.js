import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcss from 'postcss'

export default defineConfig({
  build:{
    chunkSizeWarningLimit: 10000, // Set your desired chunk size limit
    outDir: 'build', // Specify your custom output directory
  },
  plugins: [react()],
  css:{
    postcss,
  }
})