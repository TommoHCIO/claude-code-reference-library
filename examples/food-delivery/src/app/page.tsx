'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search,
  MapPin,
  Clock,
  Star,
  Heart,
  ShoppingCart,
  Plus,
  Minus,
  Filter,
  ChevronRight,
  Truck,
  Utensils,
  Coffee,
  Pizza,
  Salad,
  IceCream,
  Beef,
  Fish,
  Zap,
  Award,
  Shield,
  Timer
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'

interface Restaurant {
  id: string
  name: string
  description: string
  cuisine: string[]
  image: string
  rating: number
  reviewCount: number
  deliveryTime: string
  deliveryFee: number
  minOrder: number
  distance: number
  featured: boolean
  promoted: boolean
  freeDelivery: boolean
  isOpen: boolean
}

interface FoodItem {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isVegetarian: boolean
  isSpicy: boolean
  popular: boolean
  restaurantName: string
}

const cuisineTypes = [
  { name: 'Pizza', icon: Pizza, color: 'bg-red-500' },
  { name: 'Burgers', icon: Beef, color: 'bg-orange-500' },
  { name: 'Sushi', icon: Fish, color: 'bg-blue-500' },
  { name: 'Italian', icon: Utensils, color: 'bg-green-500' },
  { name: 'Coffee', icon: Coffee, color: 'bg-amber-600' },
  { name: 'Healthy', icon: Salad, color: 'bg-emerald-500' },
  { name: 'Desserts', icon: IceCream, color: 'bg-pink-500' },
]

const featuredRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Mario\'s Italian Kitchen',
    description: 'Authentic Italian cuisine with fresh ingredients',
    cuisine: ['Italian', 'Pizza', 'Pasta'],
    image: '/placeholder/restaurant-1.jpg',
    rating: 4.8,
    reviewCount: 1247,
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    minOrder: 15,
    distance: 1.2,
    featured: true,
    promoted: false,
    freeDelivery: false,
    isOpen: true
  },
  {
    id: '2',
    name: 'Tokyo Sushi Express',
    description: 'Fresh sushi and Japanese specialties',
    cuisine: ['Japanese', 'Sushi', 'Asian'],
    image: '/placeholder/restaurant-2.jpg',
    rating: 4.7,
    reviewCount: 892,
    deliveryTime: '30-40 min',
    deliveryFee: 0,
    minOrder: 20,
    distance: 2.1,
    featured: true,
    promoted: true,
    freeDelivery: true,
    isOpen: true
  },
  {
    id: '3',
    name: 'Burger Palace',
    description: 'Gourmet burgers and crispy fries',
    cuisine: ['American', 'Burgers', 'Fast Food'],
    image: '/placeholder/restaurant-3.jpg',
    rating: 4.6,
    reviewCount: 2156,
    deliveryTime: '15-25 min',
    deliveryFee: 1.99,
    minOrder: 12,
    distance: 0.8,
    featured: false,
    promoted: false,
    freeDelivery: false,
    isOpen: true
  },
  {
    id: '4',
    name: 'Green Garden Cafe',
    description: 'Healthy salads, smoothies, and organic meals',
    cuisine: ['Healthy', 'Vegetarian', 'Organic'],
    image: '/placeholder/restaurant-4.jpg',
    rating: 4.9,
    reviewCount: 567,
    deliveryTime: '20-30 min',
    deliveryFee: 3.49,
    minOrder: 18,
    distance: 1.5,
    featured: false,
    promoted: false,
    freeDelivery: false,
    isOpen: false
  }
]

