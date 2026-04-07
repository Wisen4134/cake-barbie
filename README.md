# 蛋糕芭比 Cake Barbie

純前端靜態形象網站 MVP，使用 React + Vite + Tailwind CSS 開發，預計部署到 GitHub Pages。

## 專案用途

- 首頁：輪播、熱門商品、合作品牌、創辦人介紹
- 作品集：分類篩選、lazy loading、載入更多
- 聯絡我們：電話、地址、社群連結、Google Maps iframe
- 所有可維護內容集中在 `src/data/`

## 技術選擇

- React 18
- Vite 5
- React Router（Hash Router）
- Tailwind CSS
- gh-pages

## 專案結構

```text
cake-barbie/
├─ docs/
├─ public/
├─ src/
│  ├─ components/
│  ├─ data/
│  └─ pages/
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
```

## 資料維護位置

平常改內容，優先改這 3 個檔案：

- `src/data/homepage.js`
- `src/data/portfolio.js`
- `src/data/contact.js`

如果只是換圖片、改文字、改電話地址，通常不用動頁面元件。

## 本機開發 SOP

第一次安裝：

```bash
npm install
```

啟動開發站：

```bash
npm run dev
```

開啟瀏覽器後，進入 Vite 顯示的網址，通常是：

```text
http://localhost:5173/
```

正式版編譯：

```bash
npm run build
```

本機預覽正式版：

```bash
npm run preview
```

## Git 要推哪些檔案

應該推上 Git 的：

- `src/`
- `public/`
- `docs/`
- `index.html`
- `package.json`
- `package-lock.json`
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `.gitignore`
- `README.md`

不要推上 Git 的：

- `node_modules/`
- `dist/`

這兩個已經放進 `.gitignore`。

## 第一次建立 GitHub Repo SOP

先在 GitHub 網站建立一個空的 repo。

假設你的 repo 名稱叫：

```text
cake-barbie
```

然後在本機專案資料夾執行：

```bash
git init
git add .
git commit -m "init: scaffold cake barbie site"
git branch -M main
git remote add origin https://github.com/你的帳號/cake-barbie.git
git push -u origin main
```

如果這個資料夾本來就已經有 git，只需要確認 remote：

```bash
git remote -v
```

若還沒設定 origin，再補：

```bash
git remote add origin https://github.com/你的帳號/cake-barbie.git
```

## GitHub Pages 部署 SOP

### 1. 先確認 repo 名稱

目前專案的 Vite base 寫在：

- `vite.config.js`

目前值是：

```js
base: "/cake-barbie/"
```

如果你的 GitHub repo 名稱不是 `cake-barbie`，這裡要一起改。

例如 repo 名稱是 `my-cake-site`，就改成：

```js
base: "/my-cake-site/"
```

### 2. 確認 deploy script

`package.json` 已經有：

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 3. 部署

直接執行：

```bash
npm run deploy
```

這個指令會做兩件事：

1. 先跑 `npm run build`
2. 再把 `dist/` 內容發佈到 GitHub Pages 用的 branch

通常會是 `gh-pages` branch。

### 4. 到 GitHub 開啟 Pages

進 GitHub repo 頁面：

1. 打開 `Settings`
2. 找 `Pages`
3. `Source` 選擇 `Deploy from a branch`
4. Branch 選 `gh-pages`
5. Folder 選 `/ (root)`

存檔後，GitHub 會提供網址，通常會像：

```text
https://你的帳號.github.io/cake-barbie/
```

## 日後更新網站 SOP

每次修改完成後：

```bash
git add .
git commit -m "feat: update homepage content"
git push
npm run deploy
```

這樣就會同時更新：

- GitHub 原始碼
- GitHub Pages 靜態網站

## 常見問題

### 為什麼不能直接雙擊 `dist/index.html`？

因為目前專案是為 GitHub Pages 子路徑部署而設定，`vite.config.js` 內有：

```js
base: "/cake-barbie/"
```

這會讓 build 後的資源路徑以 `/cake-barbie/` 為基準。  
所以開發時請用：

```bash
npm run dev
```

正式版本機預覽請用：

```bash
npm run preview
```

### 我還沒放真實圖片可以嗎？

可以。現在頁面已經支援占位顯示，之後只要把圖片放到 `public/images/...`，再把對應路徑填進 `src/data/` 即可。
