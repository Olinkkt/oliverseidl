import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Oliver Seidl',
  description: 'Portfolio projektů a informace o mně',
  openGraph: {
    title: 'Portfolio | Oliver Seidl',
    description: 'Portfolio projektů a informace o mně',
    images: [
      {
        url: '/images/portfolio-preview.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview'
      }
    ],
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}

