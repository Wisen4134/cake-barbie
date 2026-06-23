# AI_CONTEXT.md — 開發者畫像（通用）
> 跨專案通用，不需隨專案更動。
> 最後更新：2026-06-23

---

## 背景
台灣後端工程師，約 2 份工作經驗。主力 C# / ASP.NET WebForm / MSSQL，在中小企業做內部系統開發。目前自學現代全端開發，往前後端分離方向轉型。

---

## 技術能力與程度

| 分類 | 技術 | 程度 |
|---|---|---|
| 後端（傳統） | C#, ASP.NET WebForm, .NET Web API 2, MSSQL, T-SQL, SP | 熟悉，有實戰 |
| 後端（現代） | .NET Core Web API, 分層架構（Clean Architecture 風格）, EF Core | 學習中，已完成 Register API 實作 |
| 前端 | HTML, CSS, JavaScript | 基礎 |
| React | React v18, Vite, react-router-dom | 學習中，已完成小型專案並部署 |
| 部署 | GitHub Pages, Cloudflare Pages | 有實際操作 |
| 工具 | Docker, Redis, Nginx | 概念有，未專案化 |
| 版本控制 | Git | 基本操作熟悉 |

---

## 各領域學到哪裡

### React
理解 Component / Props / State / Render / Effect 核心五件事、state 怎麼找和放哪層、父子元件分工、`useEffect` 執行時機與依賴陣列語意、CSR / SPA 執行流程。  
**還沒深入：** Context、全域狀態工具、React 19 新能力。

### 現代後端
理解分層責任分工（Controller / Service / Repository / DTO / Entity / DbContext）、DI 基本概念、middleware、格式驗證 vs 業務規則驗證的放置原則。  
**還沒深入：** JWT、EF Core migration、例外處理統一格式、FluentValidation。

### CI/CD 與測試
理解 CI 本質（語法驗證 + 改A壞B偵測）、測試層次（單元→整合→E2E）、AI+CI 閉環機制。  
**無實作經驗。** AI 請用「理解概念但沒設定過」的前提回答。

---

## 可能踩進的誤區（請 AI 適時提醒）

**責任拆分與解耦合**
來自 WebForm 背景（一個 .aspx 做一個功能），對「介面 + 實作分離、依賴注入、控制反轉」的概念理解了，但尚未內化成直覺。寫現代分層時可能會不自覺地把邏輯集中在同一個地方，或跳過介面直接寫實作。遇到設計分層時請提醒。

**非同步**
概念清楚：前端非同步是不讓畫面凍結，後端非同步是優化執行緒效能。有過 WinForm 自開 Thread、碰過 Race Condition 和 Lock 的實戰經驗。缺的不是概念，是在現代 async/await 語境下的實作直覺，容易忽略例外處理和 CancellationToken 的使用時機。

**React re-render**
剛開始學 React，re-render 機制尚未內化。容易過度使用 state 或在不該用 useEffect 的地方用它。這是預期內的學習曲線，遇到相關問題請直接指出。

---

## AI 協作工作流

**工具：** VS 內建 GitHub Copilot（基本使用）→ Cursor → Gemini CLI（已停用）→ Codex 桌面版（目前主力，免費方案）→ 替代方案評估中

**我維護的 context 結構，依專案規模分兩套：**

小型專案：`AI_RULES` + `AI_CONTEXT`（這份）+ `PROJ_SPEC`（含規格與當前進度）

大型專案：`AI_RULES` + `AI_CONTEXT`（這份）+ `ADR` + `規格文件` + `開發 LOG` + `PROJ_SPEC`

**工作流：**
給指令（做什麼 + 範圍 + 限制 + 預期格式）→ 預覽修改 → 確認後接受 → 必要時叫 AI review（只貼 diff）→ 紀錄到文件 → AI 給 commit message 建議 → 手動 commit

**立場：Human in the loop，不是全自動。** AI 輸出我會確認才接受。

---

## 溝通偏好
- 先講結論，再說原因
- 白話、實務導向，不要純理論
- 遇到設計選擇 → 說明 trade-off
- 遇到我不熟的技術 → 先補一句「為什麼這樣設計」
