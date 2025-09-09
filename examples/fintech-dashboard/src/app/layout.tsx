import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import FintechLayout from '@/components/layout/FintechLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FinanceHub - Digital Banking & Investment Platform',
  description: 'Comprehensive fintech dashboard for banking, investments, and financial management',
  keywords: 'fintech, banking, investment, portfolio, trading, digital banking, financial dashboard',
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
          <FintechLayout>
            {children}
          </FintechLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}