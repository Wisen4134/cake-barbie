# 蛋糕芭比 Cake Barbie

純前端靜態形象網站 MVP，使用 React + Vite + Tailwind CSS 開發。  
目前部署策略已調整為：

- 預設 build：相容 Cloudflare Pages 與一般靜態主機
- GitHub Pages build：使用 `github` mode 輸出子路徑 base

---

## 專案用途

- 首頁：輪播、熱門商品、合作品牌、創辦人介紹
- 作品集：分類篩選、lazy loading、載入更多
- 聯絡我們：電話、地址、社群連結、Google Maps iframe
- 所有可維護內容集中在 `src/data/`

---

## 技術選擇

- React 18
- Vite 8
- React Router（Hash Router）
- Tailwind CSS
- gh-pages

---

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

---

## 資料維護位置

平常改內容，優先改這 3 個檔案：

- `src/data/homepage.js`
- `src/data/portfolio.js`
- `src/data/contact.js`

如果只是換圖片、改文字、改電話地址，通常不用動頁面元件。

---

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

---

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

---

## 部署模式

目前專案採用「同一份程式碼，依 build mode 切換 base」策略。

`vite.config.js`：

```js
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === "github" ? "/cake-barbie/" : "/",
  };
});
```

意思是：

- 一般 build：`base = "/"`  
  適合 Cloudflare Pages、一般靜態主機、或自有網域根目錄部署
- GitHub Pages build：`base = "/cake-barbie/"`  
  適合 repo 名稱為 `cake-barbie` 的 GitHub Pages 子路徑部署

---

## GitHub Pages 部署 SOP

### 1. 確認 repo 名稱

目前 GitHub Pages 模式的 Vite base 是：

```js
"/cake-barbie/"
```

如果 repo 名稱不是 `cake-barbie`，必須同步修改 `vite.config.js`：

```js
base: mode === "github" ? "/你的-repo-名稱/" : "/",
```

### 2. 確認 deploy script

`package.json` 目前是：

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "vite build --mode github",
  "deploy": "gh-pages -d dist"
}
```

這代表：

- 一般 `npm run build`：輸出給 Cloudflare / 一般靜態主機
- `npm run deploy`：先用 `github` mode build，再發佈到 `gh-pages`

### 3. 部署

```bash
npm run deploy
```

這個指令會做兩件事：

1. 先跑 `vite build --mode github`
2. 再把 `dist/` 內容發佈到 `gh-pages` branch

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

---

## Cloudflare Pages 部署 SOP

目前預設 build 已經相容 Cloudflare Pages，不需要額外改 `base`。

### 建議設定

- Build command:

```bash
npm run build
```

- Build output directory:

```text
dist
```

### 說明

因為目前預設 `base` 是 `/`，所以：

- Cloudflare Pages
- 自訂網域
- 一般靜態空間根目錄

都可以直接使用預設 build 結果。

---

## 日後更新網站 SOP

每次修改完成後：

```bash
git add .
git commit -m "feat: update homepage content"
git push
```

如果是要更新 GitHub Pages：

```bash
npm run deploy
```

如果是 Cloudflare Pages 接 Git，自動部署通常只需要：

```bash
git push
```

---

## 常見問題

### 為什麼不能直接雙擊 `dist/index.html`？

這是因為 React/Vite build 的輸出預期是在 HTTP/HTTPS 環境下被載入，不是主要設計給 `file://` 直接開。

另外如果是 GitHub Pages mode build，資源路徑還會帶子路徑 base，例如：

```js
"/cake-barbie/"
```

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

---

## 部署策略變更紀錄

### 2026-05

- 原本部署思路偏向 GitHub Pages 單一路徑
- 後續為了兼容 Cloudflare Pages，調整為：
  - 預設 build 使用 `base: "/"`
  - GitHub Pages 使用 `vite build --mode github`
- `vite.config.js` 改為依 `mode` 切換 `base`
- `package.json` 的 `predeploy` 改成：

```json
"predeploy": "vite build --mode github"
```

這樣可以保留：

- GitHub Pages 子路徑部署能力
- Cloudflare Pages / 自訂網域部署能力
