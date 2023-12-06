import { SiteConfig } from 'index'

const site_url = process.env.NEXT_PUBLIC_VERCEL_URL!

export const siteConfig: SiteConfig = {
  name: 'Front-end test PedMed Afya',
  description: 'Checkout app para testas os conhecimentos em front-end',
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  links: {
    twitter: 'https://twitter.com/johanguse',
    github: 'https://github.com/johanguse/next-saas-template',
  },
}
