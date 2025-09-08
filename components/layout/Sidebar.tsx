"use client"

import React, { useState, useEffect, useRef } from 'react'
import { 
  ChevronDown, 
  ChevronRight, 
  Menu, 
  Home, 
  BarChart3, 
  Users, 
  Settings, 
  FileText, 
  Bell, 
  Search, 
  LogOut, 
  User,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface MenuItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  href?: string
  badge?: string
  children?: MenuItem[]
}

interface UserProfile {
  name: string
  email: string
  avatar?: string
}

interface SidebarNavigationProps {
  menuItems?: MenuItem[]
  userProfile?: UserProfile
  isCollapsed?: boolean
  onToggleCollapse?: () => void
  activeItemId?: string
  onItemClick?: (item: MenuItem) => void
  className?: string
  logoUrl?: string
  appName?: string
  showUserProfile?: boolean
  variant?: 'default' | 'floating' | 'minimal'
}

const defaultMenuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: Home,
    href: '/dashboard'
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    href: '/analytics',
    badge: 'New'
  },
  {
    id: 'users',
    label: 'Users',
    icon: Users,
    children: [
      {
        id: 'all-users',
        label: 'All Users',
        icon: Users,
        href: '/users/all'
      },
      {
        id: 'user-roles',
        label: 'User Roles',
        icon: Settings,
        href: '/users/roles'
      }
    ]
  },
  {
    id: 'content',
    label: 'Content',
    icon: FileText,
    children: [
      {
        id: 'posts',
        label: 'Posts',
        icon: FileText,
        href: '/content/posts'
      },
      {
        id: 'pages',
        label: 'Pages',
        icon: FileText,
        href: '/content/pages'
      }
    ]
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: Bell,
    href: '/notifications',
    badge: '3'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    href: '/settings'
  }
]

