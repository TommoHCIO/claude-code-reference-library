import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import MessagingLayout from '@/components/layout/MessagingLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatSpace - Real-time Messaging Platform',
  description: 'Modern messaging application with real-time communication, file sharing, and video calls',
  keywords: 'messaging, chat, real-time, communication, video calls, file sharing',
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
          <MessagingLayout>
            {children}
          </MessagingLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}