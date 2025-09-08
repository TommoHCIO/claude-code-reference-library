"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ProductGrid } from '@/components/product/product-grid'
import { CategoryGrid } from '@/components/category/category-grid'
import { FeaturedBanner } from '@/components/marketing/featured-banner'
import { NewsletterSignup } from '@/components/marketing/newsletter-signup'
import { ShoppingBag, Star, Truck, Shield, HeadphonesIcon } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Welcome to ShopCraft
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              Discover amazing products with our modern e-commerce experience. 
              Quality guaranteed, fast shipping, and unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px] border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="container mx-auto px-4">
        <FeaturedBanner />
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of products across different categories
          </p>
        </div>
        <CategoryGrid />
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="text-muted-foreground mt-2">
              Handpicked items just for you
            </p>
          </div>
          <Button variant="outline">View All</Button>
        </div>
        <ProductGrid limit={8} />
      </section>

      {/* Features */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose ShopCraft?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best shopping experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Free Shipping</CardTitle>
                <CardDescription>
                  Free delivery on orders over $50. Fast and reliable shipping worldwide.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Secure Payments</CardTitle>
                <CardDescription>
                  Your payment information is always secure with our encrypted checkout.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <HeadphonesIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>
                  Get help whenever you need it with our round-the-clock customer service.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription>
                  "Amazing quality and fast shipping. The products exceeded my expectations 
                  and the customer service was exceptional."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">JS</span>
                  </div>
                  <div>
                    <p className="font-medium">John Smith</p>
                    <p className="text-sm text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  )
}