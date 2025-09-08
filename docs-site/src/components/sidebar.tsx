"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  Book, 
  Palette, 
  Layers, 
  FileText, 
  Code2, 
  Layout,
  Database,
  BarChart3,
  FormInput,
  Navigation,
  Blocks,
  Settings,
  Zap
} from "lucide-react"

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs", icon: Book },
      { title: "Installation", href: "/docs/installation", icon: Settings },
      { title: "Quick Start", href: "/docs/quick-start", icon: Zap },
    ]
  },
  {
    title: "Design System",
    items: [
      { title: "Design Tokens", href: "/docs/design-tokens", icon: Palette },
      { title: "Typography", href: "/docs/typography", icon: FileText },
      { title: "Color System", href: "/docs/colors", icon: Palette },
      { title: "Spacing & Layout", href: "/docs/layout", icon: Layout },
    ]
  },
  {
    title: "Components",
    items: [
      { title: "Overview", href: "/docs/components", icon: Layers },
      { title: "Button", href: "/docs/components/button", icon: Blocks },
      { title: "Form Controls", href: "/docs/components/forms", icon: FormInput },
      { title: "Navigation", href: "/docs/components/navigation", icon: Navigation },
      { title: "Data Display", href: "/docs/components/data-display", icon: BarChart3 },
      { title: "Layout", href: "/docs/components/layout", icon: Layout },
    ]
  },
  {
    title: "Patterns",
    items: [
      { title: "Form Validation", href: "/docs/patterns/validation", icon: FormInput },
      { title: "Data Fetching", href: "/docs/patterns/data-fetching", icon: Database },
      { title: "State Management", href: "/docs/patterns/state", icon: Code2 },
    ]
  },
  {
    title: "Templates",
    items: [
      { title: "Project Starters", href: "/docs/templates/starters", icon: Code2 },
      { title: "Page Templates", href: "/docs/templates/pages", icon: FileText },
      { title: "Component Templates", href: "/docs/templates/components", icon: Blocks },
    ]
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Documentation
          </h2>
          <div className="space-y-1">
            {navigation.map((section) => (
              <div key={section.title} className="pb-4">
                <h4 className="mb-1 px-4 text-sm font-semibold text-muted-foreground">
                  {section.title}
                </h4>
                <div className="grid gap-1">
                  {section.items.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                          pathname === item.href
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {item.title}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}