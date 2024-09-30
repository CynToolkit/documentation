import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pipelab Documentation",
  description: "Pipelab Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Reference', link: '/reference' },
      // { text: 'Blog', link: '/blog' },
      { text: 'Website', link: 'https://pipelab.app' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'What is Pipelab?', link: '/guide/what-is-pipelab' },
          { text: 'App', link: '/guide/app' },
          { text: 'Integration', link: '/guide/integration' },
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CynToolkit/cyn' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Armaldio'
    }
  }
})
