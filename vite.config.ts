import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const configDir = `./configs/${env.VITE_SITE_ID}`
  return {
    plugins: [
      vue(),
      ViteYaml(),
      dynamicImport()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@siteConfig': fileURLToPath(new URL(configDir, import.meta.url))
      }
    }
  }
})
