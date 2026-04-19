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
    { text: 'Скачать', link: '/download' },
  ],
  sidebar: [
    {
      text: 'Справка',
      items: [
        { text: 'О проекте', link: '/docs/about/about' },
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
