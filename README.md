<p align="center">
    <a target="_blank" href="https://github.com/Zhengqbbb/cz-git">
        <img src="https://user-images.githubusercontent.com/40693636/154064210-964aeaa0-d9dc-4cea-9e52-2ffc3789611b.png" alt="cz-git-logo" width="400" data-width="400" data-height="400">
    </a>
</p>

<h1 align="center">cz-git</h1>

<p align="center">
    <a target="_blank" href="https://github.com/commitizen/cz-cli#adapters">
      <img style="display:inline-block;margin:0.2em;" alt="Commitizen-Adapter" src="https://img.shields.io/badge/Commitizen-Adapter-red.svg?logo=git&style=flat">
    </a>
    <a target="_blank" href="https://cz-git.qbb.sh/cli/">
      <img style="display:inline-block;margin:0.2em;" alt="CLI-Link" src="https://img.shields.io/badge/Commitizen-CLI-red.svg?logo=git&style=flat">
    </a>
    <br/>
    <a target="_blank" href="http://commitizen.github.io/cz-cli/">
      <img style="display:inline-block;margin:0.2em;" alt="commitizen-friendly" src="https://img.shields.io/badge/Commitizen-friendly-brightgreen.svg?logo=github">
    </a>
    <a target="_blank" href="https://github.com/Zhengqbbb/cz-git">
      <img style="display:inline-block;margin:0.2em;" alt="GitHub Repo stars" src="https://img.shields.io/github/stars/zhengqbbb/cz-git?style=social">
    </a>
    <a target="_blank" href="https://github.com/Zhengqbbb/cz-git/actions/workflows/nodejs.yml">
      <img style="display:inline-block;margin:0.2em;" alt="test-ci" src="https://github.com/Zhengqbbb/cz-git/workflows/Node.js%20CI/badge.svg">
    </a>
    <br>
    <a href="https://www.npmjs.com/package/cz-git">
        <img style="display:inline-block;margin:0.2em;" alt="npm-download" src="https://img.shields.io/npm/dm/cz-git.svg?color=blue&style=flat-square&logo=npm&label=cz-git">
        <img style="display:inline-block;margin:0.2em;" alt="npm" src="https://img.shields.io/npm/v/cz-git?style=flat-square&logo=npm">
    </a>
    <a href="https://www.npmjs.com/package/czg">
        <img style="display:inline-block;margin:0.2em;" alt="npm-download" src="https://img.shields.io/npm/dm/czg.svg?color=blue&style=flat-square&logo=npm&label=czg">
    </a>
    <br/>
    <a href="https://formulae.brew.sh/formula/czg">
        <img style="display:inline-block;margin:0.2em;" alt="homebrew" src="https://img.shields.io/homebrew/v/czg?style=flat-square&logo=homebrew&label=homebrew-czg">
    </a>
</p>

<p align="center">
    <a href="https://github.com/Zhengqbbb/cz-git">Github</a>
    &nbsp; | &nbsp;
    <a href="https://cz-git.qbb.sh/guide/">Installation</a>
    &nbsp; | &nbsp;
    <a href="https://cz-git.qbb.sh">Website</a>
    &nbsp; | &nbsp;
    <a href="https://cz-git.qbb.sh/cli/">CLI</a>
    <br/>
    <a href="https://cz-git.qbb.sh/zh/">简体中文文档</a>
</p>

## Introduction

