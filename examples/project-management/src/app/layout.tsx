import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import ProjectLayout from '@/components/layout/ProjectLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaskFlow - Project Management & Collaboration',
  description: 'Comprehensive project management platform for teams to plan, track, and deliver projects efficiently',
  keywords: 'project management, task management, kanban, gantt, agile, scrum, collaboration, productivity',
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
          <ProjectLayout>
            {children}
          </ProjectLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}