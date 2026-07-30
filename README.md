# 2026 桃園市語文競賽 龍潭區複賽

> 桃園市 115 年語文競賽龍潭區複賽 · 2026 年 5 月 23 日（六）· 石門國民小學承辦

對外宣傳網站 ─ 提供完整賽程、場地配置、抽題上台時間查詢、家長須知與注意事項。

## 🌐 線上瀏覽

- **網站**：<https://cagoooo.github.io/Language-Competitions/>
- **QR Code 海報**：<https://cagoooo.github.io/Language-Competitions/poster.html>

## 📁 檔案說明

| 檔案 | 用途 |
|---|---|
| `index.html` | 主網站(單檔,含所有功能) |
| `poster.html` | A4 QR Code 海報(可列印張貼) |
| `og.png` | 社群分享預覽圖(1200×630) |

## ✨ 功能

- ✅ 完整賽程表(17 大項 / 33 場細分賽事,可分類篩選 + 關鍵字搜尋)
- ✅ **我的比賽時間查詢** ─ 輸入場次 + 序號自動算出抽題、上台、報到時間
- ✅ **個人指引卡** ─ 一鍵列印選手專屬比賽行程
- ✅ 場地配置(1F / 2F / 3F 分樓層)
- ✅ 分對象注意事項(參賽者 / 家長 / 工作人員)
- ✅ 響應式(手機 / 平板 / 桌機 / 列印 皆支援)
- ✅ 社群分享預覽圖(LINE / FB 轉貼好看)

## 🎯 設計

- 純單檔靜態 HTML,無需 build,直接 GitHub Pages 部署
- 字型：Noto Serif TC / Noto Sans TC(Google Fonts)
- 樣式：Tailwind CSS(CDN)
- 互動：Alpine.js(CDN)
- 配色：墨黑 + 米白宣紙 + 硃紅 + 雅金(東方典雅風)

## 🛠 維護

### 改賽程資料
所有賽事資料集中在 `events.js`(single source of truth):
- `meta.*`(年份、日期、學校、校長、聯絡)
- `events[]`(33 場細分賽事,含報到/抽題/上台時間)
- `campus.*`(校園地圖資料)

修改後 commit + push,GitHub Pages 自動部署(約 1-2 分鐘生效)。

### 重新編譯 Tailwind CSS(若新增 utility class)
```bash
npm install            # 第一次安裝
npm run build:css      # 編譯成 tailwind.min.css (~152KB)
# 或開發時自動 watch:
npm run watch:css
```

### bump Service Worker 版本(讓使用者收到更新通知)
修改 `sw.js` 內 `CACHE_VERSION`,從 `2026-05-14-010` 改為下一個序號。

## 📞 聯絡

- 承辦學校：桃園市龍潭區石門國民小學 ☎ 03-4711752
- 競賽承辦：魏博彥主任(請洽學校總機轉接)
- 健康中心：李佩佩護理師(C134)

## 📊 進度與未來規劃

詳見 [PROGRESS.md](./PROGRESS.md) — 含本次更新紀錄、過往里程碑、P0-P3 分級的未來優化建議。

---

Made with ❤️ by **[阿凱老師](https://www.smes.tyc.edu.tw/modules/tadnews/page.php?ncsn=11&nsn=16#a5)** · 桃園市龍潭區石門國民小學 資訊組

---

<!-- BEGIN:PROJECT_GUIDE -->
## 專案導覽

桃園市 115 年 語文競賽龍潭區複賽

- 專案定位：教育科技／教學支援專案
- Repository：`cagoooo/Language-Competitions`
- 可見性：公開
- 主要技術：HTML、Tailwind CSS
- 線上入口：未在 GitHub repository metadata 設定

### 可以怎麼應用

- 教師備課、課堂示範與學生自主練習
- 依年級、領域或校本課程替換內容，建立可重複使用的教學版本
- 作為教育科技活動、學習成效觀察或 AI 輔助教學的原型

這些是依目前專案定位整理的延伸方向，不代表所有情境都已內建完成；實作前請先確認現有功能與資料格式。

### 技術與專案結構

- `README.md`
- `appeal.html`
- `apple-touch-icon.png`
- `index.html`
- `package.json`

檔案結構會隨版本演進；若本節與程式碼不一致，以目前預設分支的原始碼為準。

### 本機執行

```bash
npm install
# build
npm run build
```
請以 `package.json` 的 `scripts` 為準；若專案需要雲端服務，請先建立自己的環境變數與測試專案。

### 給 AI Agent 的接手指南

1. 先閱讀本 README、`AGENTS.md`（若有）、套件腳本與部署設定。
2. 先辨識教材、題庫、提示詞或設定資料的單一來源，避免只改畫面上的副本。
3. 調整內容時維持適齡、可讀性、無障礙與個資保護。
4. 修改後驗證教師操作流程、學生操作流程，以及桌機、平板、手機的可用性。
5. 不要捏造尚未存在的功能；README 與實作有落差時，應同時更新文件。
6. 提交前只納入本次任務檔案，並記錄實際執行過的驗證。

### 安全與資料注意事項

- 不要提交 `.env`、服務帳號、API 金鑰、token、學生個資或正式環境匯出資料。
- 使用 Firebase、Supabase、Google API 或其他雲端服務時，請建立自己的測試專案並套用最小權限。
- 若要公開衍生作品，請先確認程式碼、圖片、音訊、字型與教材內容的授權。

### 貢獻與客製化

歡迎依教學現場、活動或工作流程需求進行 fork／客製化。建議在變更說明中交代使用情境、主要修改、測試方式，以及是否影響資料格式或部署設定。
<!-- END:PROJECT_GUIDE -->
