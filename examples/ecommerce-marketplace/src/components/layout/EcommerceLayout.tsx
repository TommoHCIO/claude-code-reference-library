'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Truck,
  Shield,
  Star,
  Bell,
  Settings,
  LogOut,
  Package,
  CreditCard,
  Zap,
  Headphones,
  Gift
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

interface EcommerceLayoutProps {
  children: React.ReactNode
}

export default function EcommerceLayout({ children }: EcommerceLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItemCount] = useState(3)
  const [wishlistCount] = useState(12)

  const categories = [
    { name: 'Electronics', href: '/category/electronics', count: 1234 },
    { name: 'Fashion', href: '/category/fashion', count: 2341 },
    { name: 'Home & Garden', href: '/category/home', count: 987 },
    { name: 'Sports', href: '/category/sports', count: 654 },
    { name: 'Beauty', href: '/category/beauty', count: 432 },
    { name: 'Books', href: '/category/books', count: 321 },
  ]

  const cartItems = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 199.99,
      quantity: 1,
      image: '/placeholder/headphones-sm.jpg',
      vendor: 'AudioTech Pro'
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      price: 299.99,
      quantity: 1,
      image: '/placeholder/smartwatch-sm.jpg',
      vendor: 'FitTrack Solutions'
    },
    {
      id: '3',
      name: 'Organic Cotton T-Shirt',
      price: 29.99,
      quantity: 2,
      image: '/placeholder/tshirt-sm.jpg',
      vendor: 'EcoFashion'
    },
  ]

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

  return (
    <div className="min-h-screen bg-background">
      {/* Top Announcement Bar */}
      <div className="promotion-banner text-center py-2 text-sm">
        <div className="container mx-auto px-4">
          <span className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4" />
            Flash Sale: Up to 70% off electronics | Free shipping on orders $50+
            <Badge variant="secondary" className="ml-2">Limited Time</Badge>
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          {/* Top Header Row */}
          <div className="flex items-center justify-between py-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Deliver to New York 10001</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-1">
                <Truck className="w-4 h-4" />
                <span>Free 2-day shipping</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/help" className="hover:text-foreground transition-colors">
                <Headphones className="w-4 h-4 inline mr-1" />
                Customer Service
              </Link>
              <Link href="/sell" className="hover:text-foreground transition-colors">
                Sell on MarketHub
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 ecommerce-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold hidden sm:block">MarketHub</span>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="search-bar w-full">
                <div className="relative">
                  <Search className="search-icon w-5 h-5" />
                  <Input
                    className="search-input"
                    placeholder="Search products, brands, or categories..."
                  />
                  <Button size="sm" className="absolute right-2 top-1/2 -translate-y-1/2">
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* User Account */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="/placeholder/user-avatar.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start text-xs">
                      <span className="text-muted-foreground">Hello, John</span>
                      <span className="font-semibold">Account & Lists</span>
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
                    <Package className="w-4 h-4 mr-2" />
                    My Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="w-4 h-4 mr-2" />
                    Payment Methods
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell className="w-4 h-4 mr-2" />
                    Notifications
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

              {/* Wishlist */}
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs">
                    {wishlistCount}
                  </Badge>
                )}
                <span className="hidden md:inline ml-2">Wishlist</span>
              </Button>

              {/* Shopping Cart */}
              <Button
                variant="ghost"
                size="sm"
                className="relative"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs animate-cart-bounce">
                    {cartItemCount}
                  </Badge>
                )}
                <span className="hidden md:inline ml-2">Cart</span>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Categories Navigation */}
          <div className="hidden md:flex items-center gap-6 py-3 border-t">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Menu className="w-4 h-4" />
                  All Categories
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild>
                    <Link href={category.href} className="flex items-center justify-between">
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <nav className="flex items-center gap-6">
              <Link href="/deals" className="text-sm hover:text-primary transition-colors flex items-center gap-1">
                <Gift className="w-4 h-4" />
                Today's Deals
              </Link>
              <Link href="/new-arrivals" className="text-sm hover:text-primary transition-colors">
                New Arrivals
              </Link>
              <Link href="/best-sellers" className="text-sm hover:text-primary transition-colors flex items-center gap-1">
                <Star className="w-4 h-4" />
                Best Sellers
              </Link>
              <Link href="/gift-cards" className="text-sm hover:text-primary transition-colors">
                Gift Cards
              </Link>
            </nav>
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
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed left-0 top-0 h-full w-80 bg-background z-50 shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 ecommerce-gradient rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <span className="text-xl font-bold">MarketHub</span>
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
                <div className="search-bar mb-6">
                  <div className="relative">
                    <Search className="search-icon w-5 h-5" />
                    <Input
                      className="search-input"
                      placeholder="Search products..."
                    />
                  </div>
                </div>

                <nav className="space-y-2">
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                    Categories
                  </h3>
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-accent transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </Link>
                  ))}
                </nav>

                <Separator className="my-6" />

                <nav className="space-y-2">
                  <Link
                    href="/deals"
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Gift className="w-4 h-4" />
                    Today's Deals
                  </Link>
                  <Link
                    href="/best-sellers"
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Star className="w-4 h-4" />
                    Best Sellers
                  </Link>
                  <Link
                    href="/help"
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Headphones className="w-4 h-4" />
                    Customer Service
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Shopping Cart Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setCartOpen(false)}
            />
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              className="cart-sidebar open"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="font-semibold">Shopping Cart ({cartItemCount})</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCartOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-image relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="cart-item-details">
                        <h4 className="cart-item-title">{item.name}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{item.vendor}</p>
                        <p className="cart-item-price">${item.price}</p>
                        
                        <div className="cart-item-quantity mt-2">
                          <Button size="sm" variant="outline" className="quantity-btn">
                            -
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button size="sm" variant="outline" className="quantity-btn">
                            +
                          </Button>
                        </div>
                      </div>

                      <Button variant="ghost" size="sm" className="text-destructive">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t p-4">
                <div className="order-summary">
                  <div className="order-summary-row">
                    <span>Subtotal:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="order-summary-row">
                    <span>Shipping:</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="order-total">
                    <span>Total:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mt-4">
                  <Button className="w-full ecommerce-button animate-slide-in-cart">
                    Proceed to Checkout
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => setCartOpen(false)}>
                    Continue Shopping
                  </Button>
                </div>
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
                <div className="w-8 h-8 ecommerce-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-bold">MarketHub</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Your trusted multi-vendor marketplace for quality products from verified sellers worldwide. 
                Shop with confidence and discover amazing deals every day.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Secure Shopping</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="w-4 h-4" />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="font-semibold mb-4">Customer Service</h3>
              <nav className="space-y-2 text-sm">
                <Link href="/help" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
                <Link href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
                <Link href="/returns" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Returns & Refunds
                </Link>
                <Link href="/shipping" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Shipping Info
                </Link>
                <Link href="/track-order" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Track Your Order
                </Link>
              </nav>
            </div>

            {/* About */}
            <div>
              <h3 className="font-semibold mb-4">About MarketHub</h3>
              <nav className="space-y-2 text-sm">
                <Link href="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
                <Link href="/careers" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
                <Link href="/press" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Press Center
                </Link>
                <Link href="/investors" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Investor Relations
                </Link>
                <Link href="/sustainability" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Sustainability
                </Link>
              </nav>
            </div>

            {/* Sell With Us */}
            <div>
              <h3 className="font-semibold mb-4">Sell With Us</h3>
              <nav className="space-y-2 text-sm">
                <Link href="/sell" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Start Selling
                </Link>
                <Link href="/seller-guide" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Seller Guide
                </Link>
                <Link href="/seller-support" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Seller Support
                </Link>
                <Link href="/advertising" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Advertising
                </Link>
                <Link href="/seller-university" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Seller University
                </Link>
              </nav>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-4">
              <span>© 2024 MarketHub. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span>Follow us:</span>
              <div className="flex gap-2">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
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