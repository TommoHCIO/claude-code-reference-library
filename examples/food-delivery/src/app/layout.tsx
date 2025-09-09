import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import FoodDeliveryLayout from '@/components/layout/FoodDeliveryLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QuickBite - Food Delivery Platform',
  description: 'Order delicious food from local restaurants with fast delivery, real-time tracking, and seamless payment processing',
  keywords: 'food delivery, restaurant ordering, meal delivery, online food, takeout, food app, restaurant marketplace',
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
          <FoodDeliveryLayout>
            {children}
          </FoodDeliveryLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}