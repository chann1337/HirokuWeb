import { defineConfig } from 'vitepress';
import ru from '../config';
import en from '../en/config';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HirokuLauncher",
  description: 'HirokuLauncher — современный лаунчер Minecraft: Java Edition для Android',
  base: isGitHubActions && repoName ? `/${repoName}/` : '/',
  srcExclude: ['official-website/**'],
  lastUpdated: true,
  cleanUrls: true,
  locales: {
    root: {label: 'Русский', ...ru},
    en: {label: 'English', ...en},
  },
  sitemap: {
    hostname: 'https://chann1337.github.io'
  },
  head: [
    ['link', { rel: 'icon', href: '/hiroku_icon.svg' }],
    ['meta', { name: 'keywords', content: "hiroku,hirokulauncher,minecraft,java,android,启动器"}]
  ],
  vite: {
    server: {
      fs: {
        allow: ['..']
      }
    },
    build: {
      rollupOptions: {
        external: [/^server\/.*/]
      }
    }
  }
})