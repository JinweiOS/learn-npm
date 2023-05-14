import { defineConfig } from 'vitepress'

export default defineConfig({
  // 博客标题
  title: "JinweiOS's Blog",

  // 描述
  description: "I Want To Share Everything with you!",

  // 主题配置
  themeConfig: {
    // 导航配置，头部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '最近感想', link: '/doc/latest' }
    ],

    // 侧标栏
    sidebar: [
      {
        text: '这些天我想说的',
        items: [
          { text: '第一篇博客', link: '/doc/latest' },
          // '/'在此处代表的是项目的根目录
          { text: 'MD语法参考', link: '/doc/markdown-examples' },
          { text: '运行时API参考', link: '/doc/api-examples' }
        ]
      }
    ],

    // 社交帐号
    socialLinks: [
      { icon: 'github', link: 'https://github.com/JinweiOS' }
    ],


    // 脚注配置
    footer: {
      message: '我带愉悦的心情🍀创建了这个网站',
      copyright: 'Copyright © 2023-present JinweiOS'
    }
  }
})
