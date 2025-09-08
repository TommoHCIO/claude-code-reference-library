import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Code2, 
  Palette, 
  Zap, 
  Shield, 
  Layers, 
  GitBranch,
  FileText,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-12">
        <h1 className="text-4xl font-bold tracking-tight">
          Claude Code Reference Library
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive design system and component library built with Next.js 15, 
          TypeScript, and Tailwind CSS for rapid application development.
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <Button asChild size="lg">
            <Link href="/docs/getting-started">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/docs/components">Browse Components</Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              <CardTitle>Modern Stack</CardTitle>
            </div>
            <CardDescription>
              Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Next.js 15</Badge>
              <Badge variant="secondary">React 19</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              <CardTitle>50+ Components</CardTitle>
            </div>
            <CardDescription>
              Comprehensive collection of reusable UI components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Form components with validation</li>
              <li>• Data display & visualization</li>
              <li>• Navigation & layout</li>
              <li>• Interactive elements</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-primary" />
              <CardTitle>Design System</CardTitle>
            </div>
            <CardDescription>
              Consistent design tokens and theming system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Dark/light mode support</li>
              <li>• Responsive breakpoints</li>
              <li>• Color palette system</li>
              <li>• Typography scale</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <CardTitle>Accessibility First</CardTitle>
            </div>
            <CardDescription>
              WCAG 2.1 compliant with comprehensive keyboard navigation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• ARIA labels & roles</li>
              <li>• Keyboard navigation</li>
              <li>• Screen reader support</li>
              <li>• Focus management</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <CardTitle>Performance Optimized</CardTitle>
            </div>
            <CardDescription>
              Optimized for speed with lazy loading and code splitting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Tree shaking support</li>
              <li>• Lazy loading</li>
              <li>• Code splitting</li>
              <li>• Bundle optimization</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-primary" />
              <CardTitle>Developer Experience</CardTitle>
            </div>
            <CardDescription>
              Complete development workflow with testing and CI/CD
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• TypeScript definitions</li>
              <li>• Automated testing</li>
              <li>• GitHub Actions CI/CD</li>
              <li>• Storybook integration</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Quick Start Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Quick Start
          </CardTitle>
          <CardDescription>
            Get started with the reference library in minutes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">
              npx create-next-app@latest my-app --typescript --tailwind --eslint
            </code>
          </div>
          <p className="text-sm text-muted-foreground">
            Then copy components from this library into your project and start building!
          </p>
          <Button asChild>
            <Link href="/docs/installation">View Installation Guide</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Responsive Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Responsive Design</CardTitle>
          <CardDescription>
            Components work seamlessly across all device sizes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center gap-8 py-8">
            <div className="text-center">
              <Smartphone className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Mobile</p>
              <p className="text-xs text-muted-foreground">375px+</p>
            </div>
            <div className="text-center">
              <Tablet className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Tablet</p>
              <p className="text-xs text-muted-foreground">768px+</p>
            </div>
            <div className="text-center">
              <Monitor className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Desktop</p>
              <p className="text-xs text-muted-foreground">1024px+</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}