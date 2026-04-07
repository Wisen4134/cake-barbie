# Project: 蛋糕芭比 形象網站（純靜態 MVP）

## 🎯 Goal

建立一個蛋糕店的靜態形象網站，重點在於：
- 純前端架構，無需後端與資料庫
- Build 出純 HTML/CSS/JS，部署至 GitHub Pages
- 資料集中管理，方便日後維護與更新內容
- RWD 支援行動裝置

---

## 🧩 Tech Stack

| 項目 | 技術選擇 |
|---|---|
| 框架 | React + Vite |
| 路由 | React Router（Hash Mode）|
| 樣式 | Tailwind CSS |
| 部署 | GitHub Pages（`gh-pages` 套件）|
| 資料管理 | `src/data/` 純 JS 物件，與元件分離 |

> **為何用 Hash Mode（`/#/portfolio`）：** GitHub Pages 不支援 server-side routing，Hash Mode 可避免重新整理時出現 404。

---

## 📁 專案結構

```
cake-barbie/
├── public/
│   ├── favicon.ico
│   └── images/                  # 靜態圖片資源
│       ├── logo.png
│       ├── carousel/            # 首頁輪播圖
│       ├── products/            # 作品集圖片
│       └── founder.jpg
├── src/
│   ├── data/                    # ⭐ 日後維護只需改這裡
│   │   ├── homepage.js          # 輪播、熱門商品、合作品牌、創辦人
│   │   ├── portfolio.js         # 作品集完整清單
│   │   └── contact.js           # 聯絡資訊、社群連結、地圖座標
│   ├── components/
│   │   ├── Header.jsx           # Logo + 導覽列 + 漢堡選單
│   │   ├── Footer.jsx           # 版權、聯絡、地址
│   │   ├── Carousel.jsx         # 首頁圖片輪播
│   │   └── LazyImage.jsx        # 延遲載入圖片元件
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx
│   ├── App.jsx                  # 路由設定（Header + <Outlet> + Footer）
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 📦 頁面功能規劃

### Layout（所有頁面共用）

**Header**
- 左側：Logo 圖片 + 「蛋糕芭比」文字
- 右側：首頁 / 作品集 / 聯絡我們
- 手機版：漢堡選單，點擊展開下拉

**Footer**
- © 蛋糕芭比 {年份} 版權所有
- 聯絡電話
- 商家地址
- 社群連結（Facebook、LINE、Instagram icon）

---

### 1. 首頁（Home）

| 區塊 | 說明 |
|---|---|
| 第一列 - 圖片輪播 | 自動播放 + 左右手動切換，資料來自 `homepage.js` |
| 第二列 - 熱門商品 | 卡片排列（建議 3–4 張），每張有圖片、名稱、簡短描述 |
| 第三列 - 合作品牌（可選）| 合作過的知名店家 logo + 名稱，未來可改為「客戶好評」 |
| 第四列 - 創辦人介紹 | 照片 + 名字 + 一段品牌故事文字 |

> ⚠️ 合作品牌若放對方 logo，建議先確認對方是否允許，或改用文字名稱即可。

**維護方式：** 修改 `src/data/homepage.js` 中的圖片路徑與文字描述即可，不需動元件。

---

### 2. 作品集（Portfolio）

| 功能 | 說明 |
|---|---|
| 圖片卡片 Grid | 每張卡片有圖片、作品名稱、簡短描述 |
| 分類 Tag | 客製化蛋糕 / 牛渣糖，可點擊篩選 |
| 延遲載入 | 使用原生 `loading="lazy"` 屬性，捲動到才載入 |
| 載入更多 | 預設顯示 9 張，點「載入更多」再顯示 9 張，純前端分批渲染 |

**維護方式：** 修改 `src/data/portfolio.js`，每筆資料格式如下：

```js
// src/data/portfolio.js 範例
export const portfolioItems = [
  {
    id: 1,
    name: "客製生日蛋糕",
    category: "cake",          // "cake" | "candy"
    image: "/images/products/cake-001.jpg",
    description: "三層草莓奶油蛋糕，附手繪糖花裝飾",
  },
  {
    id: 2,
    name: "手工牛渣糖禮盒",
    category: "candy",
    image: "/images/products/candy-001.jpg",
    description: "傳統配方，每日現做",
  },
  // ...
];
```

---

### 3. 聯絡我們（Contact）

| 項目 | 說明 |
|---|---|
| 電話 | `<a href="tel:...">` 點擊可直接撥打 |
| 地址 | 文字顯示 + 嵌入 Google Maps iframe（填入座標） |
| Facebook | 連結至粉絲專頁（`target="_blank"`）|
| LINE | 使用 LINE 官方加好友連結（`https://line.me/ti/p/...`）|

**維護方式：** 修改 `src/data/contact.js`：

```js
// src/data/contact.js 範例
export const contactInfo = {
  phone: "04-XXXX-XXXX",
  address: "台中市XX區XX路XX號",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=...",
  facebook: "https://www.facebook.com/...",
  line: "https://line.me/ti/p/...",
};
```

---

## 🚀 部署流程

```bash
# 安裝 gh-pages
npm install --save-dev gh-pages

# package.json 新增
"homepage": "https://{你的帳號}.github.io/{repo名稱}",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# 部署
npm run deploy
```

> Vite config 需設定 `base: '/{repo名稱}/'`

---

## 🔮 未來擴充路徑

| 需求 | 方案 | 備註 |
|---|---|---|
| 線上訂購（輕量） | 嵌入 Google 表單 | 不需後端，免費 |
| 客服互動 | 串 LINE 官方帳號 | 點按鈕跳轉即可 |
| 購物車 / 金流 | 需要後端 + 網域 | Phase 2 再評估 |
| 自訂網域 | Cloudflare 買域名，繼續用 Pages | 約 $10 美金/年 |
| 後台管理 | 考慮 Headless CMS（如 Decap CMS）| 仍可部署靜態 |

---

## 📌 Phase Plan

### Phase 1（現在）
- 純靜態前台，三頁：首頁 / 作品集 / 聯絡我們
- GitHub Pages 部署
- RWD 支援

### Phase 2（未來選做）
- 自訂網域
- Google 表單嵌入訂購功能
- LINE 官方帳號整合

### Phase 3（未來選做）
- 後台內容管理（Headless CMS）
- 購物車 / 金流（需架站）
