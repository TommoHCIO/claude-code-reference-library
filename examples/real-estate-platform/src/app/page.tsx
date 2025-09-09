'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart, 
  Filter,
  Grid,
  Map,
  Star,
  DollarSign,
  TrendingUp,
  Building,
  Home,
  ChevronRight,
  Phone,
  Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Image from 'next/image'

interface Property {
  id: string
  title: string
  address: string
  city: string
  state: string
  zipCode: string
  price: number
  priceType: 'sale' | 'rent'
  bedrooms: number
  bathrooms: number
  squareFeet: number
  propertyType: 'house' | 'condo' | 'apartment' | 'commercial'
  status: 'for-sale' | 'for-rent' | 'sold' | 'pending'
  image: string
  images: string[]
  featured: boolean
  agent: {
    id: string
    name: string
    image: string
    phone: string
    email: string
    rating: number
    reviews: number
  }
  features: string[]
  description: string
  yearBuilt: number
  lotSize?: number
  parking?: number
  daysOnMarket: number
  coordinates: [number, number]
}

interface Agent {
  id: string
  name: string
  title: string
  image: string
  rating: number
  reviews: number
  phone: string
  email: string
  specialties: string[]
  propertiesSold: number
  experience: number
}

const featuredProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Condo',
    address: '123 Main Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    price: 850000,
    priceType: 'sale',
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    propertyType: 'condo',
    status: 'for-sale',
    image: '/placeholder/property-1.jpg',
    images: ['/placeholder/property-1.jpg', '/placeholder/property-1-2.jpg'],
    featured: true,
    agent: {
      id: '1',
      name: 'Sarah Johnson',
      image: '/placeholder/agent-1.jpg',
      phone: '(555) 123-4567',
      email: 'sarah@propertyhub.com',
      rating: 4.9,
      reviews: 127
    },
    features: ['Granite Counters', 'Hardwood Floors', 'City View', 'Parking'],
    description: 'Beautiful modern condo in the heart of downtown with stunning city views.',
    yearBuilt: 2020,
    parking: 1,
    daysOnMarket: 12,
    coordinates: [-122.4194, 37.7749]
  },
  {
    id: '2',
    title: 'Family Home with Garden',
    address: '456 Oak Avenue',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94110',
    price: 1250000,
    priceType: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2400,
    propertyType: 'house',
    status: 'for-sale',
    image: '/placeholder/property-2.jpg',
    images: ['/placeholder/property-2.jpg', '/placeholder/property-2-2.jpg'],
    featured: false,
    agent: {
      id: '2',
      name: 'Michael Chen',
      image: '/placeholder/agent-2.jpg',
      phone: '(555) 234-5678',
      email: 'michael@propertyhub.com',
      rating: 4.8,
      reviews: 89
    },
    features: ['Garden', 'Garage', 'Updated Kitchen', 'Fireplace'],
    description: 'Charming family home with private garden and modern amenities.',
    yearBuilt: 1995,
    lotSize: 6000,
    parking: 2,
    daysOnMarket: 8,
    coordinates: [-122.4044, 37.7505]
  },
  {
    id: '3',
    title: 'Luxury High-Rise Apartment',
    address: '789 Market Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94103',
    price: 4500,
    priceType: 'rent',
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 800,
    propertyType: 'apartment',
    status: 'for-rent',
    image: '/placeholder/property-3.jpg',
    images: ['/placeholder/property-3.jpg', '/placeholder/property-3-2.jpg'],
    featured: true,
    agent: {
      id: '3',
      name: 'Emily Rodriguez',
      image: '/placeholder/agent-3.jpg',
      phone: '(555) 345-6789',
      email: 'emily@propertyhub.com',
      rating: 4.9,
      reviews: 156
    },
    features: ['Gym', 'Pool', 'Concierge', 'Bay View'],
    description: 'Luxury apartment with premium amenities and breathtaking bay views.',
    yearBuilt: 2022,
    parking: 1,
    daysOnMarket: 5,
    coordinates: [-122.4089, 37.7851]
  },
  {
    id: '4',
    title: 'Commercial Office Space',
    address: '321 Business Blvd',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94107',
    price: 12000,
    priceType: 'rent',
    bedrooms: 0,
    bathrooms: 2,
    squareFeet: 3500,
    propertyType: 'commercial',
    status: 'for-rent',
    image: '/placeholder/property-4.jpg',
    images: ['/placeholder/property-4.jpg', '/placeholder/property-4-2.jpg'],
    featured: false,
    agent: {
      id: '4',
      name: 'David Thompson',
      image: '/placeholder/agent-4.jpg',
      phone: '(555) 456-7890',
      email: 'david@propertyhub.com',
      rating: 4.7,
      reviews: 98
    },
    features: ['Conference Room', 'Reception Area', 'Parking', 'High Ceilings'],
    description: 'Prime commercial space perfect for growing businesses.',
    yearBuilt: 2018,
    parking: 15,
    daysOnMarket: 20,
    coordinates: [-122.3937, 37.7749]
  }
]