const popularItems: FoodItem[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil',
    price: 14.99,
    image: '/placeholder/food-1.jpg',
    category: 'Pizza',
    isVegetarian: true,
    isSpicy: false,
    popular: true,
    restaurantName: 'Mario\'s Italian Kitchen'
  },
  {
    id: '2',
    name: 'Salmon Teriyaki Roll',
    description: 'Fresh salmon with teriyaki sauce and cucumber',
    price: 12.50,
    originalPrice: 15.00,
    image: '/placeholder/food-2.jpg',
    category: 'Sushi',
    isVegetarian: false,
    isSpicy: false,
    popular: true,
    restaurantName: 'Tokyo Sushi Express'
  },
  {
    id: '3',
    name: 'Classic Cheeseburger',
    description: 'Beef patty with cheese, lettuce, tomato, and special sauce',
    price: 11.99,
    image: '/placeholder/food-3.jpg',
    category: 'Burgers',
    isVegetarian: false,
    isSpicy: false,
    popular: true,
    restaurantName: 'Burger Palace'
  },
  {
    id: '4',
    name: 'Rainbow Buddha Bowl',
    description: 'Quinoa, roasted vegetables, avocado, and tahini dressing',
    price: 13.50,
    image: '/placeholder/food-4.jpg',
    category: 'Healthy',
    isVegetarian: true,
    isSpicy: false,
    popular: true,
    restaurantName: 'Green Garden Cafe'
  }
]

