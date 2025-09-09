import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import RealEstateLayout from '@/components/layout/RealEstateLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PropertyHub - Real Estate Management Platform',
  description: 'Comprehensive real estate property management platform for agents, managers, and property owners with advanced analytics and automation',
  keywords: 'real estate, property management, rental properties, tenant management, lease tracking, maintenance, financial reporting',
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
          <RealEstateLayout>
            {children}
          </RealEstateLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}