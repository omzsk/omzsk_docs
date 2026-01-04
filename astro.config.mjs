// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://omzsk.com',
	build: {
		assets: "assets"
	},
	integrations: [
		starlight({
			title: 'OZSK Android Toolkit',
			social: [{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/ozsk_android_updates' }],
			
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
