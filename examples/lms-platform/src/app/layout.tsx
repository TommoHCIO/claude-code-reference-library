import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import LMSLayout from '@/components/layout/LMSLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduSpace - Learning Management System',
  description: 'Comprehensive LMS platform for modern education and corporate training',
  keywords: 'LMS, education, online learning, courses, training, e-learning',
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
          <LMSLayout>
            {children}
          </LMSLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}