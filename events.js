/**
 * 2026 桃園市 115 年語文競賽龍潭區複賽 ─ 賽事資料
 * Single source of truth ─ 修改本檔即可同步所有頁面
 *
 * 維護指引(2027 年沿用):
 *  1. 修改 meta.year / yearAD / date
 *  2. 修改 events 陣列(每場一個物件,含報到、抽題、上台、地點)
 *  3. 不需動 index.html
 */
window.COMP_DATA = {
  meta: {
    year: 115,                         // 中華民國年
    yearAD: 2026,                      // 西元年
    date: '2026-05-23',                // 比賽日期(用於 Live 模式判斷)
    dayOfWeek: '星期六',
    organizer: '桃園市石門國民小學',
    organizerShort: '石門國小',
    principal: '張定貴',                // 校長(競賽召集人 / 總指揮)
    principalTitle: '校長',
    openTime: '07:50',                 // 校園開放時間
    contact: {
      name: '魏博彥主任',
      // 個資保護:不公開承辦人個人手機;統一由學校總機轉接
      contactVia: '請洽學校總機 03-4711752 轉接',
      onsite: '競賽當日請至一樓中廊接待組或總指揮處',
    },
    school: {
      name: '桃園市石門國民小學',
      phone: '03-4711752',
      website: 'https://www.smes.tyc.edu.tw',
    },
    medic: { location: 'C134 健康中心', staff: '李佩佩 老師' },
    summary: '17 大項 ・ 33 場細分賽事 ・ 學生／教師／社會三組',
  },

  // ──────────────────────────────────────────────
  // 大類分類設定(篩選按鈕、樣式顏色)
  // ──────────────────────────────────────────────
  categories: [
    { id: 'all',      label: '全部',        emoji: '',     color: '#1a1a1a' },
    { id: '演說',     label: '演說',        emoji: '🎤',   color: '#c1272d' },
    { id: '朗讀',     label: '朗讀',        emoji: '📖',   color: '#4a6c52' },
    { id: '作文',     label: '作文',        emoji: '✍️',   color: '#b8945f' },
    { id: '字音字形', label: '字音字形',    emoji: '🔤',   color: '#4a6685' },
    { id: '寫字',     label: '寫字',        emoji: '🖌',   color: '#6b3d7f' },
  ],

  // ──────────────────────────────────────────────
  // 33 場細分賽事(single source of truth)
  // 欄位說明:
  //   no:          官方場次號(1-17)
  //   cat:         大類(演說/朗讀/作文/字音字形/寫字)
  //   title:       完整項目名稱
  //   group:       組別(學生組/教師組/社會組)
  //   count:       該組參賽人數
  //   floor:       樓層(1F/2F/3F/禮堂)
  //   venue:       比賽地點(教室代號 + 班級)
  //   prep:        預備室(若無則空字串)
  //   checkin:     報到時間區間
  //   time:        比賽時間區間(用於 Live 狀態判斷)
  //   ─ 演說/朗讀類專用:
  //   drawStart:   1 號抽題時間
  //   drawStep:    每人抽題間隔(分)
  //   takeoffStart:1 號上台時間
  //   takeoffStep: 每人上台間隔(分)
  //   ─ 書寫類專用:
  //   writeStart / writeEnd: 全體同時開賽時間
  //   ─ 共用:
  //   timeLimit:   時間限制說明
  //   special:     特殊注意事項
  // ──────────────────────────────────────────────
  events: [
    // ─── 演說類(9 場) ───
    { no:1,  cat:'演說', title:'國語演說',           group:'學生組', count:11, floor:'3F', venue:'C313 六年5班 (3F)',     prep:'C314 六年6班', checkin:'08:20-08:30', time:'09:10-10:05', drawStart:'08:40', drawStep:5, takeoffStart:'09:10', takeoffStep:5, timeLimit:'學生組演說上限 5 分鐘' },
    { no:2,  cat:'演說', title:'國語演說',           group:'教師組', count:6,  floor:'2F', venue:'C218 英語情境教室 (2F)', prep:'C217 魚寶屋',   checkin:'08:20-08:30', time:'09:10-09:58', drawStart:'08:38', drawStep:8, takeoffStart:'09:10', takeoffStep:8, timeLimit:'教師組演說上限 8 分鐘' },
    { no:2,  cat:'演說', title:'國語演說',           group:'社會組', count:4,  floor:'2F', venue:'C218 英語情境教室 (2F)', prep:'C217 魚寶屋',   checkin:'09:40-09:50', time:'10:30-10:54', drawStart:'10:00', drawStep:6, takeoffStart:'10:30', takeoffStep:6, timeLimit:'社會組演說上限 6 分鐘' },
    { no:3,  cat:'演說', title:'臺灣台語情境式演說', group:'學生組', count:4,  floor:'2F', venue:'C229 英語一 (2F)',       prep:'C228 英語二',   checkin:'08:20-08:30', time:'09:10-09:46', drawStart:'08:40', drawStep:6, takeoffStart:'09:10', takeoffStep:6, timeLimit:'學生組情境式演說 5 分鐘(演說 2-3 分 + 詢答 2 分)' },
    { no:4,  cat:'演說', title:'臺灣台語演說',       group:'教師組', count:4,  floor:'2F', venue:'C227 英語三 (2F)',       prep:'C228 英語二',   checkin:'08:20-08:30', time:'09:10-09:42', drawStart:'08:38', drawStep:8, takeoffStart:'09:10', takeoffStep:8, timeLimit:'教師組演說上限 8 分鐘' },
    { no:4,  cat:'演說', title:'臺灣台語演說',       group:'社會組', count:4,  floor:'2F', venue:'C227 英語三 (2F)',       prep:'C228 英語二',   checkin:'09:30-09:40', time:'10:20-10:44', drawStart:'09:50', drawStep:6, takeoffStart:'10:20', takeoffStep:6, timeLimit:'社會組演說上限 6 分鐘' },
    { no:5,  cat:'演說', title:'臺灣客語情境式演說', group:'學生組', count:6,  floor:'2F', venue:'C234 課照班 2A (2F)',    prep:'C233 課照班 2B', checkin:'08:20-08:30', time:'09:10-09:46', drawStart:'08:40', drawStep:6, takeoffStart:'09:10', takeoffStep:6, timeLimit:'學生組情境式演說 5 分鐘(演說 2-3 分 + 詢答 2 分)' },
    { no:6,  cat:'演說', title:'臺灣客語演說',       group:'教師組', count:3,  floor:'2F', venue:'C232 課照班 3A (2F)',    prep:'C233 課照班 2B', checkin:'08:20-08:30', time:'09:10-09:42', drawStart:'08:38', drawStep:8, takeoffStart:'09:10', takeoffStep:8, timeLimit:'教師組演說上限 8 分鐘' },
    { no:6,  cat:'演說', title:'臺灣客語演說',       group:'社會組', count:4,  floor:'2F', venue:'C232 課照班 3A (2F)',    prep:'C233 課照班 2B', checkin:'09:30-09:40', time:'10:20-10:44', drawStart:'09:50', drawStep:6, takeoffStart:'10:20', takeoffStep:6, timeLimit:'社會組演說上限 6 分鐘' },

    // ─── 朗讀類(9 場) ───
    { no:7,  cat:'朗讀', title:'國語朗讀',           group:'學生組', count:13, floor:'2F', venue:'C220 五年2班 (2F)',     prep:'C221 五年3班',   checkin:'08:40-08:50', time:'09:10-10:02', drawStart:'09:02', drawStep:4, takeoffStart:'09:10', takeoffStep:4, timeLimit:'朗讀上限 4 分鐘' },
    { no:8,  cat:'朗讀', title:'國語朗讀',           group:'教師組', count:7,  floor:'2F', venue:'C224 五年5班 (2F)',     prep:'C225 五年6班',   checkin:'08:40-08:50', time:'09:10-09:46', drawStart:'09:02', drawStep:4, takeoffStart:'09:10', takeoffStep:4, timeLimit:'朗讀上限 4 分鐘' },
    { no:8,  cat:'朗讀', title:'國語朗讀',           group:'社會組', count:8,  floor:'2F', venue:'C224 五年5班 (2F)',     prep:'C225 五年6班',   checkin:'09:35-09:45', time:'10:00-10:32', drawStart:'09:52', drawStep:4, takeoffStart:'10:00', takeoffStep:4, timeLimit:'朗讀上限 4 分鐘' },
    { no:9,  cat:'朗讀', title:'臺灣台語朗讀',       group:'學生組', count:10, floor:'2F', venue:'C226 音樂二 (2F)',      prep:'C225 五年6班',   checkin:'08:40-08:50', time:'09:10-09:50', drawStart:'09:02', drawStep:4, takeoffStart:'09:10', takeoffStep:4, timeLimit:'朗讀上限 4 分鐘' },
    { no:10, cat:'朗讀', title:'臺灣台語朗讀',       group:'教師組', count:8,  floor:'1F', venue:'C125 五年1班 (1F)',     prep:'C124 三年5班',   checkin:'08:20-08:30', time:'09:10-09:46', drawStart:'08:38', drawStep:4, takeoffStart:'09:10', takeoffStep:4, timeLimit:'朗讀上限 4 分鐘' },
    { no:10, cat:'朗讀', title:'臺灣台語朗讀',       group:'社會組', count:5,  floor:'1F', venue:'C125 五年1班 (1F)',     prep:'C124 三年5班',   checkin:'09:40-09:50', time:'10:30-10:50', drawStart:'09:58', drawStep:4, takeoffStart:'10:30', takeoffStep:4, timeLimit:'朗讀上限 4 分鐘' },
    { no:11, cat:'朗讀', title:'臺灣客語朗讀',       group:'學生組', count:11, floor:'1F', venue:'C120 三年1班 (1F)',     prep:'C121 三年2班',   checkin:'08:40-08:50', time:'09:10-09:54', drawStart:'09:02', drawStep:4, takeoffStart:'09:10', takeoffStep:4, timeLimit:'朗讀上限 4 分鐘' },
    { no:12, cat:'朗讀', title:'臺灣客語朗讀',       group:'教師組', count:6,  floor:'1F', venue:'C123 三年4班 (1F)',     prep:'C124 三年5班',   checkin:'08:20-08:30', time:'09:10-09:34', drawStart:'08:38', drawStep:4, takeoffStart:'09:10', takeoffStep:4, timeLimit:'朗讀上限 4 分鐘' },
    { no:12, cat:'朗讀', title:'臺灣客語朗讀',       group:'社會組', count:5,  floor:'1F', venue:'C123 三年4班 (1F)',     prep:'C124 三年5班',   checkin:'09:30-09:40', time:'10:20-10:40', drawStart:'09:48', drawStep:4, takeoffStart:'10:20', takeoffStep:4, timeLimit:'朗讀上限 4 分鐘' },

    // ─── 作文(3 場) ───
    { no:13, cat:'作文', title:'作文', group:'學生組', count:12, floor:'3F', venue:'C308 六年2班 (3F)', prep:'C309 六年3班', checkin:'08:20-08:30', time:'08:40-10:10', writeStart:'08:40', writeEnd:'10:10', timeLimit:'作文 90 分鐘', special:'⚠️ 開賽 5 分鐘後不得入場，不得提早交卷' },
    { no:13, cat:'作文', title:'作文', group:'教師組', count:10, floor:'3F', venue:'C310 六年4班 (3F)', prep:'C309 六年3班', checkin:'08:20-08:30', time:'08:40-10:10', writeStart:'08:40', writeEnd:'10:10', timeLimit:'作文 90 分鐘', special:'⚠️ 開賽 5 分鐘後不得入場，不得提早交卷' },
    { no:13, cat:'作文', title:'作文', group:'社會組', count:9,  floor:'3F', venue:'C310 六年4班 (3F)', prep:'C309 六年3班', checkin:'08:20-08:30', time:'08:40-10:10', writeStart:'08:40', writeEnd:'10:10', timeLimit:'作文 90 分鐘', special:'⚠️ 開賽 5 分鐘後不得入場，不得提早交卷' },

    // ─── 國語字音字形(3 場) ───
    { no:14, cat:'字音字形', title:'國語字音字形', group:'學生組', count:13, floor:'禮堂', venue:'C135 禮堂', prep:'', checkin:'08:20-08:30', time:'08:40-08:50', writeStart:'08:40', writeEnd:'08:50', timeLimit:'10 分鐘', special:'⚠️ 不得攜帶參考資料、字典；開賽 5 分鐘後不得入場' },
    { no:14, cat:'字音字形', title:'國語字音字形', group:'教師組', count:10, floor:'禮堂', venue:'C135 禮堂', prep:'', checkin:'08:20-08:30', time:'08:40-08:50', writeStart:'08:40', writeEnd:'08:50', timeLimit:'10 分鐘', special:'⚠️ 不得攜帶參考資料、字典；開賽 5 分鐘後不得入場' },
    { no:14, cat:'字音字形', title:'國語字音字形', group:'社會組', count:8,  floor:'禮堂', venue:'C135 禮堂', prep:'', checkin:'08:20-08:30', time:'08:40-08:50', writeStart:'08:40', writeEnd:'08:50', timeLimit:'10 分鐘', special:'⚠️ 不得攜帶參考資料、字典；開賽 5 分鐘後不得入場' },

    // ─── 臺灣台語字音字形(3 場) ───
    { no:15, cat:'字音字形', title:'臺灣台語字音字形', group:'學生組', count:4, floor:'禮堂', venue:'C135 禮堂', prep:'', checkin:'09:00-09:10', time:'09:15-09:30', writeStart:'09:15', writeEnd:'09:30', timeLimit:'15 分鐘', special:'⚠️ 不得攜帶參考資料、字典；開賽 5 分鐘後不得入場' },
    { no:15, cat:'字音字形', title:'臺灣台語字音字形', group:'教師組', count:7, floor:'禮堂', venue:'C135 禮堂', prep:'', checkin:'09:00-09:10', time:'09:15-09:30', writeStart:'09:15', writeEnd:'09:30', timeLimit:'15 分鐘', special:'⚠️ 不得攜帶參考資料、字典；開賽 5 分鐘後不得入場' },
    { no:15, cat:'字音字形', title:'臺灣台語字音字形', group:'社會組', count:4, floor:'禮堂', venue:'C135 禮堂', prep:'', checkin:'09:00-09:10', time:'09:15-09:30', writeStart:'09:15', writeEnd:'09:30', timeLimit:'15 分鐘', special:'⚠️ 不得攜帶參考資料、字典；開賽 5 分鐘後不得入場' },

    // ─── 臺灣客語字音字形(3 場) ───
    { no:16, cat:'字音字形', title:'臺灣客語字音字形', group:'學生組', count:5, floor:'禮堂', venue:'C135 禮堂', prep:'', checkin:'09:00-09:10', time:'09:15-09:30', writeStart:'09:15', writeEnd:'09:30', timeLimit:'15 分鐘', special:'⚠️ 不得攜帶參考資料、字典；開賽 5 分鐘後不得入場' },
    { no:16, cat:'字音字形', title:'臺灣客語字音字形', group:'教師組', count:5, floor:'禮堂', venue:'C135 禮堂', prep:'', checkin:'09:00-09:10', time:'09:15-09:30', writeStart:'09:15', writeEnd:'09:30', timeLimit:'15 分鐘', special:'⚠️ 不得攜帶參考資料、字典；開賽 5 分鐘後不得入場' },
    { no:16, cat:'字音字形', title:'臺灣客語字音字形', group:'社會組', count:6, floor:'禮堂', venue:'C135 禮堂', prep:'', checkin:'09:00-09:10', time:'09:15-09:30', writeStart:'09:15', writeEnd:'09:30', timeLimit:'15 分鐘', special:'⚠️ 不得攜帶參考資料、字典；開賽 5 分鐘後不得入場' },

    // ─── 寫字(3 場) ───
    { no:17, cat:'寫字', title:'寫字', group:'學生組', count:10, floor:'禮堂', venue:'C135 禮堂', prep:'', checkin:'09:40-09:50', time:'10:00-10:50', writeStart:'10:00', writeEnd:'10:50', timeLimit:'50 分鐘', special:'⚠️ 開賽 5 分鐘後不得入場；不得提早交卷' },
    { no:17, cat:'寫字', title:'寫字', group:'教師組', count:8,  floor:'禮堂', venue:'C135 禮堂', prep:'', checkin:'09:40-09:50', time:'10:00-10:50', writeStart:'10:00', writeEnd:'10:50', timeLimit:'50 分鐘', special:'⚠️ 開賽 5 分鐘後不得入場；不得提早交卷' },
    { no:17, cat:'寫字', title:'寫字', group:'社會組', count:7,  floor:'禮堂', venue:'C135 禮堂', prep:'', checkin:'09:40-09:50', time:'10:00-10:50', writeStart:'10:00', writeEnd:'10:50', timeLimit:'50 分鐘', special:'⚠️ 開賽 5 分鐘後不得入場；不得提早交卷' },
  ],

  // ──────────────────────────────────────────────
  // 校園地圖配置(B2 互動式校園地圖用)
  // 每樓層 list 出該樓所有「值得標示」的房間
  // ──────────────────────────────────────────────
  campus: {
    '1F': {
      label: '一樓',
      desc: '領隊報到處、各校選手休息區、家長活動區、健康中心、禮堂(字音字形/寫字)',
      rooms: [
        { code: 'C120', name: '三年1班',    use: 'race', label: '客語朗讀(學)',     catColor: '#4a6c52', staff: { lead: '黃淑玲', members: ['許採雲', '曹旭玲'] } },
        { code: 'C121', name: '三年2班',    use: 'prep', label: '預備室',           catColor: '#999' },
        { code: 'C123', name: '三年4班',    use: 'race', label: '客語朗讀(教/社)',  catColor: '#4a6c52', staff: { lead: '陳馨皇', members: ['胡雪嬌', '彭椿蓉'] } },
        { code: 'C124', name: '三年5班',    use: 'prep', label: '預備室',           catColor: '#999' },
        { code: 'C125', name: '五年1班',    use: 'race', label: '台語朗讀(教/社)',  catColor: '#4a6c52', staff: { lead: '王貞尹', members: ['陳桂美', '陳星維'] } },
        { code: 'C131', name: '書法教室',   use: 'judge',label: '評審休息室',       catColor: '#b8945f', staff: { lead: '莊珮玲', members: ['張華玲'], note: '接待組' } },
        { code: 'C134', name: '健康中心',   use: 'med',  label: '醫護室',           catColor: '#3498db', staff: { lead: '李佩佩', members: [], note: '醫護組' } },
        { code: 'C135', name: '禮堂',       use: 'race', label: '字音字形 + 寫字',  catColor: '#6b3d7f', staff: { lead: '黃燕琴', members: ['莊可欣', '鄭佩芳'] } },
        { code: '中廊', name: '一樓中廊',   use: 'admin',label: '領隊報到',         catColor: '#c1272d', staff: { lead: '林亞嫺', members: ['人事曾主任'], note: '接待組(07:50-10:30)' } },
        // 各校選手 / 領隊休息區(依場地配置圖)
        { code: 'C102', name: '一年1班',    use: 'rest', label: '🏫 龍潭國小休息區',          catColor: '#5b8aa8' },
        { code: 'C103', name: '一年2班',    use: 'rest', label: '🏫 德龍國小休息區',          catColor: '#5b8aa8' },
        { code: 'C104', name: '一年3班',    use: 'rest', label: '🏫 潛龍國小休息區',          catColor: '#5b8aa8' },
        { code: 'C105', name: '一年4班',    use: 'rest', label: '⭐ 石門國小休息區(本校)',    catColor: '#c1272d', host: true, staff: { lead: '林佳靜', members: [], note: '石門領隊 — 選手報到、發給餐盒/選手證/礦泉水' } },
        { code: 'C106', name: '一年5班',    use: 'rest', label: '🏫 高原國小休息區',          catColor: '#5b8aa8' },
        { code: 'C107', name: '課照班 1A', use: 'rest', label: '🏫 龍源國小休息區',          catColor: '#5b8aa8' },
        { code: 'C108', name: '二年1班',    use: 'rest', label: '🏫 三和國小休息區',          catColor: '#5b8aa8' },
        { code: 'C109', name: '二年2班',    use: 'rest', label: '🏫 武漢國小休息區',          catColor: '#5b8aa8' },
        { code: 'C111', name: '二年3班',    use: 'rest', label: '🏫 龍星國小休息區',          catColor: '#5b8aa8' },
        { code: 'C112', name: '二年4班',    use: 'rest', label: '🏫 三坑國小休息區',          catColor: '#5b8aa8' },
        { code: 'C113', name: '二年5班',    use: 'rest', label: '🏫 雙龍國小休息區',          catColor: '#5b8aa8' },
        { code: 'C114', name: '課照班 1B', use: 'rest', label: '🏫 福祿貝爾／諾瓦小學',      catColor: '#5b8aa8' },
      ],
    },
    '2F': {
      label: '二樓',
      desc: '演說組(國/台/客)、國語朗讀、台語朗讀(學生)',
      rooms: [
        { code: 'C217', name: '魚寶屋',         use: 'prep', label: '預備室',           catColor: '#999' },
        { code: 'C218', name: '英語情境教室',   use: 'race', label: '國語演說(教/社)', catColor: '#c1272d', staff: { lead: '賴韻竹', members: ['鍾侑珍', '陳淑珍'] } },
        { code: 'C220', name: '五年2班',        use: 'race', label: '國語朗讀(學)',    catColor: '#4a6c52', staff: { lead: '張哲綸', members: ['陳韻竹', '李佩芝'] } },
        { code: 'C221', name: '五年3班',        use: 'prep', label: '預備室',           catColor: '#999' },
        { code: 'C224', name: '五年5班',        use: 'race', label: '國語朗讀(教/社)', catColor: '#4a6c52', staff: { lead: '葉秀鈺', members: ['張萍', '李佳音'] } },
        { code: 'C225', name: '五年6班',        use: 'prep', label: '預備室',           catColor: '#999' },
        { code: 'C226', name: '音樂二',         use: 'race', label: '台語朗讀(學)',    catColor: '#4a6c52', staff: { lead: '李思慧', members: ['廖欣楣', '徐瑞嬪'] } },
        { code: 'C227', name: '英語三',         use: 'race', label: '台語演說(教/社)', catColor: '#c1272d', staff: { lead: '陳芳珊', members: ['鄭夙眞', '劉財福'] } },
        { code: 'C228', name: '英語二',         use: 'prep', label: '預備室',           catColor: '#999' },
        { code: 'C229', name: '英語一',         use: 'race', label: '台語情境(學)',    catColor: '#c1272d', staff: { lead: '邱碧珠', members: ['鄧麗霞', '王玥'] } },
        { code: 'C232', name: '課照班 3A',      use: 'race', label: '客語演說(教/社)', catColor: '#c1272d', staff: { lead: '馮佳盈', members: ['林春蔓', '鄧佩菁'] } },
        { code: 'C233', name: '課照班 2B',      use: 'prep', label: '預備室',           catColor: '#999' },
        { code: 'C234', name: '課照班 2A',      use: 'race', label: '客語情境(學)',    catColor: '#c1272d', staff: { lead: '鄭紹祥', members: ['鄭惠玲', '陳佳瑜'] } },
        { code: 'C208', name: '教務處',         use: 'admin',label: '成績組',           catColor: '#1a1a1a', staff: { lead: '黃凱揚', members: ['林芸靚'], note: '成績處理組(08:00-16:00)' } },
        { code: 'C214', name: '校史室',         use: 'judge',label: '作文閱卷',         catColor: '#b8945f' },
        { code: 'C219', name: '教師研習室',     use: 'judge',label: '字音字形閱卷',     catColor: '#4a6685' },
      ],
    },
    '3F': {
      label: '三樓',
      desc: '國語演說(學生)、作文(全組)',
      rooms: [
        { code: 'C308', name: '六年2班',  use: 'race', label: '作文(學)',         catColor: '#b8945f', staff: { lead: '朱若梅', members: [] } },
        { code: 'C309', name: '六年3班',  use: 'prep', label: '預備室',           catColor: '#999' },
        { code: 'C310', name: '六年4班',  use: 'race', label: '作文(教/社)',     catColor: '#b8945f', staff: { lead: '邱淑靜', members: [] } },
        { code: 'C313', name: '六年5班',  use: 'race', label: '國語演說(學)',    catColor: '#c1272d', staff: { lead: '張乃心', members: ['蘇雅靜', '沈純華'] } },
        { code: 'C314', name: '六年6班',  use: 'prep', label: '預備室',           catColor: '#999' },
      ],
    },
  },
};

