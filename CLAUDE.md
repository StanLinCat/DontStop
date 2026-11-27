# Don't Stop 東石大樂團 官網

Astro 7 靜態網站，部署在 Cloudflare Pages（https://dsband.pages.dev），GitHub repo：StanLinCat/DontStop。
push 到 `main` 自動部署；其他分支會產生預覽網址。

## 常用指令

- `npm run dev`：本機開發（http://localhost:4321）
- `npm run build`：建置到 `dist/`。**每次修改後都要跑一次，確認沒有錯誤再 commit。**

## 日常維護：只改內容檔，不動版面

| 要做的事 | 改哪裡 |
|---|---|
| 新增演出 | 在 `src/content/events/` 新增 `YYYY-MM-DD-英文代稱.md`，格式照現有檔案 |
| 新增影片 | 在 `src/content/videos.json` 加一筆（`id` 是 YouTube 影片 ID） |
| 換首頁主打影片 | 把舊的 `featured: true` 拿掉，給新影片加上 `featured: true`（全站只能有一支） |
| 新增/修改團員 | `src/content/members/英文名.md`，照片放 `src/assets/members/` |
| 社群連結、信箱、標語 | `src/data/site.ts` |

欄位定義與必填項目在 `src/content.config.ts`，建置時會自動檢查格式。

### 影片分類 `category`

- `band`：Don't Stop 樂團作品（MV、歌詞 MV）
- `cbk`：CBK 個人作品
- `talk`：《Don't Stop Talk》節目
- `other`：其他（例如協會紀錄片），首頁「最新影音」不會顯示

YouTube 頻道 ID：`UCLictlSXR0zwwbWmMnxhLkw`。要查最新影片與發布日期，可以讀 RSS：
`https://www.youtube.com/feeds/videos.xml?channel_id=UCLictlSXR0zwwbWmMnxhLkw`

### 演出的「近期／過往」

依建置當天（台灣時間）自動判斷，日期在今天以後的算近期。演出結束後，網站要重新部署才會移到「過往演出」，隨便 push 一次就會更新。

## 圖片

- 一律放 `src/assets/`，用 frontmatter 相對路徑引用，Astro 會自動壓縮成 webp。
- 不要把大圖放進 `public/`，那裡的檔案不會被壓縮。
- 目前 `src/assets/logo.png` 只有 320×320，拿到高解析度或 SVG 原檔要替換掉。

## 設計規則

- 配色取自 logo，定義在 `src/styles/global.css` 的 `:root`。不要在元件裡寫死新顏色。
- 標題用 `.display`（Anton 加斜體），中文標題用 `<span class="zh">` 包起來。
- 新頁面一律套 `src/layouts/Base.astro`，要出現在主選單的話，在 `src/data/site.ts` 的 `nav` 加項目。

## 待樂團確認的內容

- `src/pages/about.astro` 的樂團介紹（成立年份、團名由來、成員組成）
- 其他團員資料與照片
- CBK「忍耐Freestyle」影片連結（尚未取得影片 ID）
