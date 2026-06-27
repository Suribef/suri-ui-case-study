import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://suribef.github.io',
  base: '/suri-ui',
  integrations: [mdx(), react(), sitemap()],
  output: 'static'
})
