// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Download from './components/Download.vue'
import ApngPlayer from './components/ApngPlayer.vue'
import './style.css'
import './style/blur.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Download', Download)
    app.component('ApngPlayer', ApngPlayer)
  }
} satisfies Theme