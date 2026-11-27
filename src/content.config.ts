import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// 演出活動：每場一個 Markdown 檔，放在 src/content/events/
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(), // 演出日期，YYYY-MM-DD
      time: z.string().optional(), // 例如「15:00–15:40」
      venue: z.string(),
      address: z.string().optional(),
      role: z.string().optional(), // 樂團在活動中的角色，例如「主辦・演出」
      link: z.string().optional(), // 活動頁或報名連結
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

// 團員：每人一個 Markdown 檔，放在 src/content/members/
const members = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/members' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      nickname: z.string().optional(),
      role: z.string(), // 例如「主唱・詞曲創作」
      photo: image().optional(),
      order: z.number().default(99), // 數字越小越前面
      instagram: z.string().optional(),
    }),
});

// 影片：全部列在 src/content/videos.json
const videos = defineCollection({
  loader: file('src/content/videos.json'),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(), // 發布日期
    category: z.enum(['band', 'cbk', 'talk', 'other']),
    featured: z.boolean().default(false), // 首頁主打（只放一支 true）
  }),
});

export const collections = { events, members, videos };
