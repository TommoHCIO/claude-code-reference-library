import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BookOpen, Code2, Palette, Zap } from 'lucide-react'
import Link from 'next/link'

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Getting Started</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to the Claude Code Reference Library documentation. This comprehensive guide 
          will help you understand and implement our design system and component library.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <CardTitle className="text-xl">Installation</CardTitle>
            </div>
            <CardDescription>
              Quick setup guide to get the library running in your project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/docs/installation">
                Start Installing <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              <CardTitle className="text-xl">Components</CardTitle>
            </div>
            <CardDescription>
              Browse 50+ production-ready components with examples
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full" variant="outline">
              <Link href="/docs/components">
                Browse Components <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* What's Included */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">What's Included</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <BookOpen className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Templates & Starters</CardTitle>
              <CardDescription>
                Ready-to-use project templates and page layouts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Next.js 15 starter template</li>
                <li>• Authentication layouts</li>
                <li>• Dashboard templates</li>
                <li>• Landing page patterns</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code2 className="w-8 h-8 text-primary mb-2" />
              <CardTitle>UI Components</CardTitle>
              <CardDescription>
                Comprehensive component library with TypeScript support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Form controls & validation</li>
                <li>• Navigation components</li>
                <li>• Data visualization</li>
                <li>• Layout utilities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Palette className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Design System</CardTitle>
              <CardDescription>
                Consistent design tokens and theming
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Color palette system</li>
                <li>• Typography scales</li>
                <li>• Spacing utilities</li>
                <li>• Dark mode support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Features</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-lg border bg-card">
            <div className="text-2xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Components</div>
          </div>
          <div className="text-center p-4 rounded-lg border bg-card">
            <div className="text-2xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">TypeScript</div>
          </div>
          <div className="text-center p-4 rounded-lg border bg-card">
            <div className="text-2xl font-bold text-primary mb-2">A11Y</div>
            <div className="text-sm text-muted-foreground">Compliant</div>
          </div>
          <div className="text-center p-4 rounded-lg border bg-card">
            <div className="text-2xl font-bold text-primary mb-2">RTL</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <Card>
        <CardHeader>
          <CardTitle>Built With Modern Technologies</CardTitle>
          <CardDescription>
            This library is built using the latest and most reliable technologies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">React 19</Badge>
            <Badge variant="secondary">Next.js 15</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">Radix UI</Badge>
            <Badge variant="secondary">Framer Motion</Badge>
            <Badge variant="secondary">React Hook Form</Badge>
            <Badge variant="secondary">Zod</Badge>
            <Badge variant="secondary">Recharts</Badge>
            <Badge variant="secondary">Lucide Icons</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Ready to Start Building?</CardTitle>
          <CardDescription>
            Follow our installation guide and start using components in minutes
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/docs/installation">
              Get Started
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/docs/components">
              Explore Components
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}