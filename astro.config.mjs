// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dsband.pages.dev',
  markdown: {
    // 避免把 Don't 的撇號轉成彎引號（中文字型會顯示成全形，變成「Don’ t」）
    smartypants: false,
  },
});
