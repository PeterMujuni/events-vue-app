import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@templates": path.resolve(__dirname, "./src/components/templates"),
      "@organism": path.resolve(__dirname, "./src/components/organism"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
  }
  }
    
})
