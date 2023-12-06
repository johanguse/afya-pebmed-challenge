import { SiteConfig } from 'index'

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000'

export const siteConfig: SiteConfig = {
  name: 'Front-end test PedMed Afya',
  description: 'Checkout app para testas os conhecimentos em front-end',
  url: baseUrl,
  ogImage: `${baseUrl}/og.jpg`,
  links: {
    twitter: 'https://twitter.com/johanguse',
    github: 'https://github.com/johanguse/next-saas-template',
  },
}
