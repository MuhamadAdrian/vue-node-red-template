import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts';
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Pages({
      routeStyle: 'nuxt',
      resolver: 'vue'
    }),
    Layouts(),
  ],
  optimizeDeps: {
    include: [
      'node-red-contrib-uibuilder/front-end/uibuilder.esm.js',
    ]
  },
  server:{
    proxy:{
      '/uibuilder':{
        target: "http://localhost:1880/uibuilder",
        changeOrigin: true,
        ws:true,
        rewrite: (path)=>path.replace(/\/uibuilder/, ''),
      },
    }
  }
})
