import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/theme-toggle'

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex min-h-screen flex-col items-center justify-center space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Badge variant="secondary" className="mb-4">
              Next.js 15 + TypeScript + Tailwind CSS
            </Badge>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to{' '}
            <span className="text-primary">Next.js</span>{' '}
            Starter
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A modern, production-ready starter template with TypeScript, Tailwind CSS, 
            and best practices for building exceptional web applications.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
          <ThemeToggle />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl w-full">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>🚀</span>
                <span>Performance</span>
              </CardTitle>
              <CardDescription>
                Optimized for speed with Next.js App Router
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built-in performance optimizations including automatic code splitting, 
                image optimization, and server-side rendering.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>🎨</span>
                <span>Modern UI</span>
              </CardTitle>
              <CardDescription>
                Beautiful design with Tailwind CSS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Responsive design system with dark mode support, 
                custom components, and accessibility features.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>⚡</span>
                <span>Developer Experience</span>
              </CardTitle>
              <CardDescription>
                TypeScript, ESLint, and modern tooling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Comprehensive development setup with type safety, 
                code formatting, and testing infrastructure.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Built with ❤️ using Claude Code SOP Methodology
          </p>
        </div>
      </div>
    </main>
  )
}