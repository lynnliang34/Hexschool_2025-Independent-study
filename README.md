# Hexschool_2025-Independent-study

【六角學院】2025 框架班專題 – 愉運 Move with Joy

<br>

## 安裝套件

### 透過 vite 建立 React 專案

```
npm create vite@latest
```

Select a framework: React <br>
Select a variant: JavaScript

```
npm install
npm run dev
```

<br>

### 安裝 gh-pages 讓專案可快速部屬到 GitHub Page

```bash
npm install gh-pages
```

<br>

#### 修改設定 - package.json 檔案

1. 找到 "preview": "vite preview" 後面加逗號
2. 新增下面這行

```bash
"deploy": "gh-pages -d dist"
```

<br>

#### 修改設定 - vite.config.js 檔案

export default defineConfig 裡面，新增下面這行

```bash
  base: process.env.NODE_ENV === "production" ? "/Hexschool_2025-Independent-study/" : "/",
```

Hexschool_2025-Independent-study 為 GitHub 上 repository 名稱
