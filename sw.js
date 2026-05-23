/**
 * Service Worker — 2026 桃園市語文競賽龍潭區複賽
 *
 * 機制:
 *   1. 對 HTML / JS / JSON 採 network-first(每次先嘗試最新版,失敗才用快取)
 *      → 確保 events.js 改版後,使用者下次連線就拿到新資料
 *   2. 對圖片 / 字型 / favicon 採 cache-first(離線也能看,且不浪費頻寬)
 *   3. install 時不預快取大量檔案,避免使用者第一次連線變慢;改採 runtime cache
 *   4. activate 時清除舊版快取
 *   5. 收到 SKIP_WAITING 訊息 → 立即激活新版(配合前端「重新整理」按鈕)
 *
 * 部署流程:
 *   每次發佈新版時,bump 下方的 CACHE_VERSION(年月日 + 序號)。
 *   GitHub Pages build 後,使用者的舊 SW 偵測到 sw.js 變更 → 安裝新 SW
 *   → 跳出「網站有新版,點此重新整理」橫條(由 index.html 內 JS 監聽)。
 */

const CACHE_VERSION = 'smes-langcomp-2026-05-22-033';
const CACHE_NAME = `smes-langcomp::${CACHE_VERSION}`;

// 安裝:**只預快取首屏關鍵 3 個檔案**,避免拖累首屏 LCP
// 其他資源(host.html / poster.html / qrcode.min.js / icons …)走 runtime cache,
// 真的造訪時再進快取,不會卡到首頁載入。
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll([
        './',
        './index.html',
        './tailwind.min.css',
      ]).catch(() => {/* 部分失敗不阻擋安裝 */})
    )
  );
  // 不自動 skipWaiting:讓前端決定何時跳到新版(避免使用者填到一半被中斷)
});

// 激活:清除舊版本快取
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k.startsWith('smes-langcomp::') && k !== CACHE_NAME)
            .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// fetch:依資源類型套用不同策略
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // 跨域請求(CDN: tailwind / alpinejs / google fonts)交給瀏覽器處理
  if (url.origin !== self.location.origin) return;

  const dest = req.destination;
  const isHTMLorJS = dest === 'document' || dest === 'script' || dest === '' || req.url.endsWith('.html') || req.url.endsWith('.js') || req.url.endsWith('.json') || req.url.endsWith('.webmanifest');

  if (isHTMLorJS) {
    // network-first:先嘗試 fetch 最新版,失敗才用快取
    event.respondWith(
      fetch(req)
        .then((res) => {
          // 把成功回應放進快取作為下次離線 fallback
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // 圖片/字型/CSS:cache-first
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res.ok && (dest === 'image' || dest === 'font' || dest === 'style')) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        }
        return res;
      });
    })
  );
});

// 訊息:前端按下「重新整理」按鈕後,SKIP_WAITING 讓新版 SW 立即接管
//       前端可透過 GET_VERSION 查詢當前 SW 跑的快取版本(顯示在 footer)
self.addEventListener('message', (event) => {
  if (!event.data) return;
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data.type === 'GET_VERSION') {
    if (event.ports && event.ports[0]) {
      event.ports[0].postMessage(CACHE_VERSION);
    }
  }
});
