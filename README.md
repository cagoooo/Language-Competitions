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
