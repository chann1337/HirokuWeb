import { defineAdditionalConfig } from 'vitepress';
import ru from './locales/ru';

export default defineAdditionalConfig({
  lang: 'ru-RU',
  title: 'HirokuLauncher',
  description: "HirokuLauncher — современный лаунчер Minecraft: Java Edition для Android.",
  themeConfig: ru
});