/** @type {import('tailwindcss').Config} */
module.exports = {
  // 掃描所有靜態 HTML / JS,只保留實際用到的 utility class
  content: [
    './*.html',
    './*.js',
  ],
  // 動態(由 JS 模板字串、:class 表達式產生)的 class 必須顯式列出,
  // 否則 PurgeCSS 會誤刪它們。
  safelist: [
    // 賽程表分類色塊(由 events.js 內 catClassMap 動態套用)
    'cat-speech', 'cat-reading', 'cat-write', 'cat-character', 'cat-callig',
    // Live 狀態高亮 ring
    'ring-2', 'ring-offset-1', 'ring-[var(--vermilion)]',
    // 動態效果
    'animate-pulse',
    // 倒數計時數字 backgrounds
    'bg-white/5', 'bg-white/10',
    // 提詞器主題模式
    'theme-light', 'theme-amber',
    // 「我的比賽」結果卡狀態色(由 Alpine 表達式動態決定)
    {
      pattern: /^(bg|text|border)-(red|green|blue|amber|gray)-(50|100|200|400|500|600|700)\b/,
    },
  ],
  theme: { extend: {} },
};
