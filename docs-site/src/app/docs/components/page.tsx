import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  Blocks, 
  FormInput, 
  Navigation, 
  BarChart3, 
  Layout,
  AlertCircle,
  Calendar,
  Image,
  Table,
  MessageSquare,
  Loader2
} from 'lucide-react'
import Link from 'next/link'

const componentCategories = [
  {
    title: "Form Components",
    description: "Interactive form controls with validation support",
    icon: FormInput,
    count: 8,
    components: [
      { name: "Button", href: "/docs/components/button", status: "stable" },
      { name: "Input", href: "/docs/components/input", status: "stable" },
      { name: "Textarea", href: "/docs/components/textarea", status: "stable" },
      { name: "Select", href: "/docs/components/select", status: "stable" },
      { name: "Checkbox", href: "/docs/components/checkbox", status: "beta" },
      { name: "Radio Group", href: "/docs/components/radio", status: "beta" },
      { name: "Switch", href: "/docs/components/switch", status: "beta" },
      { name: "Form", href: "/docs/components/form", status: "stable" },
    ]
  },
  {
    title: "Navigation",
    description: "Navigation components for site structure",
    icon: Navigation,
    count: 6,
    components: [
      { name: "Sidebar", href: "/docs/components/sidebar", status: "stable" },
      { name: "Header", href: "/docs/components/header", status: "stable" },
      { name: "Breadcrumb", href: "/docs/components/breadcrumb", status: "beta" },
      { name: "Tabs", href: "/docs/components/tabs", status: "beta" },
      { name: "Pagination", href: "/docs/components/pagination", status: "beta" },
      { name: "Menu", href: "/docs/components/menu", status: "alpha" },
    ]
  },
  {
    title: "Data Display",
    description: "Components for displaying data and content",
    icon: BarChart3,
    count: 7,
    components: [
      { name: "Charts", href: "/docs/components/charts", status: "stable" },
      { name: "Table", href: "/docs/components/table", status: "beta" },
      { name: "Card", href: "/docs/components/card", status: "stable" },
      { name: "Badge", href: "/docs/components/badge", status: "stable" },
      { name: "Avatar", href: "/docs/components/avatar", status: "beta" },
      { name: "Progress", href: "/docs/components/progress", status: "beta" },
      { name: "Skeleton", href: "/docs/components/skeleton", status: "alpha" },
    ]
  },
  {
    title: "Layout",
    description: "Layout and container components",
    icon: Layout,
    count: 5,
    components: [
      { name: "Container", href: "/docs/components/container", status: "stable" },
      { name: "Grid", href: "/docs/components/grid", status: "stable" },
      { name: "Stack", href: "/docs/components/stack", status: "beta" },
      { name: "Divider", href: "/docs/components/divider", status: "beta" },
      { name: "Spacer", href: "/docs/components/spacer", status: "alpha" },
    ]
  },
  {
    title: "Feedback",
    description: "User feedback and notification components",
    icon: AlertCircle,
    count: 6,
    components: [
      { name: "Alert", href: "/docs/components/alert", status: "beta" },
      { name: "Toast", href: "/docs/components/toast", status: "beta" },
      { name: "Modal", href: "/docs/components/modal", status: "beta" },
      { name: "Tooltip", href: "/docs/components/tooltip", status: "alpha" },
      { name: "Popover", href: "/docs/components/popover", status: "alpha" },
      { name: "Loading", href: "/docs/components/loading", status: "alpha" },
    ]
  },
  {
    title: "Media",
    description: "Media and content display components",
    icon: Image,
    count: 4,
    components: [
      { name: "Image", href: "/docs/components/image", status: "beta" },
      { name: "Icon", href: "/docs/components/icon", status: "stable" },
      { name: "Carousel", href: "/docs/components/carousel", status: "alpha" },
      { name: "Gallery", href: "/docs/components/gallery", status: "alpha" },
    ]
  }
]

function getStatusColor(status: string) {
  switch (status) {
    case 'stable':
      return 'default'
    case 'beta':
      return 'secondary'
    case 'alpha':
      return 'outline'
    default:
      return 'secondary'
  }
}

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Components</h1>
        <p className="text-lg text-muted-foreground">
          A comprehensive collection of 38+ reusable UI components built with React, 
          TypeScript, and Tailwind CSS. All components are accessible, themeable, 
          and production-ready.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-primary mb-2">38+</div>
            <div className="text-sm text-muted-foreground">Total Components</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-green-600 mb-2">22</div>
            <div className="text-sm text-muted-foreground">Stable</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-yellow-600 mb-2">12</div>
            <div className="text-sm text-muted-foreground">Beta</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-sm text-muted-foreground">Alpha</div>
          </CardContent>
        </Card>
      </div>

      {/* Component Categories */}
      <div className="space-y-6">
        {componentCategories.map((category) => {
          const Icon = category.icon
          return (
            <Card key={category.title}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">{category.count} components</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {category.components.map((component) => (
                    <div
                      key={component.name}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors"
                    >
                      <Link 
                        href={component.href}
                        className="flex-1 font-medium hover:text-primary transition-colors"
                      >
                        {component.name}
                      </Link>
                      <Badge 
                        variant={getStatusColor(component.status) as any}
                        className="ml-2 text-xs"
                      >
                        {component.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Start */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Using Components</CardTitle>
          <CardDescription>
            All components are designed to be copied and pasted into your project. 
            No package installation required.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">
              {`import { Button } from "@/components/ui/button"

export function Example() {
  return <Button>Click me</Button>
}`}
            </code>
          </div>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/docs/installation">
                Installation Guide
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/components/button">
                View Button Component
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Component Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <FormInput className="w-8 h-8 text-primary mb-2" />
            <CardTitle>Accessible by Default</CardTitle>
            <CardDescription>
              All components follow WCAG 2.1 guidelines with proper ARIA labels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Keyboard navigation</li>
              <li>• Screen reader support</li>
              <li>• Focus management</li>
              <li>• Color contrast compliance</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Blocks className="w-8 h-8 text-primary mb-2" />
            <CardTitle>Highly Customizable</CardTitle>
            <CardDescription>
              Easy to customize with CSS variables and Tailwind classes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• CSS custom properties</li>
              <li>• Tailwind class variants</li>
              <li>• Theme system integration</li>
              <li>• Dark mode support</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <BarChart3 className="w-8 h-8 text-primary mb-2" />
            <CardTitle>TypeScript First</CardTitle>
            <CardDescription>
              Full TypeScript support with comprehensive type definitions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Strict type checking</li>
              <li>• IntelliSense support</li>
              <li>• Prop validation</li>
              <li>• Generic components</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}