// ──────────────────────────────────────────────
// 時間工具
// ──────────────────────────────────────────────
window.COMP_UTILS = {
  pad2(n) { return n < 10 ? '0' + n : '' + n; },
  /** "08:40" + 12 → "08:52" */
  addMinutes(hhmm, mins) {
    const [h, m] = hhmm.split(':').map(Number);
    const total = h * 60 + m + mins;
    return this.pad2(Math.floor(total / 60)) + ':' + this.pad2(total % 60);
  },
  /** "08:40" → 520(分鐘) */
  toMin(hhmm) {
    const [h, m] = hhmm.split(':').map(Number);
    return h * 60 + m;
  },
  /** 計算事件目前狀態 vs nowHHmm(也接受 Date 物件) */
  getStatus(event, nowMin) {
    const [s, e] = event.time.split('-').map(t => this.toMin(t.trim()));
    const checkinStart = this.toMin(event.checkin.split('-')[0]);
    if (nowMin < checkinStart - 30) return 'upcoming';      // 30 分鐘前
    if (nowMin < checkinStart) return 'soon';                // 接近報到
    if (nowMin < s) return 'checkin';                        // 報到中
    if (nowMin <= e) return 'live';                          // 進行中
    return 'ended';                                           // 已結束
  },
  /** 計算選手第 N 號的抽題時間 */
  drawTimeOf(event, seatNo) {
    if (!event.drawStart) return null;
    return this.addMinutes(event.drawStart, (seatNo - 1) * event.drawStep);
  },
  /** 計算選手第 N 號的上台時間 */
  takeoffTimeOf(event, seatNo) {
    if (event.drawStart) {
      return this.addMinutes(event.takeoffStart, (seatNo - 1) * event.takeoffStep);
    }
    // 書寫類:全體同時開賽
    return event.writeStart + ' ~ ' + event.writeEnd;
  },
  /** 是否為比賽當日 */
  isRaceDay(now = new Date()) {
    const d = now.getFullYear() + '-' + this.pad2(now.getMonth() + 1) + '-' + this.pad2(now.getDate());
    return d === window.COMP_DATA.meta.date;
  },

  // ──────────────────────────────────────────────
  // ICS 行事曆匯出工具(D1.6)
  // ──────────────────────────────────────────────

  /** "20260523" 格式日期(從 meta.date "2026-05-23") */
  _icsDate() {
    return window.COMP_DATA.meta.date.replace(/-/g, '');
  },

  /** "HH:MM" → "HHMM00" ICS 時間格式 */
  _icsTime(hhmm) {
    return hhmm.replace(':', '') + '00';
  },

  /** ICS 文字跳脫:逗號、分號、反斜線、換行 */
  _icsEsc(s) {
    return String(s || '')
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '');
  },

  /** 折行:ICS 規範一行不超過 75 octets(中文謹慎處理,簡化為 70 chars) */
  _icsFold(line) {
    if (line.length <= 70) return line;
    const out = [];
    for (let i = 0; i < line.length; i += 70) {
      out.push((i === 0 ? '' : ' ') + line.substring(i, i + 70));
    }
    return out.join('\r\n');
  },

  /** 取得單一事件的 ICS VEVENT block(含選手序號,若有 seatNo 則含個人提醒) */
  buildVEvent(event, opts = {}) {
    const seatNo = opts.seatNo;          // 1, 2, 3...,若指定則加上「第 N 號」資訊
    const meta = window.COMP_DATA.meta;
    const date = this._icsDate();

    // 計算個人時段:報到開始 → 比賽結束
    const [checkinStart] = event.checkin.split('-');
    const [, endTime] = event.time.split('-');

    // 若指定 seatNo,DTSTART 用「該選手上台前 30 分鐘」更實用
    let dtStart, dtEnd, summary, description;
    if (seatNo) {
      const takeoff = event.drawStart
        ? this.addMinutes(event.takeoffStart, (seatNo - 1) * event.takeoffStep)
        : event.writeStart;
      // 提早 30 分鐘到場 vs. 報到開始時間,取較早者
      const arriveBy = Math.min(this.toMin(takeoff) - 30, this.toMin(checkinStart));
      const arriveBymStr = this.pad2(Math.floor(arriveBy/60)) + ':' + this.pad2(arriveBy%60);
      dtStart = `${date}T${this._icsTime(arriveBymStr)}`;
      const myEnd = event.drawStart
        ? this.addMinutes(takeoff, event.takeoffStep)  // 上台時間 + 該組單人時間上限
        : endTime;
      dtEnd = `${date}T${this._icsTime(myEnd)}`;
      summary = `第${event.no}場 ${event.title}(${event.group})- 我是${seatNo}號`;
      const drawInfo = event.drawStart
        ? `\n抽題：${this.drawTimeOf(event, seatNo)}\n上台：${takeoff}`
        : `\n開賽時間：${event.writeStart} ~ ${event.writeEnd}（全體同時）`;
      description =
        `2026 桃園市 115 年語文競賽龍潭區複賽\n` +
        `\n你的序號：${seatNo}\n` +
        `項目：${event.title} - ${event.group}\n` +
        `地點：${event.venue}\n` +
        (event.prep ? `預備室：${event.prep}\n` : '') +
        `\n報到時間：${event.checkin}${drawInfo}\n` +
        `\n時間限制：${event.timeLimit || ''}\n` +
        (event.special ? `${event.special}\n` : '') +
        `\n聯絡：石門國小總機 ${meta.school.phone}\n` +
        `\n詳情：https://cagoooo.github.io/Language-Competitions/`;
    } else {
      // 全場:報到開始 → 比賽結束
      dtStart = `${date}T${this._icsTime(checkinStart)}`;
      dtEnd = `${date}T${this._icsTime(endTime)}`;
      summary = `第${event.no}場 ${event.title}(${event.group})`;
      description =
        `2026 桃園市 115 年語文競賽龍潭區複賽\n` +
        `\n項目：${event.title} - ${event.group}（${event.count} 人）\n` +
        `地點：${event.venue}\n` +
        (event.prep ? `預備室：${event.prep}\n` : '') +
        `\n報到時間：${event.checkin}\n` +
        (event.drawStart ? `第1號抽題：${event.drawStart}\n` : '') +
        `比賽時間：${event.time}\n` +
        (event.timeLimit ? `\n時間限制：${event.timeLimit}\n` : '') +
        `\n詳情：https://cagoooo.github.io/Language-Competitions/`;
    }

    const uid = `smes-langcomp-${meta.yearAD}-${event.no}-${event.group}${seatNo ? '-no' + seatNo : ''}@cagoooo.github.io`;
    const now = new Date();
    const dtstamp = now.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

    const lines = [
      'BEGIN:VEVENT',
      `UID:${uid}`,
      `DTSTAMP:${dtstamp}`,
      `DTSTART;TZID=Asia/Taipei:${dtStart}`,
      `DTEND;TZID=Asia/Taipei:${dtEnd}`,
      this._icsFold(`SUMMARY:${this._icsEsc(summary)}`),
      this._icsFold(`LOCATION:${this._icsEsc(`${meta.organizer} ${event.venue}`)}`),
      this._icsFold(`DESCRIPTION:${this._icsEsc(description)}`),
      'STATUS:CONFIRMED',
      'TRANSP:OPAQUE',
      // 個人版加兩個提醒:30 分鐘前、5 分鐘前
      ...(seatNo ? [
        'BEGIN:VALARM',
        'ACTION:DISPLAY',
        'DESCRIPTION:語文競賽:30 分鐘後比賽開始',
        'TRIGGER:-PT30M',
        'END:VALARM',
        'BEGIN:VALARM',
        'ACTION:DISPLAY',
        'DESCRIPTION:語文競賽:5 分鐘後上台,請就位',
        'TRIGGER:-PT5M',
        'END:VALARM',
      ] : []),
      'END:VEVENT',
    ];
    return lines.join('\r\n');
  },

  /** 包裝完整 .ics 檔案內容 */
  buildICS(events, opts = {}) {
    const meta = window.COMP_DATA.meta;
    const header = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//SMES//Language Competition 2026//ZH-Hant',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      `X-WR-CALNAME:${this._icsEsc(opts.calName || '2026 桃園市語文競賽龍潭區複賽')}`,
      'X-WR-TIMEZONE:Asia/Taipei',
      // Asia/Taipei VTIMEZONE 定義(全年 UTC+8 無 DST)
      'BEGIN:VTIMEZONE',
      'TZID:Asia/Taipei',
      'BEGIN:STANDARD',
      'DTSTART:19700101T000000',
      'TZOFFSETFROM:+0800',
      'TZOFFSETTO:+0800',
      'TZNAME:CST',
      'END:STANDARD',
      'END:VTIMEZONE',
    ].join('\r\n');
    const body = events.map((e) => this.buildVEvent(e, opts)).join('\r\n');
    const footer = 'END:VCALENDAR';
    return header + '\r\n' + body + '\r\n' + footer + '\r\n';
  },

  /** 觸發 .ics 下載 */
  downloadICS(content, filename) {
    // 加 BOM 讓 Outlook 正確識別中文(可選,純 UTF-8 也可)
    const blob = new Blob(['﻿' + content], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  },
};
