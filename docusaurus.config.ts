import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'WeKube - 一个云原生应用引擎',
  tagline: '立即部署应用程序，无需关注底层集群或服务器！',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://wekube.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wekube', // Usually your GitHub org/user name.
  projectName: 'wekube', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({ versionDocsDirPath, docPath, locale }) =>
              "https://github.com/wekubecloud/wekube-docs/edit/main/" +
              (locale === "en" ? `${versionDocsDirPath}` : `i18n/${locale}/docusaurus-plugin-content-docs/current/`) +
              `/${docPath}`,
        },
        blog: {
          showReadingTime: true,
          // blogSidebarTitle: '近期文章',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({locale, blogDirPath, blogPath, permalink}) =>
          "https://github.com/wekubecloud/wekube-docs/edit/main/" +
              (locale === "en" ? `${blogDirPath}` : `i18n/${locale}/docusaurus-plugin-content-blog/`) +
              `/${blogPath}`,
          // Useful options to enforce blogging best practices
          // blogTitle: 'Blog title',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    blog: {
      sidebar: {
        groupByYear: true,
      },
    },
    navbar: {
      title: 'WeKube',
      logo: {
        alt: 'WeKube Logo',
        src: 'img/logo.png',
        href: 'https://wekube.com',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: 'https://wekube.com/zh-Hans/application/list',
          label: 'Start Now',
          position: 'left',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          to: 'https://github.com/wekubecloud/wekube-docs',
          position: 'right',
          target: '_blank',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    metadata: [{ name: 'title', content: 'WeKube' }],
    // announcementBar: {
    //   id: 'wekube_tip',
    //   content: `
    //   <div class="wk-announcement-bar" style="width: 100%;">
    //     线上体验！
    //   </div>
    //   `,
    //   isCloseable: false,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;