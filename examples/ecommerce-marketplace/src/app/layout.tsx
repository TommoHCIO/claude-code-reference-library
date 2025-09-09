import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import EcommerceLayout from '@/components/layout/EcommerceLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MarketHub - Multi-Vendor E-commerce Marketplace',
  description: 'Comprehensive e-commerce marketplace platform with multi-vendor support, advanced shopping features, and secure payment processing',
  keywords: 'e-commerce, marketplace, online shopping, multi-vendor, retail, shopping cart, payments',
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
          <EcommerceLayout>
            {children}
          </EcommerceLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}