# PixelCode学习平台 - Web前端开发课程作业

## 项目简介
PixelCode学习平台是一个像素风格的Web前端开发课程作业展示平台，使用Next.js框架构建，包含HTML、CSS、JavaScript等技术练习。平台展示了多个作业案例，涵盖像素艺术、游戏界面设计、交互功能实现等内容。

## QAnything集成路径与实现细节
### 集成路径
在 `src/app/practice/embed-demo/page.tsx` 文件中集成了QAnything。

### 实现细节
通过 `<iframe>` 标签将QAnything页面嵌入到项目中，具体代码如下：
```tsx
<iframe
  src="https://ai.youdao.com/saas/qanything/#/home"
  title="复古游戏机界面"
  width="100%"
  height="100%"
  style={{...}}
  allowFullScreen
/>
```

## WakaTime集成
### 实现位置
在 `src/app/wakatime-stats.tsx` 文件中实现了WakaTime编码时长统计功能。

### 实现步骤
1. 在 `package.json` 中添加 `wakatime` 依赖。
2. 创建 `getWakaTimeStats` 异步函数，通过WakaTime API获取编码时长数据。
3. 使用 `Suspense` 组件处理数据加载状态。
4. 在页脚展示编码时长信息。

### 配置要求
需要在 `.env.local` 文件中设置 `WAKATIME_API_KEY` 环境变量：
```plaintext
WAKATIME_API_KEY=your_api_key_here
```

## Next.js结构
项目主要目录结构如下：
```plaintext
├── src/
│   ├── app/
│   │   ├── globals.css         # 全局样式
│   │   ├── layout.tsx          # 根布局
│   │   ├── page.tsx            # 首页
│   │   ├── exercise-card.tsx   # 练习卡片组件
│   │   ├── exercises.json      # 练习数据
│   │   └── practice/           # 练习页面
├── public/                     # 静态资源
├── package.json                # 项目依赖和脚本
└── next.config.ts              # Next.js配置
```

## 旧作业整合
项目通过 `exercises.json` 文件管理所有作业信息，每个作业包含标题、描述、链接、标签等字段。在 `src/app/page.tsx` 中遍历该文件，动态渲染作业卡片。

## 运行指南
### 环境准备
确保已安装 [Node.js](https://nodejs.org/) (推荐版本18+) 和 [npm](https://www.npmjs.com/)。

### 安装依赖
在项目根目录下运行以下命令安装依赖：
```bash
npm install
```

### 开发模式
运行开发服务器：
```bash
npm run dev
```
打开浏览器访问 [http://localhost:3000](http://localhost:3000) 查看项目。

### 生产构建
构建生产版本：
```bash
npm run build
```
启动生产服务器：
```bash
npm run start
```

## 功能运行截图
由于无法直接提供截图，你可以按照以下步骤获取各功能的运行截图：
1. 启动开发服务器 (`npm run dev`)。
2. 打开浏览器访问对应页面。
3. 使用浏览器截图工具（如F12开发者工具截图功能）或系统截图工具（如Windows截图快捷键Win+Shift+S）获取截图。
https://img.picui.cn/free/2025/07/01/6863d9c1f3ec2.png
https://img.picui.cn/free/2025/07/01/6863d9c9a6438.png
https://img.picui.cn/free/2025/07/01/6863d9c1e6da6.png
https://img.picui.cn/free/2025/07/01/6863d9dcb802d.png
https://img.picui.cn/free/2025/07/01/6863d9c1dccf4.png
https://img.picui.cn/free/2025/07/01/6863da037e71e.png
https://img.picui.cn/free/2025/07/01/6863d9cee3e4f.png
https://img.picui.cn/free/2025/07/01/6863da05ce405.png
https://img.picui.cn/free/2025/07/01/6863d9c1abf73.png
https://img.picui.cn/free/2025/07/01/6863d9c1141c2.png
https://img.picui.cn/free/2025/07/01/6863da0f7a3f4.png
https://img.picui.cn/free/2025/07/01/6863da0ce47a3.png
以下是各功能对应页面：
- **QAnything集成**：[http://localhost:3000/practice/embed-demo](http://localhost:3000/practice/embed-demo)
- **WakaTime编码时长**：页面底部页脚部分
- **作业列表**：[http://localhost:3000](http://localhost:3000)
