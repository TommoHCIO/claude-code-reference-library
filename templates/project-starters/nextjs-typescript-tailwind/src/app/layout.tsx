import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Next.js TypeScript Tailwind Starter',
    template: '%s | Next.js Starter',
  },
  description: 'A modern Next.js starter with TypeScript, Tailwind CSS, and best practices',
  keywords: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Starter'],
  authors: [{ name: 'Claude Code' }],
  creator: 'Claude Code',
  metadataBase: new URL('https://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localhost:3000',
    title: 'Next.js TypeScript Tailwind Starter',
    description: 'A modern Next.js starter with TypeScript, Tailwind CSS, and best practices',
    siteName: 'Next.js Starter',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js TypeScript Tailwind Starter',
    description: 'A modern Next.js starter with TypeScript, Tailwind CSS, and best practices',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${roboto_mono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}