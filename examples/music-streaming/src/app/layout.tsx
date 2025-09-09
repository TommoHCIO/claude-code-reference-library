import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import MusicLayout from '@/components/layout/MusicLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TuneWave - Music Streaming Platform',
  description: 'Discover, stream, and share music with TuneWave - your ultimate music streaming platform with personalized recommendations and social features',
  keywords: 'music streaming, playlists, audio player, music discovery, artists, albums, songs, podcasts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MusicLayout>
            {children}
          </MusicLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}