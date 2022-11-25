import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { descriptionCN, github, ogImgCN, siteCN } from '../meta'
import { zh as nav } from './navbar'
import { zh as sidebar } from './sidebar'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: descriptionCN,

  themeConfig: {
    nav,
    sidebar,
    editLink: {
      pattern: `${github}/edit/main/docs/zh/:path`,
      text: '在 GitHub 上编辑此页',
    },
    // NOTE: wait for support: https://github.com/vuejs/vitepress/issues/631#issuecomment-1325241151
    algolia: {
      appId: 'QC8EFXZNC3',
      apiKey: 'bf9a47e8561e6b8ffdda0bf8595a2f5d',
      indexName: 'cz-git',
      placeholder: '搜索文档',
      buttonText: '搜索文档',
      searchParameters: {
        facetFilters: ['lang:zh-CN'],
      },
    },
    footer: {
      message: '我只是尽力将工具做得更好，如果可以的话欢迎给一个<a c-orange-5 target="_blank" href="https://github.com/Zhengqbbb/cz-git">star ⭐</a>',
      copyright: 'MIT Licensed | 版权所有 © 2022-present <a target="_blank" href="https://github.com/Zhengqbbb">Zhengqbbb</a>',
    },
  },

  head: [
    ['meta', { name: 'twitter:description', content: descriptionCN }],
    ['meta', { name: 'twitter:image', content: ogImgCN }],
    ['meta', { name: 'og:description', content: descriptionCN }],
    ['meta', { name: 'og:url', content: siteCN }],
    ['meta', { name: 'og:locale', content: 'zh_CN' }],
    ['meta', { name: 'og:image', content: ogImgCN }],
  ],
}