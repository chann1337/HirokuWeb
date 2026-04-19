import { defineAdditionalConfig } from 'vitepress';
import zh from './locales/zh';

export default defineAdditionalConfig({
  lang: 'zh-Hans',
  description: "HirokuLauncher 是一款面向 Android 的 Minecraft Java Edition 启动器，提供更现代的界面与更稳定的体验。",

  themeConfig: zh
});