'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Users, 
  Calendar, 
  FileText, 
  Activity, 
  Settings,
  Bell,
  Search,
  Menu,
  X,
  User,
  LogOut,
  Moon,
  Sun,
  Shield,
  Heart,
  Pill,
  Stethoscope,
  ClipboardList,
  TestTube,
  Building2,
  Phone,
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

interface HealthcareLayoutProps {
  children: React.ReactNode
}

export default function HealthcareLayout({ children }: HealthcareLayoutProps) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Patients', href: '/patients', icon: Users, badge: 127 },
    { name: 'Appointments', href: '/appointments', icon: Calendar, badge: 24 },
    { name: 'Medical Records', href: '/records', icon: FileText },
    { name: 'Lab Results', href: '/labs', icon: TestTube, badge: 8 },
    { name: 'Prescriptions', href: '/prescriptions', icon: Pill },
    { name: 'Vital Signs', href: '/vitals', icon: Activity },
  ]

  const quickActions = [
    { name: 'Emergency', href: '/emergency', icon: Heart },
    { name: 'Consultations', href: '/consultations', icon: Stethoscope },
    { name: 'Reports', href: '/reports', icon: ClipboardList },
    { name: 'Departments', href: '/departments', icon: Building2 },
    { name: 'Telehealth', href: '/telehealth', icon: Phone },
    { name: 'Help Center', href: '/help', icon: HelpCircle },
  ]

  const criticalAlerts = [
    { id: 1, patient: 'Maria Rodriguez', condition: 'Hypertension Crisis', severity: 'critical', time: '5m ago' },
    { id: 2, patient: 'James Thompson', condition: 'Post-Op Fever', severity: 'urgent', time: '15m ago' },
    { id: 3, patient: 'Linda Parker', condition: 'Severe Hyperglycemia', severity: 'critical', time: '25m ago' },
  ]

  const notifications = [
    { id: 1, text: 'New lab results available for Sarah Johnson', time: '10m ago', unread: true, type: 'lab' },
    { id: 2, text: 'Appointment reminder: Michael Chen at 2:30 PM', time: '30m ago', unread: true, type: 'appointment' },
    { id: 3, text: 'Prescription refill request from Emma Davis', time: '1h ago', unread: false, type: 'prescription' },
    { id: 4, text: 'Critical alert resolved: Patient vitals normalized', time: '2h ago', unread: false, type: 'alert' },
  ]

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
      case 'urgent': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
      case 'routine': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
    }
  }

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
        "fixed inset-y-0 left-0 w-80 bg-card border-r transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 lg:static lg:inset-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 medical-gradient rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MedFlow</span>
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

          {/* Doctor Profile */}
          <div className="p-6 border-b">
            <div className="flex items-center space-x-3 mb-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/avatars/doctor.jpg" />
                <AvatarFallback>DT</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold text-sm">Dr. Alex Thompson</p>
                <p className="text-xs text-muted-foreground">Internal Medicine</p>
                <p className="text-xs text-muted-foreground">NPI: 1234567890</p>
              </div>
              <Badge className="security-badge text-xs">
                <Shield className="w-3 h-3 mr-1" />
                Active
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center text-xs mb-4">
              <div>
                <p className="font-semibold text-lg">127</p>
                <p className="text-muted-foreground">Patients</p>
              </div>
              <div>
                <p className="font-semibold text-lg">24</p>
                <p className="text-muted-foreground">Today</p>
              </div>
              <div>
                <p className="font-semibold text-lg">3</p>
                <p className="text-muted-foreground">Alerts</p>
              </div>
            </div>

            <div className="hipaa-notice">
              <Shield className="w-4 h-4 inline mr-2" />
              HIPAA Compliant System - All access logged
            </div>
          </div>

          {/* Critical Alerts */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Critical Alerts
              </h3>
              <Badge variant="destructive" className="h-5">
                {criticalAlerts.length}
              </Badge>
            </div>
            <div className="space-y-2">
              {criticalAlerts.slice(0, 3).map((alert) => (
                <div
                  key={alert.id}
                  className="p-2 rounded-lg border-l-4 border-l-red-500 bg-red-50 dark:bg-red-900/20 cursor-pointer hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-xs">{alert.patient}</p>
                    <Badge className={getAlertColor(alert.severity)} variant="secondary">
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{alert.condition}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              ))}
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
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start mb-2"
              asChild
            >
              <Link href="/settings">
                <Settings className="w-4 h-4 mr-2" />
                Settings & Preferences
              </Link>
            </Button>
            <div className="text-xs text-muted-foreground text-center">
              Version 2.1.0 • Last updated: Jan 2024
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-80">
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
                placeholder="Search patients, MRN, conditions..."
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
                  <h3 className="font-semibold">Medical Notifications</h3>
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
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-xs text-muted-foreground">{notification.time}</p>
                            <Badge variant="outline" className="text-xs capitalize">
                              {notification.type}
                            </Badge>
                          </div>
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
                    <AvatarImage src="/avatars/doctor.jpg" />
                    <AvatarFallback>DT</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">Dr. Alex Thompson</p>
                    <p className="text-xs text-muted-foreground">Internal Medicine • NPI: 1234567890</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    Medical Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/credentials">
                    <Shield className="mr-2 h-4 w-4" />
                    Credentials & Licenses
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
                  Sign out securely
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