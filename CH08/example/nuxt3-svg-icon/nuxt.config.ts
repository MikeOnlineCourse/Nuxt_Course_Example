import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
"vite": {
   plugins: [
     createSvgIconsPlugin({
       iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
       symbolId: '[dir]/[name]',
       customDomId: '__svg__icons__dom__',
     }),
   ],
 },
})
