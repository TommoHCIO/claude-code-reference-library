import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SettingsLayout } from '@/components/layout/settings-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProfileHub - Settings & Profile Management',
  description: 'Comprehensive settings and profile management system built with Claude Code reference library',
  keywords: ['settings', 'profile', 'preferences', 'privacy', 'security', 'account management'],
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
          <SettingsLayout>
            {children}
          </SettingsLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}