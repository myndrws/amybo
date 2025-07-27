// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Amybo',
        logo: {
            light: './src/assets/amybo.svg',
            dark: './src/assets/amybo_dark.svg',
            replacesTitle: true
        },
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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
        editLink: {
            baseUrl: 'https://github.com/withastro/starlight/edit/main/docs/',
        },
        customCss: [
            // Path to your Tailwind base styles:
            './src/styles/global.css',
            './src/styles/amybo.css',
        ],
        components: {
            // Override the default `Hero` component.
            Hero: './src/components/Hero.astro',
            // Override the default `Header` component.
            Header: './src/components/Header.astro',
        },
		}), alpinejs()],
  vite: { plugins: [tailwindcss()] },
});