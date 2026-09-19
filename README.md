# Tainan City FC 出賽資訊網站

## 這是什麼
一個給球隊成員使用的網站，內含：
- 電子機票查詢（依姓名點選查看／下載 PDF）
- 飛航行程、比賽賽程、行李與電池規定
- 出國注意事項（天氣、電壓插座）

可安裝成手機主畫面的 App（PWA）。

## 如何放到 GitHub Pages（免費上架取得網址）

1. 到 https://github.com 註冊/登入帳號
2. 建立一個新的 Repository（例如命名為 `tainan-fc-2026`），設為 **Public**
3. 把這個資料夾內「全部檔案」上傳進去：
   - 網頁右上角 **Add file → Upload files**
   - 把這個 zip 解壓縮後的所有檔案（含 `tickets/`、`icons/` 資料夾）都拖進去
   - 按下方 **Commit changes** 送出
4. 進入 Repository 的 **Settings → Pages**
5. 在 **Branch** 選擇 `main`，資料夾選 `/ (root)`，按 **Save**
6. 等 1～2 分鐘，畫面會顯示網址，例如：
   `https://你的帳號.github.io/tainan-fc-2026/`
7. 把這個網址傳給球隊成員即可！手機打開後可以「加入主畫面」變成 App 圖示。

## 之後要更新內容怎麼做？

- **要新增/修改某人的機票**：把新的 PDF 檔案放進 `tickets/` 資料夾（檔名用英文），
  並到 `roster.js` 裡把對應的人加上 `slug: "檔名（不含.pdf）"`
- **要修改行程/賽程/注意事項文字**：直接編輯 `itinerary.html` 或 `notices.html`
- 改完後一樣用 GitHub 網頁介面重新上傳覆蓋檔案（Commit changes），
  成員端只要重新整理頁面就會看到最新內容

## 資料夾結構
```
index.html         首頁
tickets.html        機票查詢頁
itinerary.html       行程與賽程頁
notices.html        注意事項頁
styles.css          共用樣式
roster.js           球隊名單資料（在這裡對應姓名與機票檔名）
manifest.json        PWA 設定
sw.js               離線快取與自動更新機制
tickets/            31 份機票 PDF
icons/              App 圖示（4 種尺寸）
```

## 目前尚缺
- 32 位成員機票已全數到齊 ✅
- 出發／返程接駁大巴的確切時間待補（目前顯示「待確認」）
