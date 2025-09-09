'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Search, 
  Heart, 
  MessageCircle, 
  User, 
  Bell, 
  Settings,
  TrendingUp,
  Users,
  Bookmark,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface SocialLayoutProps {
  children: React.ReactNode
}

export default function SocialLayout({ children }: SocialLayoutProps) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Explore', href: '/explore', icon: Search },
    { name: 'Notifications', href: '/notifications', icon: Bell, badge: 3 },
    { name: 'Messages', href: '/messages', icon: MessageCircle, badge: 2 },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ]

  const quickActions = [
    { name: 'Trending', href: '/trending', icon: TrendingUp },
    { name: 'Communities', href: '/communities', icon: Users },
    { name: 'Saved Posts', href: '/saved', icon: Bookmark },
  ]

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 w-64 bg-card border-r transform transition-transform duration-300 ease-in-out z-50 lg:relative lg:translate-x-0",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SocialSpace
            </h1>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* User Profile Summary */}
          <div className="p-6 border-b">
            <div className="flex items-center space-x-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/avatars/you.jpg" />
                <AvatarFallback>You</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold text-sm">Alex Thompson</p>
                <p className="text-xs text-muted-foreground">@alexthompson</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 text-sm">
              <div className="text-center">
                <p className="font-semibold">1.2K</p>
                <p className="text-muted-foreground text-xs">Following</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">5.4K</p>
                <p className="text-muted-foreground text-xs">Followers</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">342</p>
                <p className="text-muted-foreground text-xs">Posts</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors relative",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <Badge variant="secondary" className="ml-auto">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              )
            })}

            <Separator className="my-4" />

            <div className="space-y-1">
              <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
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
            <p className="text-xs text-muted-foreground text-center">
              © 2024 SocialSpace. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b bg-card">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            SocialSpace
          </h1>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>

      {/* Right Sidebar - Trending & Suggestions */}
      <div className="hidden xl:block w-80 border-l bg-card/50">
        <div className="sticky top-0 h-screen overflow-y-auto p-6 space-y-6">
          {/* Trending Topics */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Trending Now</h2>
            <div className="space-y-3">
              {[
                { tag: '#ReactJS', posts: '125K posts' },
                { tag: '#WebDev', posts: '89K posts' },
                { tag: '#TypeScript', posts: '67K posts' },
                { tag: '#UIDesign', posts: '45K posts' },
                { tag: '#OpenSource', posts: '32K posts' }
              ].map((trend, index) => (
                <div key={index} className="p-3 rounded-lg hover:bg-accent transition-colors cursor-pointer">
                  <p className="font-medium text-sm">{trend.tag}</p>
                  <p className="text-xs text-muted-foreground">{trend.posts}</p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Suggested People */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">People to Follow</h2>
            <div className="space-y-4">
              {[
                { name: 'Sarah Johnson', username: 'sarahj', avatar: '/avatars/sarah.jpg', mutual: '12 mutual connections' },
                { name: 'Mike Chen', username: 'mikec', avatar: '/avatars/mike.jpg', mutual: '8 mutual connections' },
                { name: 'Emma Davis', username: 'emmad', avatar: '/avatars/emma.jpg', mutual: '15 mutual connections' }
              ].map((person, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={person.avatar} />
                      <AvatarFallback>{person.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{person.name}</p>
                      <p className="text-xs text-muted-foreground">@{person.username}</p>
                      <p className="text-xs text-muted-foreground">{person.mutual}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Follow
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}