const defaultUserProfile: UserProfile = {
  name: 'John Doe',
  email: 'john@example.com'
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  menuItems = defaultMenuItems,
  userProfile = defaultUserProfile,
  isCollapsed = false,
  onToggleCollapse,
  activeItemId = 'dashboard',
  onItemClick,
  className = '',
  logoUrl,
  appName = 'Dashboard',
  showUserProfile = true,
  variant = 'default'
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [focusedItemId, setFocusedItemId] = useState<string | null>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  const handleItemClick = (item: MenuItem) => {
    if (item.children) {
      toggleExpanded(item.id)
    } else {
      onItemClick?.(item)
      setIsMobileOpen(false)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent, item: MenuItem) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        handleItemClick(item)
        break
      case 'ArrowRight':
        if (item.children && !expandedItems.has(item.id)) {
          event.preventDefault()
          toggleExpanded(item.id)
        }
        break
      case 'ArrowLeft':
        if (item.children && expandedItems.has(item.id)) {
          event.preventDefault()
          toggleExpanded(item.id)
        }
        break
    }
  }

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const isActive = activeItemId === item.id
    const isExpanded = expandedItems.has(item.id)
    const hasChildren = item.children && item.children.length > 0
    const isFocused = focusedItemId === item.id

    return (
      <div key={item.id} className="w-full">
        <div
          role="button"
          tabIndex={0}
          className={cn(
            "flex items-center w-full px-3 py-2 text-sm rounded-lg cursor-pointer transition-all duration-200",
            "hover:bg-accent hover:text-accent-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            level > 0 && "ml-4 pl-6",
            isActive && "bg-primary text-primary-foreground shadow-sm",
            !isActive && "text-foreground",
            isCollapsed && level === 0 && "justify-center px-2",
            isFocused && "ring-2 ring-ring ring-offset-2"
          )}
          onClick={() => handleItemClick(item)}
          onKeyDown={(e) => handleKeyDown(e, item)}
          onFocus={() => setFocusedItemId(item.id)}
          onBlur={() => setFocusedItemId(null)}
          aria-expanded={hasChildren ? isExpanded : undefined}
          aria-current={isActive ? 'page' : undefined}
        >
          <item.icon 
            className={cn(
              "flex-shrink-0",
              isCollapsed && level === 0 ? "h-5 w-5" : "h-4 w-4 mr-3"
            )} 
          />
          
          {(!isCollapsed || level > 0) && (
            <>
              <span className="flex-1 text-left truncate">{item.label}</span>
              
              {item.badge && (
                <Badge 
                  variant={isActive ? "secondary" : "default"} 
                  className="ml-2 text-xs"
                >
                  {item.badge}
                </Badge>
              )}
              
              {hasChildren && (
                <div className="ml-2">
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {hasChildren && isExpanded && (!isCollapsed || level > 0) && (
          <div className="mt-1 space-y-1">
            {item.children?.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  const SidebarContent = ({ isMobile = false }) => (
    <div className={cn(
      "flex flex-col h-full bg-background",
      !isMobile && "border-r border-border",
      variant === 'floating' && "mx-2 my-2 rounded-lg border shadow-sm bg-card",
      variant === 'minimal' && "border-0"
    )}>
      {/* Header */}
      <div className={cn(
        "flex items-center p-4",
        !variant === 'minimal' && "border-b border-border",
        isCollapsed && !isMobile && "justify-center"
      )}>
        {isMobile && (
          <Button
            variant="ghost"
            size="sm"
            className="p-2 mr-2 lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        )}

        {!isCollapsed || isMobile ? (
          <div className="flex items-center space-x-2">
            {logoUrl ? (
              <img src={logoUrl} alt={appName} className="w-8 h-8 rounded-lg" />
            ) : (
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Search className="h-4 w-4 text-primary-foreground" />
              </div>
            )}
            <span className="font-semibold text-lg text-foreground">{appName}</span>
          </div>
        ) : (
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            {logoUrl ? (
              <img src={logoUrl} alt={appName} className="w-8 h-8 rounded-lg" />
            ) : (
              <Search className="h-4 w-4 text-primary-foreground" />
            )}
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => renderMenuItem(item))}
      </nav>

      {/* User Profile Section */}
      {showUserProfile && (
        <>
          <div className="mx-4 border-t border-border" />
          <div className="p-4">
            {!isCollapsed || isMobile ? (
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {userProfile.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {userProfile.email}
                    </p>
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start text-muted-foreground hover:text-foreground"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-primary-foreground" />
                </div>
                <Button variant="ghost" size="sm" className="p-2">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )

  return (
    <>
      {/* Mobile Trigger */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="sm"
          className="p-2"
          onClick={() => setIsMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Mobile Overlay */}
        {isMobileOpen && (
          <div 
            className="fixed inset-0 z-50 bg-black/50 lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div className={cn(
          "fixed left-0 top-0 z-50 h-full w-80 transform transition-transform duration-300 lg:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <SidebarContent isMobile={true} />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div 
        ref={sidebarRef}
        className={cn(
          "hidden lg:flex flex-col h-screen transition-all duration-300 ease-in-out relative",
          isCollapsed ? "w-16" : "w-64",
          className
        )}
      >
        <SidebarContent isMobile={false} />
        
        {/* Collapse Toggle */}
        {onToggleCollapse && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute -right-3 top-6 h-6 w-6 rounded-full border border-border bg-background shadow-md hover:bg-accent z-10"
            onClick={onToggleCollapse}
          >
            {isCollapsed ? (
              <ChevronRight className="h-3 w-3" />
            ) : (
              <ChevronDown className="h-3 w-3 rotate-90" />
            )}
          </Button>
        )}
      </div>
    </>
  )
}

// Usage Example Component
export const SidebarExample = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItemId, setActiveItemId] = useState('dashboard')

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const handleItemClick = (item: MenuItem) => {
    setActiveItemId(item.id)
    console.log('Navigating to:', item.href || item.label)
  }

  return (
    <div className="flex h-screen bg-background">
      <SidebarNavigation
        isCollapsed={isCollapsed}
        onToggleCollapse={handleToggleCollapse}
        activeItemId={activeItemId}
        onItemClick={handleItemClick}
        appName="My Dashboard"
        showUserProfile={true}
        variant="default"
      />
      
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-6">
            Dashboard Content
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="p-6 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  Card {i}
                </h3>
                <p className="text-muted-foreground">
                  Sample content for demonstration purposes. This shows how the 
                  sidebar works with main content.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default SidebarNavigation