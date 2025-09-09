import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import HealthcareLayout from '@/components/layout/HealthcareLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MedFlow - Healthcare Management Platform',
  description: 'Comprehensive healthcare platform for medical practices, hospitals, and clinics with EHR, appointment scheduling, and patient management',
  keywords: 'healthcare, EHR, medical records, patient management, appointment scheduling, telemedicine, HIPAA',
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
          <HealthcareLayout>
            {children}
          </HealthcareLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}