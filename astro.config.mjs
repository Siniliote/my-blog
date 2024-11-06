// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import expressiveCode from 'astro-expressive-code';

import tailwind from '@astrojs/tailwind';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
	site: 'https://sferey.com',
	server: {
		port: 4321,
		host: true,
	},
	integrations: [expressiveCode(), mdx(), sitemap(), tailwind({ applyBaseStyles: false })],
	markdown: {
		syntaxHighlight: false,
		remarkPlugins: [
			[remarkToc, { heading: 'table of contents', maxDepth: 3, skip: 'Introduction' }],
		],
	},
});
