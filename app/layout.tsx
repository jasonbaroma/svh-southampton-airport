import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { siteUrl } from '@/lib/company'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Van, Car & Minibus Hire Southampton Airport | Southern Van Hire',
  description: 'Southern Van Hire offers van, car, minibus and truck hire around Southampton Airport with flexible booking, maintained vehicles and delivery options.',
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

