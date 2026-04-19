// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Download from './components/Download.vue'
import DownloadZL2 from './components/DownloadZL2.vue'
import ApngPlayer from './components/ApngPlayer.vue'
import './style.css'
import './style/blur.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('Download', Download)
    app.component('DownloadZL2', DownloadZL2)
    app.component('ApngPlayer', ApngPlayer)
  }
} satisfies Theme