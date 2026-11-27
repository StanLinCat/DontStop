// 全站共用的樂團基本資料。改社群連結、信箱、標語都在這裡。
export const site = {
  name: "Don't Stop",
  nameZh: '東石大樂團',
  tagline: '西海岸青年樂團',
  slogan: ['讓旋律制服本性', '用生命影響生命'],
  description:
    "Don't Stop 東石大樂團，來自嘉義東石的西海岸青年樂團。讓旋律制服本性，用生命影響生命。",
  email: 'dsband777@gmail.com',
  social: {
    instagram: 'https://www.instagram.com/dsband_official/',
    youtube: 'https://www.youtube.com/@dsband777',
    threads: 'https://www.threads.com/@dsband_official',
  },
  partner: {
    name: '台灣西海岸發展協會',
    url: 'https://wcgospel.pages.dev/',
  },
};

export const nav = [
  { href: '/', label: '首頁' },
  { href: '/about/', label: '關於' },
  { href: '/events/', label: '演出' },
  { href: '/videos/', label: '影音' },
  { href: '/contact/', label: '邀約合作' },
];

export const videoCategories = {
  band: '樂團作品',
  cbk: 'CBK 個人作品',
  talk: "Don't Stop Talk",
  other: '其他',
} as const;
