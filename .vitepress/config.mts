import { defineConfig } from 'vitepress';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HirokuLauncher",
  description: 'HirokuLauncher - 在 Android 设备上畅玩 Minecraft: Java Edition',
  base: isGitHubActions && repoName ? `/${repoName}/` : '/',
  srcExclude: ['official-website/**'],
  lastUpdated: true,
  locales: {
    root: {label: '简体中文'},
    en: {label: 'English'},
  },
  sitemap: {
    hostname: 'https://ann1337.github.io'
  },
  head: [
    ['link', { rel: 'icon', href: '/zl_icon.webp' }],
    ['meta', { name: 'keywords', content: "hiroku,hirokulauncher,minecraft,java,android,启动器"}]
  ],
  themeConfig: {
    notFound: {
        title: '404',
        quote: 'Page Not Found',
        linkText: 'Go Home'
    },
    socialLinks: [
        { icon: 'github', link: 'https://github.com/ZalithLauncher' },
        { icon: 'discord', link: 'https://discord.gg/e7C4kytRgK' }
    ],
    logo: '/zl_icon.webp',
     search: {
      provider: 'local',
    }
  },
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