'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  FolderKanban, 
  Calendar, 
  Users, 
  BarChart3, 
  Settings,
  Bell,
  Search,
  Menu,
  X,
  User,
  LogOut,
  Moon,
  Sun,
  Plus,
  Clock,
  Target,
  MessageSquare,
  FileText,
  Zap,
  Archive
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

interface ProjectLayoutProps {
  children: React.ReactNode
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Projects', href: '/projects', icon: FolderKanban, badge: 4 },
    { name: 'Tasks', href: '/tasks', icon: Target, badge: 12 },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
    { name: 'Team', href: '/team', icon: Users },
    { name: 'Reports', href: '/reports', icon: BarChart3 },
    { name: 'Messages', href: '/messages', icon: MessageSquare, badge: 3 },
  ]

  const quickActions = [
    { name: 'Time Tracking', href: '/time', icon: Clock },
    { name: 'Documents', href: '/documents', icon: FileText },
    { name: 'Automations', href: '/automations', icon: Zap },
    { name: 'Archive', href: '/archive', icon: Archive },
  ]

  const recentProjects = [
    { id: 1, name: 'Website Redesign', color: '#3b82f6', progress: 75 },
    { id: 2, name: 'Mobile App', color: '#10b981', progress: 45 },
    { id: 3, name: 'Database Migration', color: '#8b5cf6', progress: 90 },
    { id: 4, name: 'Marketing Campaign', color: '#f59e0b', progress: 25 }
  ]

  const notifications = [
    { id: 1, text: 'New task assigned: "Review database schema"', time: '5m ago', unread: true },
    { id: 2, text: 'Project deadline reminder: Website Redesign due in 3 days', time: '1h ago', unread: true },
    { id: 3, text: 'Sarah completed task: "Design homepage mockups"', time: '2h ago', unread: false },
    { id: 4, text: 'Weekly team standup scheduled for tomorrow 9 AM', time: '1d ago', unread: false },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 w-72 bg-card border-r transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 lg:static lg:inset-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 project-gradient rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">TaskFlow</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* User Profile */}
          <div className="p-6 border-b">
            <div className="flex items-center space-x-3 mb-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/avatars/user.jpg" />
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold text-sm">Alex Thompson</p>
                <p className="text-xs text-muted-foreground">Project Manager</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              <div>
                <p className="font-semibold text-lg">4</p>
                <p className="text-muted-foreground">Active</p>
              </div>
              <div>
                <p className="font-semibold text-lg">12</p>
                <p className="text-muted-foreground">Tasks</p>
              </div>
              <div>
                <p className="font-semibold text-lg">85%</p>
                <p className="text-muted-foreground">Complete</p>
              </div>
            </div>

            <Button size="sm" className="w-full mt-4 project-gradient text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Task
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto h-5">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                )
              })}
            </div>

            <Separator className="my-4" />

            <div className="space-y-1">
              <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Tools
              </h3>
              {quickActions.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Recent Projects
              </h3>
              {recentProjects.map((project) => (
                <div key={project.id} className="sidebar-project">
                  <div 
                    className="project-color"
                    style={{ backgroundColor: project.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{project.name}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex-1 bg-muted rounded-full h-1">
                        <div 
                          className="bg-current rounded-full h-1 transition-all duration-300"
                          style={{ 
                            width: `${project.progress}%`,
                            backgroundColor: project.color 
                          }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{project.progress}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/settings">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-72">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-md px-4 md:px-6">
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>

          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search projects, tasks, team members..."
                className="pl-8"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-4 w-4" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    2
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-96">
                <div className="p-3">
                  <h3 className="font-semibold">Notifications</h3>
                  <p className="text-sm text-muted-foreground">You have 2 unread notifications</p>
                </div>
                <Separator />
                <div className="max-h-[400px] overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        "p-3 border-b hover:bg-accent transition-colors cursor-pointer",
                        notification.unread && "bg-blue-50/50 dark:bg-blue-950/20"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className={cn(
                          "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                          notification.unread ? "bg-blue-500" : "bg-gray-300"
                        )} />
                        <div className="flex-1">
                          <p className="text-sm">{notification.text}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3">
                  <Button variant="outline" className="w-full" size="sm">
                    View All Notifications
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/user.jpg" />
                    <AvatarFallback>AT</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">Alex Thompson</p>
                    <p className="text-xs text-muted-foreground">alex.thompson@company.com</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}