More engineered, lightweight, customizable, standard output format [commitizen adapter](https://github.com/commitizen/cz-cli) and [CLI](https://cz-git.qbb.sh/cli/).

![demo-gif](https://user-images.githubusercontent.com/40693636/188255006-b9df9837-4678-4085-9395-e2905d7ec7de.gif)

> **What is commitizen**: A Node.js-based `git commit` command-line tool that assists in generating standardized commit messages. <br><br>
> **What is an adapter**: Replace the **interactive** plugin for the commitizen command line tool.

## Feature

- Just to be a **lazy man** !!! Friendly command line tool,  Supports **search and selection** on the command line, reducing spelling errors.
- **Lightweight**, **Highly Customizable**, but the output format follows the standard [Angular commit](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits) specification.
- [Better for monorepo engineering](https://cz-git.qbb.sh/recipes/#scopes) and **commitlint** project to give relevant verification information to the command line.
- Better linking with [issuePrefixs](https://cz-git.qbb.sh/recipes/defaultIssues.html) **for issue** | ✅ Support **emoji** in commit.

[⇒ Why cz-git](https://cz-git.qbb.sh/guide/why.html)

```bash
$ npm i -D cz-git
+ cz-git          (1.6 MB)
added 1 package in 0.482s
```

## Usage

[⇒ Get Started](https://cz-git.qbb.sh/guide/)

## Configure Template

[⇒ Configure Template](https://cz-git.qbb.sh/config/)

## Options

[⇒ Show Related](https://cz-git.qbb.sh/config/show.html)

[⇒ Engineering Related](https://cz-git.qbb.sh/config/engineer.html)

## Recipes

[⇒ Recipes](https://cz-git.qbb.sh/recipes/)

## FAQ

[⇒ FAQ](https://cz-git.qbb.sh/faq/)

## Projects using cz-git

<table>
  <tr>
    <td align="center" width="200px">
      <a target="_blank" href="https://github.com/element-plus/element-plus">
        <img src="https://user-images.githubusercontent.com/40693636/172459748-939e3f1b-a694-4c09-b643-e1dce602105c.png" alt="Element Plus logo" width="40"><br>
        <sub>Element Plus</sub>
      </a>
    </td>
    <td align="center" width="200px">
      <a target="_blank" href="https://github.com/vueComponent/ant-design-vue">
        <img src="https://user-images.githubusercontent.com/40693636/175873226-45eebf9c-280f-4201-a3d1-4ab259f5a6ad.png" alt="Ant Design Vue logo" width="40"><br>
        <sub>Ant Design Vue</sub>
      </a>
    </td>
    <td align="center" width="200px">
      <a target="_blank" href="https://github.com/Tencent/tdesign-vue-next">
        <img src="https://user-images.githubusercontent.com/40693636/170830562-38e4c998-9af4-4303-9270-4f14e0942b08.png" alt="TDesign-Vue-Next logo" width="40"><br>
        <sub>TDesign-Vue-Next</sub>
      </a>
    </td>
    <td align="center" width="200px">
      <a target="_blank" href="https://github.com/IDuxFE/idux">
        <img src="https://user-images.githubusercontent.com/40693636/171067486-56f50e23-a40b-4353-9c99-6fef702c9b4b.png" alt="iDux logo" width="40"><br>
        <sub>iDux</sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="200px">
      <a target="_blank" href="https://github.com/jdf2e/nutui">
        <img src="https://user-images.githubusercontent.com/40693636/176894936-88fc85da-8fd7-4a0f-b641-7268c4759eb1.png" alt="NntUI logo" width="40"><br>
        <sub>NntUI</sub>
      </a>
    </td>
    <td align="center" width="200px">
      <a target="_blank" href="https://github.com/vbenjs/vue-vben-admin">
        <img src="https://user-images.githubusercontent.com/40693636/178189964-931a1fc2-92df-4d04-8d0d-b748fc318c0a.png" alt="Vben-Admin logo" width="40"><br>
        <sub>Vben-Admin</sub>
      </a>
    </td>
    <td align="center" width="200px">
      <a target="_blank" href="https://github.com/buqiyuan/vue3-antd-admin">
        <img src="https://user-images.githubusercontent.com/40693636/170830597-31d6f0d7-2c93-491b-a984-7bf21db8f75b.png" alt="Vue3-Antd-Admin logo" width="40"><br>
        <sub>Vue3-Antd-Admin</sub>
      </a>
    </td>
    <td align="center" width="200px">
      <a target="_blank" href="https://github.com/HalseySpicy/Geeker-Admin">
        <img src="https://user-images.githubusercontent.com/40693636/170830842-319d83ce-df67-488d-b08f-818947a5a540.png" alt="Geeker-Admin logo" width="40"><br>
        <sub>Geeker-Admin</sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="200px">
      <a target="_blank" href="https://github.com/vuepress-theme-hope/vuepress-theme-hope">
        <img src="https://user-images.githubusercontent.com/40693636/170830621-45577c1d-6e6e-4916-bb43-15af954d994b.png" alt="Vuepress-Theme-Hope logo" width="40"><br>
        <sub>Vuepress-Theme-Hope</sub>
      </a>
    </td>
    <td align="center" width="200px">
      <a target="_blank" href="https://github.com/Renovamen/vuepress-theme-gungnir">
        <img src="https://user-images.githubusercontent.com/40693636/170830637-0d465b52-6204-4bbd-872f-fb6f27f1ed50.png" alt="Vuepress-Theme-Gungnir logo" width="40"><br>
        <sub>Vuepress-Theme-Gungnir</sub>
      </a>
    </td>
  </tr>
</table>

## LICENSE

MIT
Copyright (c) 2022-present Qiubin Zheng <zhengqbbb@gmail.com> (https://github.com/Zhengqbbb)

> I just do my best to make thing well, Could you give a [star ⭐](https://github.com/Zhengqbbb/cz-git) to encourage me ?