const topAgents: Agent[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Senior Real Estate Agent',
    image: '/placeholder/agent-1.jpg',
    rating: 4.9,
    reviews: 127,
    phone: '(555) 123-4567',
    email: 'sarah@propertyhub.com',
    specialties: ['Condos', 'First-time Buyers'],
    propertiesSold: 89,
    experience: 8
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'Property Investment Specialist',
    image: '/placeholder/agent-2.jpg',
    rating: 4.8,
    reviews: 89,
    phone: '(555) 234-5678',
    email: 'michael@propertyhub.com',
    specialties: ['Investment Properties', 'Commercial'],
    propertiesSold: 156,
    experience: 12
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    title: 'Luxury Home Specialist',
    image: '/placeholder/agent-3.jpg',
    rating: 4.9,
    reviews: 156,
    phone: '(555) 345-6789',
    email: 'emily@propertyhub.com',
    specialties: ['Luxury Homes', 'Waterfront Properties'],
    propertiesSold: 134,
    experience: 10
  },
  {
    id: '4',
    name: 'David Thompson',
    title: 'Commercial Real Estate Agent',
    image: '/placeholder/agent-4.jpg',
    rating: 4.7,
    reviews: 98,
    phone: '(555) 456-7890',
    email: 'david@propertyhub.com',
    specialties: ['Office Space', 'Retail Properties'],
    propertiesSold: 67,
    experience: 6
  }
]

