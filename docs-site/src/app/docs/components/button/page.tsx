import { Button } from '@/components/ui/button'
import { CodePreview } from '@/components/code-preview'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, Heart, Mail, Plus, Settings, Trash2, ArrowRight, Loader2 } from 'lucide-react'

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">Button</h1>
          <Badge>Stable</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A versatile button component with multiple variants, sizes, and states. 
          Built with accessibility in mind and full keyboard navigation support.
        </p>
      </div>

      {/* Basic Usage */}
      <CodePreview
        title="Basic Usage"
        description="The default button with primary styling"
        code={`import { Button } from "@/components/ui/button"

export function Example() {
  return <Button>Click me</Button>
}`}
      >
        <Button>Click me</Button>
      </CodePreview>

      {/* Variants */}
      <CodePreview
        title="Variants"
        description="Different button styles for various use cases"
        code={`import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`}
      >
        <div className="flex gap-2 flex-wrap">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </CodePreview>

      {/* Sizes */}
      <CodePreview
        title="Sizes"
        description="Different button sizes for various contexts"
        code={`import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}`}
      >
        <div className="flex items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </CodePreview>

      {/* With Icons */}
      <CodePreview
        title="With Icons"
        description="Buttons with icons for better visual communication"
        code={`import { Button } from "@/components/ui/button"
import { Download, Heart, Mail, Plus } from "lucide-react"

export function Example() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Button>
        <Plus className="w-4 h-4 mr-2" />
        Add Item
      </Button>
      <Button variant="outline">
        <Download className="w-4 h-4 mr-2" />
        Download
      </Button>
      <Button variant="secondary">
        <Mail className="w-4 h-4 mr-2" />
        Send Email
      </Button>
      <Button variant="ghost">
        <Heart className="w-4 h-4 mr-2" />
        Like
      </Button>
    </div>
  )
}`}
      >
        <div className="flex gap-2 flex-wrap">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          <Button variant="secondary">
            <Mail className="w-4 h-4 mr-2" />
            Send Email
          </Button>
          <Button variant="ghost">
            <Heart className="w-4 h-4 mr-2" />
            Like
          </Button>
        </div>
      </CodePreview>

      {/* Icon Only */}
      <CodePreview
        title="Icon Only"
        description="Icon-only buttons for compact interfaces"
        code={`import { Button } from "@/components/ui/button"
import { Settings, Trash2, ArrowRight } from "lucide-react"

export function Example() {
  return (
    <div className="flex gap-2">
      <Button size="icon">
        <Settings className="w-4 h-4" />
      </Button>
      <Button size="icon" variant="outline">
        <ArrowRight className="w-4 h-4" />
      </Button>
      <Button size="icon" variant="destructive">
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  )
}`}
      >
        <div className="flex gap-2">
          <Button size="icon">
            <Settings className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="outline">
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="destructive">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CodePreview>

      {/* Loading State */}
      <CodePreview
        title="Loading State"
        description="Show loading state for async operations"
        code={`import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function Example() {
  return (
    <div className="flex gap-2">
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </Button>
      <Button variant="outline" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  )
}`}
      >
        <div className="flex gap-2">
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </Button>
          <Button variant="outline" disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        </div>
      </CodePreview>

      {/* Disabled State */}
      <CodePreview
        title="Disabled State"
        description="Disabled buttons for unavailable actions"
        code={`import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Button disabled>Default Disabled</Button>
      <Button variant="secondary" disabled>Secondary Disabled</Button>
      <Button variant="outline" disabled>Outline Disabled</Button>
      <Button variant="ghost" disabled>Ghost Disabled</Button>
    </div>
  )
}`}
      >
        <div className="flex gap-2 flex-wrap">
          <Button disabled>Default Disabled</Button>
          <Button variant="secondary" disabled>Secondary Disabled</Button>
          <Button variant="outline" disabled>Outline Disabled</Button>
          <Button variant="ghost" disabled>Ghost Disabled</Button>
        </div>
      </CodePreview>

      {/* API Reference */}
      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Complete list of props and their descriptions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Props</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border rounded-lg">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-3 font-medium">Prop</th>
                      <th className="text-left p-3 font-medium">Type</th>
                      <th className="text-left p-3 font-medium">Default</th>
                      <th className="text-left p-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-mono">variant</td>
                      <td className="p-3 font-mono text-muted-foreground">
                        "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
                      </td>
                      <td className="p-3 font-mono">"default"</td>
                      <td className="p-3">The visual style variant of the button</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-mono">size</td>
                      <td className="p-3 font-mono text-muted-foreground">
                        "default" | "sm" | "lg" | "icon"
                      </td>
                      <td className="p-3 font-mono">"default"</td>
                      <td className="p-3">The size of the button</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-mono">asChild</td>
                      <td className="p-3 font-mono text-muted-foreground">boolean</td>
                      <td className="p-3 font-mono">false</td>
                      <td className="p-3">Render as child element (useful with Next.js Link)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-mono">disabled</td>
                      <td className="p-3 font-mono text-muted-foreground">boolean</td>
                      <td className="p-3 font-mono">false</td>
                      <td className="p-3">Whether the button is disabled</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono">className</td>
                      <td className="p-3 font-mono text-muted-foreground">string</td>
                      <td className="p-3 font-mono">-</td>
                      <td className="p-3">Additional CSS classes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility */}
      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Built-in accessibility features and best practices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Full keyboard navigation support</li>
                <li>• Proper focus indicators and management</li>
                <li>• Screen reader compatible with semantic HTML</li>
                <li>• WCAG 2.1 compliant color contrast ratios</li>
                <li>• Disabled state properly communicated to assistive technology</li>
                <li>• Loading state announced to screen readers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Keyboard Interactions</h4>
              <div className="space-y-2">
                <div className="flex gap-4 text-sm">
                  <Badge variant="outline" className="font-mono">Space</Badge>
                  <span className="text-muted-foreground">Activates the button</span>
                </div>
                <div className="flex gap-4 text-sm">
                  <Badge variant="outline" className="font-mono">Enter</Badge>
                  <span className="text-muted-foreground">Activates the button</span>
                </div>
                <div className="flex gap-4 text-sm">
                  <Badge variant="outline" className="font-mono">Tab</Badge>
                  <span className="text-muted-foreground">Moves focus to the button</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}