"use client"

import React, { useState, useMemo } from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RechartsTooltipProps
} from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SelectField } from '@/components/ui/select'
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Users, 
  DollarSign, 
  ShoppingCart,
  Calendar,
  Filter
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Chart color palette
const CHART_COLORS = {
  primary: 'hsl(var(--chart-1))',
  secondary: 'hsl(var(--chart-2))',
  tertiary: 'hsl(var(--chart-3))',
  quaternary: 'hsl(var(--chart-4))',
  quinary: 'hsl(var(--chart-5))',
  success: 'hsl(142 76% 36%)',
  warning: 'hsl(38 92% 50%)',
  error: 'hsl(0 84% 60%)',
  info: 'hsl(221 83% 53%)',
}

// Sample data generators
const generateRevenueData = (months: number = 12) => {
  const data = []
  const baseRevenue = 45000
  
  for (let i = 0; i < months; i++) {
    const month = new Date(2024, i, 1).toLocaleDateString('en', { month: 'short' })
    const revenue = baseRevenue + Math.random() * 20000 - 5000
    const expenses = revenue * (0.6 + Math.random() * 0.2)
    const profit = revenue - expenses
    
    data.push({
      month,
      revenue: Math.round(revenue),
      expenses: Math.round(expenses),
      profit: Math.round(profit),
    })
  }
  
  return data
}

const generateUserGrowthData = () => {
  return [
    { month: 'Jan', users: 4000, newUsers: 400, activeUsers: 2400 },
    { month: 'Feb', users: 3000, newUsers: 300, activeUsers: 1398 },
    { month: 'Mar', users: 2000, newUsers: 200, activeUsers: 9800 },
    { month: 'Apr', users: 2780, newUsers: 278, activeUsers: 3908 },
    { month: 'May', users: 1890, newUsers: 189, activeUsers: 4800 },
    { month: 'Jun', users: 2390, newUsers: 239, activeUsers: 3800 },
    { month: 'Jul', users: 3490, newUsers: 349, activeUsers: 4300 },
  ]
}

const generateCategoryData = () => [
  { name: 'Technology', value: 30, count: 1245 },
  { name: 'Marketing', value: 25, count: 1033 },
  { name: 'Sales', value: 20, count: 827 },
  { name: 'Support', value: 15, count: 621 },
  { name: 'Operations', value: 10, count: 414 },
]

const generateTrafficData = () => [
  { time: '00:00', organic: 20, direct: 15, social: 5, referral: 8 },
  { time: '04:00', organic: 15, direct: 12, social: 3, referral: 5 },
  { time: '08:00', organic: 45, direct: 35, social: 12, referral: 18 },
  { time: '12:00', organic: 65, direct: 55, social: 18, referral: 25 },
  { time: '16:00', organic: 75, direct: 45, social: 22, referral: 20 },
  { time: '20:00', organic: 55, direct: 30, social: 15, referral: 12 },
]

// Custom Tooltip Component
const CustomTooltip: React.FC<RechartsTooltipProps<any, any>> = ({ 
  active, 
  payload, 
  label 
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="font-medium text-card-foreground mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground">{entry.name}:</span>
            <span className="font-medium text-card-foreground">
              {typeof entry.value === 'number' 
                ? entry.value.toLocaleString() 
                : entry.value}
            </span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

// Stat Card Component
interface StatCardProps {
  title: string
  value: string | number
  change: number
  icon: React.ComponentType<{ className?: string }>
  description?: string
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  description 
}) => {
  const isPositive = change >= 0
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {typeof value === 'number' ? value.toLocaleString() : value}
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          {isPositive ? (
            <TrendingUp className="h-3 w-3 text-green-500" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-500" />
          )}
          <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
            {isPositive ? '+' : ''}{change}%
          </span>
          <span>from last month</span>
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  )
}

// Main Dashboard Component
interface ChartDashboardProps {
  className?: string
  showFilters?: boolean
  timeRange?: '7d' | '30d' | '90d' | '1y'
  onTimeRangeChange?: (range: '7d' | '30d' | '90d' | '1y') => void
}

