'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Home,
  MapPin,
  ShoppingCart,
  User,
  Heart,
  Clock,
  Menu,
  X,
  Bell,
  Settings,
  LogOut,
  Package,
  CreditCard,
  HelpCircle,
  ChevronDown,
  Truck,
  Phone,
  Mail,
  Star,
  Gift,
  Percent,
  Users,
  Utensils
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

interface FoodDeliveryLayoutProps {
  children: React.ReactNode
}

export default function FoodDeliveryLayout({ children }: FoodDeliveryLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItemCount] = useState(3)
  const [notificationsCount] = useState(2)

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Restaurants', href: '/restaurants', icon: Utensils },
    { name: 'Offers', href: '/offers', icon: Percent },
    { name: 'Orders', href: '/orders', icon: Package },
  ]

  const cartItems = [
    {
      id: '1',
      name: 'Margherita Pizza',
      restaurant: 'Mario\'s Italian Kitchen',
      price: 14.99,
      quantity: 1,
      image: '/placeholder/food-1.jpg'
    },
    {
      id: '2',
      name: 'Classic Cheeseburger',
      restaurant: 'Burger Palace',
      price: 11.99,
      quantity: 2,
      image: '/placeholder/food-3.jpg'
    },
    {
      id: '3',
      name: 'Rainbow Buddha Bowl',
      restaurant: 'Green Garden Cafe',
      price: 13.50,
      quantity: 1,
      image: '/placeholder/food-4.jpg'
    }
  ]

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const deliveryFee = 2.99
  const serviceFee = 1.50

  return (
    <div className="min-h-screen bg-background">
      {/* Top Promotion Bar */}
      <div className="food-gradient text-white text-center py-2 text-sm">
        <div className="container mx-auto px-4">
          <span className="flex items-center justify-center gap-2">
            <Gift className="w-4 h-4" />
            Free delivery on orders over $25 | Use code: FREEDELIVERY
            <Badge variant="secondary" className="ml-2">Today Only</Badge>
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>

              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 food-gradient rounded-lg flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold">QuickBite</div>
                  <div className="text-xs text-muted-foreground">Food Delivery</div>
                </div>
              </Link>
            </div>

            {/* Center - Location & Search */}
            <div className="flex items-center gap-4 flex-1 max-w-2xl mx-4">
              {/* Location */}
              <Button variant="ghost" className="hidden md:flex items-center gap-2 text-left">
                <MapPin className="w-4 h-4 text-primary" />
                <div className="text-sm">
                  <div className="font-medium">Home</div>
                  <div className="text-muted-foreground text-xs">123 Main St</div>
                </div>
                <ChevronDown className="w-4 h-4" />
              </Button>

              {/* Search Bar */}
              <div className="search-bar flex-1">
                <div className="relative">
                  <Search className="search-icon w-5 h-5" />
                  <Input
                    className="search-input"
                    placeholder="Search for restaurants, cuisines, or dishes..."
                  />
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              {/* Navigation - Desktop */}
              <nav className="hidden lg:flex items-center gap-6 mr-4">
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
              </nav>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                {notificationsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs">
                    {notificationsCount}
                  </Badge>
                )}
              </Button>

              {/* Cart */}
              <Button
                variant="ghost"
                size="sm"
                className="relative"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs animate-food-bounce">
                    {cartItemCount}
                  </Badge>
                )}
                <span className="hidden md:inline ml-2">Cart</span>
              </Button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder/user-avatar.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start text-xs">
                      <span className="font-semibold">John Doe</span>
                      <span className="text-muted-foreground">Premium Member</span>
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
                    <Heart className="w-4 h-4 mr-2" />
                    Favorite Restaurants
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="w-4 h-4 mr-2" />
                    Payment Methods
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Help & Support
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <ThemeToggle />
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
              className="fixed left-0 top-0 h-full w-80 bg-card z-50 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 food-gradient rounded-lg flex items-center justify-center">
                    <Utensils className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">QuickBite</div>
                    <div className="text-sm text-muted-foreground">Food Delivery</div>
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
                {/* Location */}
                <Button variant="ghost" className="w-full justify-start mb-4">
                  <MapPin className="w-4 h-4 text-primary mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Deliver to Home</div>
                    <div className="text-muted-foreground text-xs">123 Main St, New York</div>
                  </div>
                </Button>

                <Separator className="my-4" />

                {/* Navigation */}
                <nav className="space-y-2">
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

                <Separator className="my-4" />

                {/* Quick Links */}
                <nav className="space-y-2">
                  <Link
                    href="/favorites"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Heart className="w-5 h-5" />
                    <span>Favorite Restaurants</span>
                  </Link>
                  <Link
                    href="/history"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Clock className="w-5 h-5" />
                    <span>Order History</span>
                  </Link>
                  <Link
                    href="/help"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <HelpCircle className="w-5 h-5" />
                    <span>Help & Support</span>
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
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
                  <span className="font-semibold">Your Cart ({cartItemCount})</span>
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
                {cartItems.length > 0 ? (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="cart-item">
                        <div className="cart-item-image relative">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        
                        <div className="cart-item-details">
                          <h4 className="cart-item-title">{item.name}</h4>
                          <p className="cart-item-restaurant">{item.restaurant}</p>
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
                ) : (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                    <p className="text-muted-foreground mb-4">
                      Add some delicious items from restaurants to get started
                    </p>
                    <Button onClick={() => setCartOpen(false)}>
                      Browse Restaurants
                    </Button>
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="border-t p-4">
                  <div className="order-summary">
                    <div className="order-summary-row">
                      <span>Subtotal:</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="order-summary-row">
                      <span>Delivery fee:</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="order-summary-row">
                      <span>Service fee:</span>
                      <span>${serviceFee.toFixed(2)}</span>
                    </div>
                    <div className="order-total">
                      <span>Total:</span>
                      <span>${(cartTotal + deliveryFee + serviceFee).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <Button className="w-full food-button bg-primary hover:bg-primary/90">
                      Proceed to Checkout
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => setCartOpen(false)}>
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              )}
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
                <div className="w-10 h-10 food-gradient rounded-lg flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">QuickBite</div>
                  <div className="text-sm text-muted-foreground">Food Delivery Platform</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Your favorite restaurants delivered fast. Order from local restaurants and 
                get fresh, hot meals delivered to your doorstep in minutes.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Truck className="w-4 h-4" />
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span>Top Rated</span>
                </div>
              </div>
            </div>

            {/* For Customers */}
            <div>
              <h3 className="font-semibold mb-4">For Customers</h3>
              <nav className="space-y-2 text-sm">
                <Link href="/restaurants" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Browse Restaurants
                </Link>
                <Link href="/cuisines" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Cuisines
                </Link>
                <Link href="/offers" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Deals & Offers
                </Link>
                <Link href="/track" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Track Your Order
                </Link>
                <Link href="/mobile-app" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Download App
                </Link>
              </nav>
            </div>

            {/* For Restaurants */}
            <div>
              <h3 className="font-semibold mb-4">For Restaurants</h3>
              <nav className="space-y-2 text-sm">
                <Link href="/partner" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Partner with Us
                </Link>
                <Link href="/restaurant-app" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Restaurant App
                </Link>
                <Link href="/marketing" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Marketing Solutions
                </Link>
                <Link href="/analytics" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Analytics
                </Link>
                <Link href="/support-business" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Business Support
                </Link>
              </nav>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <nav className="space-y-2 text-sm">
                <Link href="/help" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
                <Link href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
                <Link href="/safety" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Food Safety
                </Link>
                <Link href="/refunds" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Refunds & Returns
                </Link>
                <Link href="/careers" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </nav>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-4">
              <span>© 2024 QuickBite. All rights reserved.</span>
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