import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { ScrollToTop } from './components/scroll-to-top'
import { FloatingContact } from './components/floating-contact'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oliver Seidl | Fullstack Developer',
  description: 'Fullstack vývojář specializující se na React, Next.js, Node.js a Python. Portfolio projektů a profesních zkušeností.',
  keywords: [
    'fullstack developer', 
    'react', 
    'next.js', 
    'typescript',
    'python',
    'node.js',
    'postgresql',
    'web development',
    'portfolio',
    'oliver seidl',
    'seidltech'
  ],
  authors: [{ name: 'Oliver Seidl' }],
  creator: 'Oliver Seidl',
  publisher: 'Oliver Seidl',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://seidltech.eu/',
    siteName: 'SeidlTech',
    title: 'Oliver Seidl | Fullstack Developer Portfolio',
    description: 'Fullstack vývojář specializující se na React, Next.js, Node.js a Python. Portfolio projektů a profesních zkušeností.',
    images: [
      {
        url: '/images/portfolio-preview.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oliver Seidl | Fullstack Developer',
    description: 'Fullstack vývojář specializující se na React, Next.js, Node.js a Python. Portfolio projektů a profesních zkušeností.',
    images: ['/images/portfolio-preview.png'],
    creator: '@olinkkt'
  },
  verification: {
    google: 'google-site-verification-code', // Přidat až budete mít kód z Google Search Console
  },
  alternates: {
    canonical: 'https://seidltech.eu/',
    languages: {
      'cs': 'https://oliver-seidl.vercel.app/'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Strukturovaná data pro Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Oliver Seidl",
              url: "https://seidltech.eu/",
              jobTitle: "Fullstack Developer",
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "Python",
                "Node.js",
                "PostgreSQL"
              ],
              sameAs: [
                "https://github.com/Olinkkt",
                "https://instagram.com/olinkkt",
                "https://x.com/olinkkt",
                "https://oliver-seidl.vercel.app/"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <ScrollToTop />
        <FloatingContact />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1f2937', // gray-800
              color: '#e5e7eb', // gray-200
              border: '1px solid rgba(75, 85, 99, 0.2)', // gray-600 s průhledností
            },
            success: {
              iconTheme: {
                primary: '#a855f7', // purple-500
                secondary: '#1f2937', // gray-800
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444', // red-500
                secondary: '#1f2937', // gray-800
              },
            },
          }}
        />
      </body>
    </html>
  )
}

