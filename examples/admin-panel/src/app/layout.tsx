import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { AdminLayout } from '@/components/layout/admin-layout'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AdminHub - Advanced Data Management Panel',
  description: 'Comprehensive admin panel with advanced data tables built with Claude Code reference library',
  keywords: ['admin panel', 'data tables', 'analytics', 'management', 'dashboard', 'enterprise'],
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
          <AdminLayout>
            {children}
          </AdminLayout>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'hsl(var(--card))',
                color: 'hsl(var(--card-foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}