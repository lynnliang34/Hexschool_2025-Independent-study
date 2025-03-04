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

<br>

### 安裝 sass

```bash
npm add -D sass
```

#### 測試

1. src 資料夾 > 新增 all.scss
2. main.jsx 引入 all.scss

```bash
import './assets/all.scss';
```

<br>

### 安裝 Boostrap、react router、axios

```bash
npm i bootstrap react-router axios
```

<br>

1. src 資料夾 > 新增 utils 資料夾
2. all.scss 移至 utils 資料夾
3. 更改 main.jsx 引入 all.scss 路徑
4. 複製 node_modules > bootstrap > scss 的 \_variables.scss、\_variables-dark.scss
5. 貼到 utils 資料夾，自訂 bootstrap 樣式

<br>

### 安裝 react-hook-form、react-loading

```bash
npm i react-hook-form react-loading
```

<br>

#### react 降版本以相容 react-loading

```bash
npm install react@18.3.1 react-dom@18.3.1
```

<br>

### 安裝 ### Redux toolkit

```bash
npm i @reduxjs/toolkit
```
