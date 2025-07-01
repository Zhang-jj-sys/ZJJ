# Blog Platform

这是一个基于 [Next.js](https://nextjs.org) 构建的博客平台项目，由 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 脚手架初始化。

## 项目简介
本项目旨在打造一个功能丰富、易于扩展的博客平台，包含了多种前端技术的实践示例，如 CSS 布局、动画效果、TypeScript 类与继承等。

## 技术栈
- **Next.js**: 基于 React 的全栈框架，用于构建高性能的 Web 应用。
- **React**: 用于构建用户界面的 JavaScript 库。
- **TypeScript**: JavaScript 的超集，提供静态类型检查。
- **CSS**: 实现页面样式和动画效果。

## 项目结构
```plaintext
blog-platform/
├── .gitignore
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── practice/
│   │   └── images/
│   ├── vercel.svg
│   └── window.svg
├── src/
│   └── app/
│       ├── exercise-card.tsx
│       ├── exercises.json
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       ├── navbar.tsx
│       ├── page.tsx
│       ├── practice/
│       └── wakatime-stats.tsx
└── tsconfig.json
```

## 安装与运行
### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```
打开 [http://localhost:3000](http://localhost:3000) 即可在浏览器中查看效果。

## 功能示例
项目中包含多个实践示例，展示不同的前端技术：
- **CSS 相关**: 像素角色动画、游戏 HUD 设计、技能树布局等。
- **TypeScript 相关**: 类与对象、继承、回调函数等。
- **DOM 操作**: 动态更新页面元素、事件绑定等。

## 学习资源
要了解更多关于 Next.js 的信息，请参考以下资源：
- [Next.js 文档](https://nextjs.org/docs) - 学习 Next.js 的特性和 API。
- [学习 Next.js](https://nextjs.org/learn) - 交互式的 Next.js 教程。

## 部署
最简单的部署方式是使用 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)，这是 Next.js 官方推荐的部署平台。更多部署细节请参考 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。
