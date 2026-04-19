import type { DefaultTheme } from 'vitepress';

export default <DefaultTheme.Config> {
    search: {
        provider: 'local',
        options: {
            translations: {
                button: {
                    buttonText: 'Search',
                    buttonAriaLabel: 'Search',
                },
                modal: {
                    displayDetails: 'Show detailed list',
                    resetButtonTitle: 'Reset search',
                    backButtonTitle: 'Close search',
                    noResultsText: 'No results found',
                    footer: {
                        selectText: 'Select',
                        selectKeyAriaLabel: 'enter',
                        navigateText: 'Navigate',
                        navigateUpKeyAriaLabel: 'Arrow Up',
                        navigateDownKeyAriaLabel: 'Arrow Down',
                        closeText: 'Close',
                        closeKeyAriaLabel: 'esc',
                    },
                },
            },
        },
    },
    docFooter: {
        prev: 'Previous',
        next: 'Next'
    },
    darkModeSwitchLabel: 'Appearance',
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    editLink: false,
    lastUpdated: {
        text: 'Updated at',
        formatOptions: {
            dateStyle: 'medium',
            timeStyle: 'short'
        }
    },
    nav: [
        { text: 'Home', link: '/en/' },
        { text: 'Download', link: '/en/download' },
        { text: 'Documentation', link: '/en/docs/about/about' }
    ],
    sidebar: [
        {
            text: 'Project',
            items: [
                { text: 'About HirokuLauncher', link: '/en/docs/about/about' }
            ]
        },
        {
            text: 'Launcher Help',
            items: [
                { text: 'Download and Install Game', link: '/en/docs/help/download_game' },
                { text: 'ModLoader', link: '/en/docs/help/modloader' },
                { text: 'Account', link: '/en/docs/help/account' },
                { text: '3rd Authentication Servers', link: '/en/docs/help/auth_server' },
                { text: 'Replace Skin or Capes', link: '/en/docs/help/changing_skin_capes'},
                { text: 'Version Isolation', link: '/en/docs/help/version_isolation' }
            ]
        },
        {
            text: 'Control Layout Help',
            collapsed: true,
            items: [
                { text: 'Overview', link: '/en/docs/control2_help/overview' },
                { text: 'Basic Editor Operations', link: '/en/docs/control2_help/basic_operation' },
                { text: "Control Layout Operations", link: "/en/docs/control2_help/control_layout_operations" },
                { text: 'Control Layer', link: '/en/docs/control2_help/control_layer' },
                { text: 'Controls', link: '/en/docs/control2_help/controls' }
            ]
        },
        {
            text: 'About this site',
            items: [
                { text: 'About', link: '/en/docs/about/about' },
                { text: 'Privacy Policy', link: '/en/docs/about/privacy' },
                { text: 'Terms of Service', link: '/en/docs/about/terms' }
            ]
        }
    ],
    outlineTitle: 'On this page',
    footer: {
        copyright: 'Copyright © 2026 HirokuLauncher, All rights reserved. | MIT License'
    },

    notFound: {
        title: 'PAGE NOT FOUND',
        quote: "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
        linkText: 'Take me home'
    }

};
