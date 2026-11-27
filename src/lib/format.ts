const tz = 'Asia/Taipei';

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-TW', {
    timeZone: tz,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  }).format(date);
}

export function formatShortDate(date: Date) {
  return new Intl.DateTimeFormat('zh-TW', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

/** 活動日期在今天（台灣時間）或之後 → 算「近期演出」。網站在建置時判斷。 */
export function isUpcoming(date: Date) {
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: tz }).format(new Date());
  const day = new Intl.DateTimeFormat('en-CA', { timeZone: tz }).format(date);
  return day >= today;
}

export function byDateDesc<T extends { data: { date?: Date } }>(a: T, b: T) {
  return (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0);
}

export const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const ytWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`;
export const ytEmbed = (id: string) => `https://www.youtube-nocookie.com/embed/${id}`;
