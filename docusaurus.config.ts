import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const lang = process.env.DOCUSAURUS_CURRENT_LOCALE

const config: Config = {
  title: 'Dobot+ Plugins Toolkit',
  tagline: lang === 'en' ? 'Development toolkit For Dobot+ plugin' : 'Dobot+ 插件开发工具',
  favicon: 'img/favicon.png',
  url: 'https://toadyokai.github.io/',
  baseUrl: '/dobotplus',
  organizationName: 'Dobot',
  projectName: 'docusaurus',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  plugins: ['docusaurus-plugin-sass'],
  markdown: {
    mermaid: true
  },
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US'
      }
    }
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          lastVersion: 'current',
          versions: {}
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorials',
          position: 'left',
          label: lang === 'en' ? 'Tutorials' : '快速入门'
        },
        {
          type: 'docSidebar',
          sidebarId: 'api',
          position: 'left',
          label: lang === 'en' ? 'API' : '配置文档'
        },
        {
          type: 'docSidebar',
          sidebarId: 'components',
          position: 'left',
          label: lang === 'en' ? 'Components' : '组件'
        },
        {
          type: 'docSidebar',
          sidebarId: 'lua',
          position: 'left',
          label: lang === 'en' ? 'Lua' : 'Lua指令'
        },
        {
          type: 'docSidebar',
          sidebarId: 'examples',
          position: 'left',
          label: lang === 'en' ? 'Examples' : '案例'
        },
        {
          type: 'localeDropdown',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'light',
      copyright: `© 2023 Dobot All Rights Reserved. 粤ICP备16048417号-1`
    },

    prism: {
      additionalLanguages: ['powershell', 'lua', 'bash'],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    },
    algolia: {
      appId: '4SOWVHXZB0',
      apiKey: '9ecc4014fb4f75517d42cf5541f58e42',
      indexName: 'dobotplugintoolkit',
      contextualSearch: true,
      externalUrlRegex: 'external\\.com|domain\\.com',
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/'
      },
      searchParameters: {},
      searchPagePath: 'search',
      insights: true
    }
  } satisfies Preset.ThemeConfig
}

export default config