export default function RealEstateHome() {
  const [activeTab, setActiveTab] = useState('buy')
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid')
  const [priceRange, setPriceRange] = useState([0, 2000000])
  const [searchLocation, setSearchLocation] = useState('')
  const [propertyType, setPropertyType] = useState('all')
  const [bedrooms, setBedrooms] = useState('any')
  const [bathrooms, setBathrooms] = useState('any')

  const formatPrice = (price: number, type: 'sale' | 'rent') => {
    if (type === 'rent') {
      return `$${price.toLocaleString()}/month`
    }
    return `$${price.toLocaleString()}`
  }

  const getPropertyTypeIcon = (type: string) => {
    switch (type) {
      case 'house': return <Home className="w-4 h-4" />
      case 'condo': return <Building className="w-4 h-4" />
      case 'apartment': return <Building className="w-4 h-4" />
      case 'commercial': return <Building className="w-4 h-4" />
      default: return <Home className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="realestate-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect Property
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover your dream home or investment opportunity with our comprehensive property platform
            </p>
            
            {/* Search Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-2xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur">
                <TabsTrigger value="buy" className="text-white data-[state=active]:bg-white data-[state=active]:text-primary">
                  Buy
                </TabsTrigger>
                <TabsTrigger value="rent" className="text-white data-[state=active]:bg-white data-[state=active]:text-primary">
                  Rent
                </TabsTrigger>
                <TabsTrigger value="sell" className="text-white data-[state=active]:bg-white data-[state=active]:text-primary">
                  Sell
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="buy" className="mt-6">
                <Card className="p-6 bg-white/95 backdrop-blur">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="search-bar md:col-span-2">
                      <div className="relative">
                        <MapPin className="search-icon w-5 h-5" />
                        <Input
                          className="search-input"
                          placeholder="Enter city, neighborhood, or address..."
                          value={searchLocation}
                          onChange={(e) => setSearchLocation(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <Select value={propertyType} onValueChange={setPropertyType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Property Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <div className="flex gap-2">
                      <Select value={bedrooms} onValueChange={setBedrooms}>
                        <SelectTrigger>
                          <SelectValue placeholder="Beds" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="1">1+</SelectItem>
                          <SelectItem value="2">2+</SelectItem>
                          <SelectItem value="3">3+</SelectItem>
                          <SelectItem value="4">4+</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Select value={bathrooms} onValueChange={setBathrooms}>
                        <SelectTrigger>
                          <SelectValue placeholder="Baths" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="1">1+</SelectItem>
                          <SelectItem value="2">2+</SelectItem>
                          <SelectItem value="3">3+</SelectItem>
                          <SelectItem value="4">4+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button className="w-full realestate-button bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Search className="w-5 h-5 mr-2" />
                    Search Properties
                  </Button>
                </Card>
              </TabsContent>
              
              <TabsContent value="rent" className="mt-6">
                <Card className="p-6 bg-white/95 backdrop-blur">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="search-bar md:col-span-2">
                      <div className="relative">
                        <MapPin className="search-icon w-5 h-5" />
                        <Input
                          className="search-input"
                          placeholder="Enter city, neighborhood, or address..."
                          value={searchLocation}
                          onChange={(e) => setSearchLocation(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <Select value={propertyType} onValueChange={setPropertyType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Property Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <div className="flex gap-2">
                      <Select value={bedrooms} onValueChange={setBedrooms}>
                        <SelectTrigger>
                          <SelectValue placeholder="Beds" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="0">Studio</SelectItem>
                          <SelectItem value="1">1+</SelectItem>
                          <SelectItem value="2">2+</SelectItem>
                          <SelectItem value="3">3+</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Select value={bathrooms} onValueChange={setBathrooms}>
                        <SelectTrigger>
                          <SelectValue placeholder="Baths" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="1">1+</SelectItem>
                          <SelectItem value="2">2+</SelectItem>
                          <SelectItem value="3">3+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button className="w-full realestate-button bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Search className="w-5 h-5 mr-2" />
                    Search Rentals
                  </Button>
                </Card>
              </TabsContent>
              
              <TabsContent value="sell" className="mt-6">
                <Card className="p-6 bg-white/95 backdrop-blur text-center">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Ready to Sell Your Property?</h3>
                  <p className="text-muted-foreground mb-6">
                    Get a free property valuation and connect with our top agents
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="realestate-button bg-primary hover:bg-primary/90 text-primary-foreground">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Get Property Valuation
                    </Button>
                    <Button variant="outline" className="border-white text-foreground hover:bg-white/10">
                      Find an Agent
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Properties for Sale', value: '12,543', change: '+5.2%', positive: true },
              { label: 'Properties for Rent', value: '3,287', change: '+2.8%', positive: true },
              { label: 'Average Home Price', value: '$845K', change: '+1.2%', positive: true },
              { label: 'Days on Market', value: '23', change: '-8.3%', positive: true },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="dashboard-card text-center">
                  <div className="dashboard-metric">
                    <div className="dashboard-metric-value">{stat.value}</div>
                    <div className="dashboard-metric-label">{stat.label}</div>
                    <div className={`dashboard-metric-change ${stat.positive ? 'positive' : 'negative'}`}>
                      <TrendingUp className="w-3 h-3 inline mr-1" />
                      {stat.change}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
              <p className="text-muted-foreground">Hand-picked properties by our expert team</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'map' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('map')}
                >
                  <Map className="w-4 h-4" />
                </Button>
              </div>
              
              <Button variant="ghost">
                View All Properties <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="property-grid">
              {featuredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="property-card">
                    <div className="relative">
                      {property.featured && (
                        <Badge className="property-badge featured">Featured</Badge>
                      )}
                      
                      <Badge className={`property-badge ${property.status}`}>
                        {property.status.replace('-', ' ').toUpperCase()}
                      </Badge>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border flex items-center justify-center hover:bg-white dark:hover:bg-black transition-colors"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>

                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={property.image}
                          alt={property.title}
                          width={400}
                          height={300}
                          className="property-image"
                        />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-4">
                        <div className="property-price mb-1">
                          {formatPrice(property.price, property.priceType)}
                          {property.priceType === 'rent' && property.squareFeet && (
                            <span className="property-price-per-unit">
                              (${(property.price / property.squareFeet).toFixed(2)}/sqft)
                            </span>
                          )}
                        </div>
                        
                        <h3 className="property-title mb-2">{property.title}</h3>
                        <p className="property-address">
                          {property.address}, {property.city}, {property.state} {property.zipCode}
                        </p>
                      </div>

                      <div className="property-stats mb-4">
                        {property.bedrooms > 0 && (
                          <div className="property-stat">
                            <Bed className="w-4 h-4" />
                            <span>{property.bedrooms} bed{property.bedrooms !== 1 ? 's' : ''}</span>
                          </div>
                        )}
                        
                        <div className="property-stat">
                          <Bath className="w-4 h-4" />
                          <span>{property.bathrooms} bath{property.bathrooms !== 1 ? 's' : ''}</span>
                        </div>
                        
                        <div className="property-stat">
                          <Square className="w-4 h-4" />
                          <span>{property.squareFeet.toLocaleString()} sqft</span>
                        </div>
                        
                        <div className="property-stat">
                          {getPropertyTypeIcon(property.propertyType)}
                          <span className="capitalize">{property.propertyType}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={property.agent.image} alt={property.agent.name} />
                            <AvatarFallback>{property.agent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="text-sm">
                            <p className="font-medium">{property.agent.name}</p>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-muted-foreground">{property.agent.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Badge variant="secondary" className="text-xs">
                          {property.daysOnMarket} days
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="map-container">
              <div className="w-full h-full flex items-center justify-center bg-muted/30 text-muted-foreground">
                <div className="text-center">
                  <Map className="w-12 h-12 mx-auto mb-4" />
                  <p>Interactive map view would be displayed here</p>
                  <p className="text-sm">Integration with Mapbox or Google Maps</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Top Agents */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Top Agents</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Work with experienced professionals who know the local market inside and out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="agent-card">
                  <div className="agent-avatar">
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="agent-name">{agent.name}</h3>
                    <p className="agent-title">{agent.title}</p>
                    
                    <div className="agent-rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(agent.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">
                        {agent.rating} ({agent.reviews})
                      </span>
                    </div>

                    <div className="text-sm text-muted-foreground mb-4">
                      <p>{agent.propertiesSold} properties sold</p>
                      <p>{agent.experience} years experience</p>
                    </div>

                    <div className="flex gap-2 mb-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Mail className="w-4 h-4 mr-1" />
                        Email
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {agent.specialties.slice(0, 2).map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're buying, selling, or renting, we're here to help you every step of the way
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="realestate-button">
                <Search className="w-5 h-5 mr-2" />
                Browse Properties
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="w-5 h-5 mr-2" />
                Contact an Agent
              </Button>
              <Button size="lg" variant="outline">
                <DollarSign className="w-5 h-5 mr-2" />
                Get Property Value
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}