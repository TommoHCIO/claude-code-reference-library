'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  BookOpen, 
  Users, 
  Calendar, 
  MessageSquare, 
  Settings,
  Award,
  BarChart3,
  Bell,
  Search,
  Menu,
  X,
  User,
  LogOut,
  Moon,
  Sun,
  ChevronDown,
  GraduationCap,
  FileText,
  Video,
  HelpCircle
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

interface LMSLayoutProps {
  children: React.ReactNode
}

export default function LMSLayout({ children }: LMSLayoutProps) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'My Courses', href: '/courses', icon: BookOpen, badge: 3 },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
    { name: 'Assignments', href: '/assignments', icon: FileText, badge: 2 },
    { name: 'Discussions', href: '/discussions', icon: MessageSquare },
    { name: 'Grades', href: '/grades', icon: Award },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  ]

  const quickLinks = [
    { name: 'Live Sessions', href: '/live', icon: Video },
    { name: 'Study Groups', href: '/groups', icon: Users },
    { name: 'Help Center', href: '/help', icon: HelpCircle },
  ]

  const notifications = [
    { id: 1, text: 'New assignment posted in React Development', time: '2 mins ago', unread: true },
    { id: 2, text: 'Grade available for UX Design Quiz', time: '1 hour ago', unread: true },
    { id: 3, text: 'Discussion reply in Python for Data Science', time: '3 hours ago', unread: false },
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
        "fixed inset-y-0 left-0 w-64 bg-card border-r transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 lg:static lg:inset-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">EduSpace</span>
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
            <div className="flex items-center space-x-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/avatars/student.jpg" />
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold text-sm">Alex Thompson</p>
                <p className="text-xs text-muted-foreground">Computer Science Major</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-lg font-bold">3.8</p>
                <p className="text-xs text-muted-foreground">GPA</p>
              </div>
              <div>
                <p className="text-lg font-bold">12</p>
                <p className="text-xs text-muted-foreground">Credits</p>
              </div>
              <div>
                <p className="text-lg font-bold">85%</p>
                <p className="text-xs text-muted-foreground">Progress</p>
              </div>
            </div>
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
                Quick Access
              </h3>
              {quickLinks.map((item) => (
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
      <div className="lg:ml-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
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
                placeholder="Search courses, assignments, discussions..."
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
              <DropdownMenuContent align="end" className="w-80">
                <div className="p-3">
                  <h3 className="font-semibold">Notifications</h3>
                  <p className="text-sm text-muted-foreground">You have 2 unread notifications</p>
                </div>
                <Separator />
                <div className="max-h-[300px] overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        "p-3 border-b hover:bg-accent transition-colors",
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
                    <AvatarImage src="/avatars/student.jpg" />
                    <AvatarFallback>AT</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">Alex Thompson</p>
                    <p className="text-xs text-muted-foreground">alex.thompson@university.edu</p>
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