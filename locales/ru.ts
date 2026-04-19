import type { DefaultTheme } from 'vitepress';

export default <DefaultTheme.Config>{
  search: {
    provider: 'local',
    options: {
      translations: {
        button: {
          buttonText: 'Поиск',
          buttonAriaLabel: 'Поиск',
        },
        modal: {
          displayDetails: 'Показать детали',
          resetButtonTitle: 'Сбросить поиск',
          backButtonTitle: 'Закрыть поиск',
          noResultsText: 'Ничего не найдено',
          footer: {
            selectText: 'Выбрать',
            selectKeyAriaLabel: 'enter',
            navigateText: 'Навигация',
            navigateUpKeyAriaLabel: 'Стрелка вверх',
            navigateDownKeyAriaLabel: 'Стрелка вниз',
            closeText: 'Закрыть',
            closeKeyAriaLabel: 'esc',
          },
        },
      },
    },
  },
  docFooter: {
    prev: 'Назад',
    next: 'Вперед',
  },
  darkModeSwitchLabel: 'Тема',
  returnToTopLabel: 'Наверх',
  sidebarMenuLabel: 'Меню',
  editLink: false,
  lastUpdated: {
    text: 'Обновлено',
    formatOptions: { dateStyle: 'long', timeStyle: 'short' },
  },
  nav: [
    { text: 'Главная', link: '/' },
    {
      text: 'Скачать',
      items: [
        { text: 'HirokuLauncher 1', link: '/download' },
        { text: 'HirokuLauncher 2', link: '/zl2-download' },
      ],
    },
    {
      text: 'Документация',
      items: [
        { text: 'Документация лаунчера', link: '/docs/projects/zl2' },
        { text: 'О сайте', link: '/docs/about/about' },
      ],
    },
  ],
  sidebar: [
    {
      text: 'Проекты',
      items: [
        { text: 'HirokuLauncher 1', link: '/docs/projects/zl1' },
        { text: 'HirokuLauncher 2', link: '/docs/projects/zl2' },
      ],
    },
    {
      text: 'Руководство по ZL2',
      items: [
        { text: 'Установка игры', link: '/docs/help/download_game' },
        { text: 'ModLoader', link: '/docs/help/modloader' },
        { text: 'Аккаунты', link: '/docs/help/account' },
        { text: 'Сторонняя авторизация', link: '/docs/help/auth_server' },
        { text: 'Скины и плащи', link: '/docs/help/changing_skin_capes' },
        { text: 'Изоляция версий', link: '/docs/help/version_isolation' },
      ],
    },
    {
      text: 'Справка по управлению ZL2',
      collapsed: true,
      items: [
        { text: 'Обзор', link: '/docs/control2_help/overview' },
        { text: 'Базовые операции редактора', link: '/docs/control2_help/basic_operation' },
        { text: 'Операции с раскладкой', link: '/docs/control2_help/control_layout_operations' },
        { text: 'Слои управления', link: '/docs/control2_help/control_layer' },
        { text: 'Элементы управления', link: '/docs/control2_help/controls' },
      ],
    },
    {
      text: 'О сайте',
      items: [
        { text: 'О сайте', link: '/docs/about/about' },
        { text: 'Политика конфиденциальности', link: '/docs/about/privacy' },
        { text: 'Условия использования', link: '/docs/about/terms' },
      ],
    },
  ],
  outlineTitle: 'Содержание',
  footer: {
    copyright: '© 2026 HirokuLauncher | MIT License',
  },
  notFound: {
    title: 'Страница не найдена',
    quote: 'Проверьте адрес или вернитесь на главную страницу.',
    linkText: 'На главную',
  },
};
