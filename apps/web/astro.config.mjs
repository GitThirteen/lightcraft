import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://gitthirteen.github.io',
  base: '/lightcraft',
  trailingSlash: 'always',
  markdown: unified({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    vue(),
  ],
});