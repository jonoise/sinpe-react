const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Sinpe React',
  tagline: 'Sinpe Component for React',
  url: 'https://soloamilkar.github.io',
  baseUrl: '/sinpe-react/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: 'false',
  organizationName: 'soloamilkar', // Usually your GitHub org/user name.
  projectName: 'sinpe-react', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/'
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('sinpe-react/dist/sinpe-react.cjs.development.css')]
        }
      }
    ]
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  {
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title: 'Sinpe React',
      logo: {
        alt: 'My Site Logo',
        src: 'img/favicon.ico'
      },
      items: [{
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial'
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/soloamilkar/sinpe-react',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [{
          title: 'Docs',
          items: [{
            label: 'Tutorial',
            to: '/docs/intro'
          }]
        },
        {
          title: 'Comunidad',
          items: [{
            label: 'Discord',
            href: 'https://discord.gg/vpjzpGgn'
          }, {
            label: 'GitHub',
            href: 'https://github.com/soloamilkar/sinpe-react'
          }]
        },
        {
          title: 'Legal',
          items: [{
            label: 'Licencia',
            to: '/licencia'
          }]
        },
        {
          title: 'More',
          items: [{
              label: 'Contacto',
              to: 'mailto:amilkarms@outlook.com'
            },
            {
              label: 'Contribuir',
              to: 'https://github.com/soloamilkar/sinpe-react'
            },
            {
              label: 'Donar 💓',
              to: '/donar'
            }
          ]
        }
      ],
      copyright: `Costa Rica, ${new Date().getFullYear()} Sinpe-React.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    },

  }
}
