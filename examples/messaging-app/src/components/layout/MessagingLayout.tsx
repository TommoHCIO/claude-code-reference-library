'use client'

import { ReactNode } from 'react'

interface MessagingLayoutProps {
  children: ReactNode
}

export default function MessagingLayout({ children }: MessagingLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  )
}