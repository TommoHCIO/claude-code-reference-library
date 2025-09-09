'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ShoppingCart, Heart, Star, Filter, Grid, List, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  vendor: string
  badge?: 'sale' | 'new' | 'bestseller'
  category: string
  inStock: boolean
  lowStock?: boolean
}

interface Category {
  id: string
  name: string
  count: number
  image: string
}

const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', count: 1234, image: '/placeholder/category-electronics.jpg' },
  { id: 'fashion', name: 'Fashion & Style', count: 2341, image: '/placeholder/category-fashion.jpg' },
  { id: 'home', name: 'Home & Garden', count: 987, image: '/placeholder/category-home.jpg' },
  { id: 'sports', name: 'Sports & Fitness', count: 654, image: '/placeholder/category-sports.jpg' },
  { id: 'books', name: 'Books & Media', count: 432, image: '/placeholder/category-books.jpg' },
  { id: 'automotive', name: 'Automotive', count: 321, image: '/placeholder/category-automotive.jpg' },
]

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 199.99,
    originalPrice: 299.99,
    image: '/placeholder/headphones.jpg',
    rating: 4.8,
    reviews: 1247,
    vendor: 'AudioTech Pro',
    badge: 'sale',
    category: 'electronics',
    inStock: true,
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 299.99,
    image: '/placeholder/smartwatch.jpg',
    rating: 4.6,
    reviews: 892,
    vendor: 'FitTrack Solutions',
    badge: 'new',
    category: 'electronics',
    inStock: true,
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    image: '/placeholder/tshirt.jpg',
    rating: 4.4,
    reviews: 567,
    vendor: 'EcoFashion',
    badge: 'bestseller',
    category: 'fashion',
    inStock: true,
    lowStock: true,
  },
  {
    id: '4',
    name: 'Professional Camera Lens',
    price: 899.99,
    image: '/placeholder/camera-lens.jpg',
    rating: 4.9,
    reviews: 234,
    vendor: 'PhotoGear Elite',
    category: 'electronics',
    inStock: true,
  },
  {
    id: '5',
    name: 'Ergonomic Office Chair',
    price: 399.99,
    originalPrice: 549.99,
    image: '/placeholder/office-chair.jpg',
    rating: 4.7,
    reviews: 445,
    vendor: 'WorkSpace Solutions',
    badge: 'sale',
    category: 'home',
    inStock: true,
  },
  {
    id: '6',
    name: 'Artisan Coffee Beans',
    price: 24.99,
    image: '/placeholder/coffee-beans.jpg',
    rating: 4.5,
    reviews: 789,
    vendor: 'Mountain Roasters',
    category: 'food',
    inStock: false,
  },
]

export default function MarketplaceHome() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="promotion-banner text-center py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Welcome to MarketHub
            </h1>
            <p className="text-lg opacity-90 mb-4">
              Discover amazing products from trusted vendors worldwide
            </p>
            <Badge className="promo-code">
              Use code WELCOME20 for 20% off your first order
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="search-bar mx-auto">
            <div className="relative">
              <Search className="search-icon w-5 h-5" />
              <Input
                className="search-input"
                placeholder="Search products, brands, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <Button variant="ghost">
              View All <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="category-card">
                  <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="category-name">{category.name}</h3>
                    <p className="category-count">{category.count.toLocaleString()} items</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <Card className="filter-section">
                <h3 className="filter-title">Filters</h3>
                
                {/* Price Range */}
                <div className="price-range">
                  <h4 className="font-semibold mb-3">Price Range</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    step={10}
                    className="price-input"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Categories */}
                <div>
                  <h4 className="font-semibold mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.slice(0, 4).map((category) => (
                      <div key={category.id} className="filter-option">
                        <Checkbox
                          id={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => handleCategoryToggle(category.id)}
                        />
                        <label htmlFor={category.id} className="cursor-pointer">
                          {category.name} ({category.count})
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Vendor Type */}
                <div>
                  <h4 className="font-semibold mb-3">Vendor Type</h4>
                  <div className="space-y-2">
                    <div className="filter-option">
                      <Checkbox id="verified" />
                      <label htmlFor="verified">Verified Vendors</label>
                    </div>
                    <div className="filter-option">
                      <Checkbox id="premium" />
                      <label htmlFor="premium">Premium Sellers</label>
                    </div>
                    <div className="filter-option">
                      <Checkbox id="local" />
                      <label htmlFor="local">Local Businesses</label>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Product Grid */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold">Featured Products</h2>
                  <span className="text-muted-foreground">
                    {featuredProducts.length} products
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="flex border rounded-lg">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className={viewMode === 'grid' ? 'product-grid' : 'space-y-4'}>
                {featuredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={viewMode === 'grid' ? '' : 'flex'}
                  >
                    <Card className={`product-card ${viewMode === 'list' ? 'flex-row' : ''}`}>
                      <div className="relative">
                        {product.badge && (
                          <Badge className={`product-badge ${product.badge}`}>
                            {product.badge}
                          </Badge>
                        )}
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="wishlist-btn"
                        >
                          <Heart className="w-4 h-4" />
                        </Button>

                        <div className="aspect-square relative overflow-hidden rounded-t-lg">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="product-image"
                          />
                        </div>

                        <Button
                          size="sm"
                          className="quick-view-btn"
                        >
                          Quick View
                        </Button>
                      </div>

                      <div className="p-4 flex-1">
                        <div className="mb-2">
                          <Badge variant="secondary" className="vendor-badge verified">
                            {product.vendor}
                          </Badge>
                        </div>

                        <h3 className="product-title mb-2">
                          {product.name}
                        </h3>

                        <div className="product-rating mb-3">
                          <div className="rating-stars">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-muted-foreground'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="rating-count">
                            ({product.reviews})
                          </span>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="product-price">
                              ${product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="product-price-original">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                          
                          <Badge
                            className={`stock-indicator ${
                              !product.inStock
                                ? 'out-of-stock'
                                : product.lowStock
                                ? 'low-stock'
                                : 'in-stock'
                            }`}
                          >
                            {!product.inStock
                              ? 'Out of Stock'
                              : product.lowStock
                              ? 'Low Stock'
                              : 'In Stock'}
                          </Badge>
                        </div>

                        <Button 
                          className="w-full ecommerce-button"
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          {product.inStock ? 'Add to Cart' : 'Notify Me'}
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest deals and new product announcements
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="ecommerce-button">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}