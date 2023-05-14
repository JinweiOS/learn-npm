import { defineConfig } from 'vitepress'

export default defineConfig({
  // 博客标题
  title: "JinweiOS's Blog",

  // 描述
  description: "I Want To Share Everything with you!",

  // 主题欸之
  themeConfig: {
    // 导航配置，头部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '我想说', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    // 社交帐号
    socialLinks: [
      { icon: 'github', link: 'https://github.com/JinweiOS' }
    ]
  }
})