export default function FoodDeliveryHome() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCuisine, setSelectedCuisine] = useState('')
  const [cartItems, setCartItems] = useState<{[key: string]: number}>({})

  const addToCart = (itemId: string) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }))
  }

  const removeFromCart = (itemId: string) => {
    setCartItems(prev => {
      const newCart = { ...prev }
      if (newCart[itemId] > 1) {
        newCart[itemId]--
      } else {
        delete newCart[itemId]
      }
      return newCart
    })
  }

  const getCartItemCount = () => {
    return Object.values(cartItems).reduce((sum, count) => sum + count, 0)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="food-gradient text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Delicious Food, Delivered Fast
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Order from your favorite restaurants and get it delivered in minutes
            </p>
            
            {/* Address & Search */}
            <div className="max-w-2xl mx-auto">
              <Card className="p-4 bg-white/95 backdrop-blur">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Deliver to: 123 Main St, New York, NY</span>
                  <Button variant="outline" size="sm">Change</Button>
                </div>
                
                <div className="search-bar">
                  <div className="relative">
                    <Search className="search-icon w-5 h-5" />
                    <Input
                      className="search-input"
                      placeholder="Search for restaurants, cuisines, or dishes..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, label: '30 min', description: 'Average delivery' },
              { icon: Award, label: '1000+', description: 'Restaurant partners' },
              { icon: Shield, label: '100%', description: 'Safe delivery' },
              { icon: Zap, label: '24/7', description: 'Always available' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Cuisine Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Cuisine</h2>
          <div className="category-slider">
            {cuisineTypes.map((cuisine, index) => (
              <motion.div
                key={cuisine.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`category-item ${selectedCuisine === cuisine.name ? 'bg-accent' : ''}`}
                onClick={() => setSelectedCuisine(cuisine.name === selectedCuisine ? '' : cuisine.name)}
              >
                <div className={`category-icon ${cuisine.color} text-white`}>
                  <cuisine.icon className="w-6 h-6" />
                </div>
                <span className="category-name">{cuisine.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="promotional-banner"
          >
            <div className="promo-background">
              <Utensils className="w-32 h-32 absolute -top-8 -right-8 opacity-20" />
            </div>
            <h3 className="promo-title">Free Delivery Weekend!</h3>
            <p className="promo-description">
              Get free delivery on all orders above $25 this weekend
            </p>
            <div className="promo-code">FREEDELIVERY</div>
          </motion.div>
        </section>

        <Tabs defaultValue="restaurants" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-fit mb-8">
            <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
            <TabsTrigger value="popular">Popular Items</TabsTrigger>
            <TabsTrigger value="deals">Deals</TabsTrigger>
          </TabsList>

          <TabsContent value="restaurants" className="space-y-8">
            {/* Featured Restaurants */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Featured Restaurants</h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                  <Button variant="ghost">
                    View All <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
              
              <div className="restaurant-grid">
                {featuredRestaurants.map((restaurant, index) => (
                  <motion.div
                    key={restaurant.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="restaurant-card">
                      <div className="relative">
                        {restaurant.featured && (
                          <Badge className="restaurant-badge featured">Featured</Badge>
                        )}
                        {restaurant.promoted && (
                          <Badge className="restaurant-badge promoted">Promoted</Badge>
                        )}
                        {restaurant.freeDelivery && (
                          <Badge className="restaurant-badge free-delivery">Free Delivery</Badge>
                        )}
                        
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={restaurant.image}
                            alt={restaurant.name}
                            width={400}
                            height={300}
                            className="restaurant-image"
                          />
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="restaurant-info mb-3">
                          <h3 className="restaurant-name">{restaurant.name}</h3>
                          <p className="restaurant-description">{restaurant.description}</p>
                        </div>

                        <div className="restaurant-stats mb-3">
                          <div className="restaurant-rating">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{restaurant.rating}</span>
                            <span className="rating-count">({restaurant.reviewCount})</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{restaurant.deliveryTime}</span>
                          </div>
                          
                          <div className="distance-badge">
                            {restaurant.distance} km
                          </div>
                        </div>

                        <div className="delivery-info">
                          <div>
                            <div className="text-sm text-muted-foreground">Delivery fee</div>
                            <div className="font-semibold">
                              {restaurant.freeDelivery ? 'FREE' : `$${restaurant.deliveryFee}`}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Minimum</div>
                            <div className="font-semibold">${restaurant.minOrder}</div>
                          </div>
                          <div className={`restaurant-hours ${restaurant.isOpen ? 'open' : 'closed'}`}>
                            {restaurant.isOpen ? 'Open' : 'Closed'}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mt-3">
                          {restaurant.cuisine.slice(0, 3).map((cuisine) => (
                            <Badge key={cuisine} variant="secondary" className="text-xs">
                              {cuisine}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="popular" className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-6">Popular Items</h2>
              <div className="food-item-grid">
                {popularItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="food-item-card">
                      <div className="relative">
                        {item.popular && (
                          <Badge className="restaurant-badge featured">Popular</Badge>
                        )}
                        
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={250}
                            height={250}
                            className="food-item-image"
                          />
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="food-item-title mb-2">{item.name}</h3>
                        <p className="food-item-description mb-3">{item.description}</p>
                        
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <span className="food-item-price">${item.price}</span>
                            {item.originalPrice && (
                              <span className="food-item-original-price">${item.originalPrice}</span>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            {item.isVegetarian && (
                              <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                                Vegetarian
                              </Badge>
                            )}
                            {item.isSpicy && (
                              <Badge variant="secondary" className="text-xs bg-red-100 text-red-800">
                                Spicy
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="text-sm text-muted-foreground mb-4">
                          from {item.restaurantName}
                        </div>

                        <div className="flex items-center justify-between">
                          {cartItems[item.id] ? (
                            <div className="cart-item-quantity">
                              <Button
                                size="sm"
                                variant="outline"
                                className="quantity-btn"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">
                                {cartItems[item.id]}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                className="quantity-btn"
                                onClick={() => addToCart(item.id)}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                          ) : (
                            <Button
                              size="sm"
                              onClick={() => addToCart(item.id)}
                              className="food-button animate-cart-add"
                            >
                              <Plus className="w-4 h-4 mr-2" />
                              Add to Cart
                            </Button>
                          )}
                          
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="deals" className="space-y-8">
            <section>
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Special Deals Coming Soon!</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We're working on bringing you amazing deals and discounts from your favorite restaurants. 
                  Check back soon for exclusive offers!
                </p>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating Cart Button */}
      {getCartItemCount() > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <Button className="rounded-full w-16 h-16 shadow-lg food-gradient text-white relative">
            <ShoppingCart className="w-6 h-6" />
            <Badge className="absolute -top-2 -right-2 w-6 h-6 p-0 flex items-center justify-center text-xs">
              {getCartItemCount()}
            </Badge>
          </Button>
        </motion.div>
      )}
    </div>
  )
}