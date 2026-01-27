// @ts-check
// https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GetNotify Docs',
  tagline: 'API and user documentation for GetNotify',
  url: process.env.PUBLIC_DOCS_ORIGIN || 'https://docs.getnotify.org',
  baseUrl: '/',
  favicon: '/img/favicon.svg',
  organizationName: 'getnotify',
  projectName: 'getnotify.org',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GetNotify Docs',
        logo: {
          alt: 'GetNotify',
          src: 'img/favicon.svg',
        },
        items: [
          { to: '/intro', label: 'Docs', position: 'left' },
          { to: '/api/intro', label: 'API', position: 'left' },
          { to: '/client/intro', label: 'User guide', position: 'left' },
          { href: 'https://getnotify.org', label: 'getnotify.org', position: 'right' },
          { href: 'https://dashboard.getnotify.org', label: 'Dashboard', position: 'right' },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Introduction', to: '/intro' },
              { label: 'API overview', to: '/api/intro' },
              { label: 'User guide', to: '/client/intro' },
            ],
          },
          {
            title: 'Product',
            items: [
              { label: 'getnotify.org', href: 'https://getnotify.org' },
              { label: 'Dashboard', href: 'https://dashboard.getnotify.org' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} GetNotify.`,
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
