'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  MapPin,
  Home,
  Building,
  User,
  Heart,
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Calendar,
  Calculator,
  TrendingUp,
  Shield,
  Award,
  Users,
  Bell,
  Settings,
  LogOut,
  BookOpen,
  DollarSign,
  FileText
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from '@/components/ui/theme-toggle'

interface RealEstateLayoutProps {
  children: React.ReactNode
}

export default function RealEstateLayout({ children }: RealEstateLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [savedPropertiesCount] = useState(8)
  const [notificationsCount] = useState(3)

  const navigationItems = [
    { name: 'Buy', href: '/buy', icon: Home },
    { name: 'Rent', href: '/rent', icon: Building },
    { name: 'Sell', href: '/sell', icon: DollarSign },
    { name: 'Agents', href: '/agents', icon: Users },
    { name: 'Market', href: '/market', icon: TrendingUp },
  ]

  const toolsItems = [
    { name: 'Mortgage Calculator', href: '/tools/mortgage-calculator', icon: Calculator },
    { name: 'Property Valuation', href: '/tools/valuation', icon: DollarSign },
    { name: 'Market Reports', href: '/tools/reports', icon: FileText },
    { name: 'Investment Calculator', href: '/tools/investment', icon: TrendingUp },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-primary/5 border-b text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>info@propertyhub.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4 text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="/careers" className="hover:text-foreground transition-colors">
                Careers
              </Link>
              <Link href="/blog" className="hover:text-foreground transition-colors">
                <BookOpen className="w-4 h-4 inline mr-1" />
                Blog
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 realestate-gradient rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold">PropertyHub</div>
                <div className="text-xs text-muted-foreground">Real Estate Platform</div>
              </div>
            </Link>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 text-sm font-medium">
                    <Calculator className="w-4 h-4" />
                    Tools
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56">
                  <DropdownMenuLabel>Property Tools</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {toolsItems.map((tool) => (
                    <DropdownMenuItem key={tool.name} asChild>
                      <Link href={tool.href} className="flex items-center">
                        <tool.icon className="w-4 h-4 mr-2" />
                        {tool.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="search-bar w-full">
                <div className="relative">
                  <Search className="search-icon w-5 h-5" />
                  <Input
                    className="search-input pl-12"
                    placeholder="Search by location, MLS#, or property type..."
                  />
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                {notificationsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs">
                    {notificationsCount}
                  </Badge>
                )}
              </Button>

              {/* Saved Properties */}
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="w-5 h-5" />
                {savedPropertiesCount > 0 && (
                  <Badge variant="secondary" className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs">
                    {savedPropertiesCount}
                  </Badge>
                )}
                <span className="hidden md:inline ml-2">Saved</span>
              </Button>

              {/* User Account */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder/user-avatar.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start text-xs">
                      <span className="font-semibold">John Doe</span>
                      <span className="text-muted-foreground">Property Investor</span>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    Profile Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Heart className="w-4 h-4 mr-2" />
                    Saved Properties
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Search className="w-4 h-4 mr-2" />
                    Saved Searches
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Calendar className="w-4 h-4 mr-2" />
                    My Appointments
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed left-0 top-0 h-full w-80 bg-background z-50 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 realestate-gradient rounded-lg flex items-center justify-center">
                    <Home className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">PropertyHub</div>
                    <div className="text-xs text-muted-foreground">Real Estate Platform</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-4">
                {/* Mobile Search */}
                <div className="search-bar mb-6">
                  <div className="relative">
                    <Search className="search-icon w-5 h-5" />
                    <Input
                      className="search-input pl-12"
                      placeholder="Search properties..."
                    />
                  </div>
                </div>

                {/* Main Navigation */}
                <nav className="space-y-2 mb-6">
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                    Navigate
                  </h3>
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </nav>

                <Separator className="my-6" />

                {/* Tools */}
                <nav className="space-y-2 mb-6">
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                    Tools
                  </h3>
                  {toolsItems.map((tool) => (
                    <Link
                      key={tool.name}
                      href={tool.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <tool.icon className="w-5 h-5" />
                      <span>{tool.name}</span>
                    </Link>
                  ))}
                </nav>

                <Separator className="my-6" />

                {/* Account Actions */}
                <nav className="space-y-2">
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                    Account
                  </h3>
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User className="w-5 h-5" />
                    <span>My Profile</span>
                  </Link>
                  <Link
                    href="/saved"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Heart className="w-5 h-5" />
                    <span>Saved Properties</span>
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 realestate-gradient rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">PropertyHub</div>
                  <div className="text-sm text-muted-foreground">Real Estate Platform</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Your trusted partner in finding the perfect property. We connect buyers, sellers, 
                renters, and agents with comprehensive real estate solutions.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>Award Winning</span>
                </div>
              </div>
            </div>

            {/* For Buyers */}
            <div>
              <h3 className="font-semibold mb-4">For Buyers</h3>
              <nav className="space-y-2 text-sm">
                <Link href="/buy" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Find Homes
                </Link>
                <Link href="/foreclosures" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Foreclosures
                </Link>
                <Link href="/new-homes" className="block text-muted-foreground hover:text-foreground transition-colors">
                  New Homes
                </Link>
                <Link href="/open-houses" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Open Houses
                </Link>
                <Link href="/buyer-guide" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Buyer's Guide
                </Link>
              </nav>
            </div>

            {/* For Sellers */}
            <div>
              <h3 className="font-semibold mb-4">For Sellers</h3>
              <nav className="space-y-2 text-sm">
                <Link href="/sell" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Sell Your Home
                </Link>
                <Link href="/valuation" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Home Valuation
                </Link>
                <Link href="/market-reports" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Market Reports
                </Link>
                <Link href="/staging" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Home Staging
                </Link>
                <Link href="/seller-guide" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Seller's Guide
                </Link>
              </nav>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <nav className="space-y-2 text-sm">
                <Link href="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
                <Link href="/agents" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Our Agents
                </Link>
                <Link href="/careers" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
                <Link href="/press" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Press
                </Link>
                <Link href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-4">
              <span>© 2024 PropertyHub. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/fair-housing" className="hover:text-foreground transition-colors">
                Fair Housing
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span>Connect with us:</span>
              <div className="flex gap-2">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <Button key={social} variant="ghost" size="sm" className="w-8 h-8 p-0">
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-current rounded" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}