import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        propsDestructure: true,
        defineModel: true,
      },
    }),
    Pages({
      routeStyle: 'nuxt',
      resolver: 'vue',
    }),
    Layouts(),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      directoryAsNamespace: true,
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          '@vueuse/core': [
            'useBreakpoints',
          ],
        },
      ],
      dirs: [
        './src/layouts',
        './src/components',
        './src/pages',
      ],
    }),
  ],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/uibuilder': {
        target: 'http://localhost:1880/uibuilder',
        changeOrigin: true,
        ws: true,
        rewrite: path => path.replace(/\/uibuilder/, ''),
      },
    },
  },
})