export const ChartDashboard: React.FC<ChartDashboardProps> = ({
  className,
  showFilters = true,
  timeRange = '30d',
  onTimeRangeChange
}) => {
  const [activeChart, setActiveChart] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Generate data based on time range
  const revenueData = useMemo(() => {
    const months = timeRange === '1y' ? 12 : timeRange === '90d' ? 3 : 1
    return generateRevenueData(months)
  }, [timeRange])

  const userGrowthData = generateUserGrowthData()
  const categoryData = generateCategoryData()
  const trafficData = generateTrafficData()

  // Filter data based on selected category
  const filteredData = useMemo(() => {
    if (selectedCategory === 'all') return revenueData
    // In a real app, you'd filter based on the actual category
    return revenueData
  }, [revenueData, selectedCategory])

  const timeRangeOptions = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 3 months' },
    { value: '1y', label: 'Last year' },
  ]

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    ...categoryData.map(cat => ({ value: cat.name.toLowerCase(), label: cat.name }))
  ]

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header with Filters */}
      {showFilters && (
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Analytics Dashboard</h2>
            <p className="text-muted-foreground">
              Track your performance metrics and key insights
            </p>
          </div>
          
          <div className="flex gap-2">
            <SelectField
              placeholder="Select time range"
              options={timeRangeOptions}
              value={timeRange}
              onValueChange={(value) => onTimeRangeChange?.(value as any)}
              className="w-40"
            />
            <SelectField
              placeholder="All categories"
              options={categoryOptions}
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-40"
            />
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      )}

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$54,231"
          change={12.5}
          icon={DollarSign}
          description="Revenue from all sources"
        />
        <StatCard
          title="Active Users"
          value="2,350"
          change={8.2}
          icon={Users}
          description="Monthly active users"
        />
        <StatCard
          title="Orders"
          value="1,234"
          change={-3.1}
          icon={ShoppingCart}
          description="Total orders this month"
        />
        <StatCard
          title="Conversion Rate"
          value="3.2%"
          change={5.7}
          icon={Activity}
          description="Visitor to customer conversion"
        />
      </div>

      {/* Revenue & Expenses Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Revenue & Expenses
          </CardTitle>
          <CardDescription>
            Monthly revenue and expense comparison
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar 
                  dataKey="revenue" 
                  fill={CHART_COLORS.primary} 
                  name="Revenue"
                  radius={[2, 2, 0, 0]}
                />
                <Bar 
                  dataKey="expenses" 
                  fill={CHART_COLORS.secondary} 
                  name="Expenses"
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* User Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              User Growth
            </CardTitle>
            <CardDescription>
              User acquisition and retention metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="users" 
                    stroke={CHART_COLORS.primary}
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    name="Total Users"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="newUsers" 
                    stroke={CHART_COLORS.secondary}
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    name="New Users"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Category Distribution
            </CardTitle>
            <CardDescription>
              Breakdown by business categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={Object.values(CHART_COLORS)[index % Object.values(CHART_COLORS).length]} 
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {categoryData.map((item, index) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ 
                      backgroundColor: Object.values(CHART_COLORS)[index % Object.values(CHART_COLORS).length] 
                    }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.name}: {item.count}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Traffic Sources Area Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Traffic Sources Over Time
          </CardTitle>
          <CardDescription>
            Website traffic breakdown by source throughout the day
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="organic"
                  stackId="1"
                  stroke={CHART_COLORS.primary}
                  fill={CHART_COLORS.primary}
                  fillOpacity={0.6}
                  name="Organic"
                />
                <Area
                  type="monotone"
                  dataKey="direct"
                  stackId="1"
                  stroke={CHART_COLORS.secondary}
                  fill={CHART_COLORS.secondary}
                  fillOpacity={0.6}
                  name="Direct"
                />
                <Area
                  type="monotone"
                  dataKey="social"
                  stackId="1"
                  stroke={CHART_COLORS.tertiary}
                  fill={CHART_COLORS.tertiary}
                  fillOpacity={0.6}
                  name="Social"
                />
                <Area
                  type="monotone"
                  dataKey="referral"
                  stackId="1"
                  stroke={CHART_COLORS.quaternary}
                  fill={CHART_COLORS.quaternary}
                  fillOpacity={0.6}
                  name="Referral"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks and reports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-accent">
              Export Data
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent">
              Generate Report
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent">
              Schedule Email
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent">
              View Detailed Analytics
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Usage Example
export default function ChartsExample() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d')

  return (
    <div className="min-h-screen bg-background p-6">
      <ChartDashboard 
        timeRange={timeRange}
        onTimeRangeChange={setTimeRange}
        showFilters={true}
        className="max-w-7xl mx-auto"
      />
    </div>
  )
}