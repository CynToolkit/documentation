import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cyn Documentation",
  description: "Cyn Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Reference', link: '/reference' },
      // { text: 'Blog', link: '/blog' },
      { text: 'Website', link: 'https://cyn.armaldio.xyz' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'What is Cyn?', link: '/guide/what-is-cyn' },
          { text: 'App', link: '/guide/app' },
          { text: 'Integration', link: '/guide/integration' },
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Armaldio'
    }
  }
})
