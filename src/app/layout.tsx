import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

import { Header } from '@/components/header'

import { siteConfig } from '@/config/site'

const DmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: 'johanguse',
    },
  ],
  creator: 'johanguse',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.png`],
    creator: '@johanguse',
  },
  icons: {
    icon: '/images/favicons/favicon-96x96.png',
    shortcut: '/images/favicons/android-icon-192x192.png',
    apple: '/images/favicons/apple-icon.png',
  },
  manifest: `${siteConfig.url}/manifest.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt_BR" suppressHydrationWarning>
      <body className={DmSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
