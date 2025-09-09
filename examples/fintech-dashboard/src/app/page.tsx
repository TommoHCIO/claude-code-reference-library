'use client'

import { useState } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  CreditCard, 
  PiggyBank, 
  ArrowUpRight, 
  ArrowDownLeft,
  Plus,
  Send,
  Receipt,
  Shield,
  Eye,
  EyeOff
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

export default function DashboardPage() {
  const [balanceVisible, setBalanceVisible] = useState(true)

  const accounts = [
    {
      id: 1,
      name: 'Primary Checking',
      type: 'checking',
      balance: 12450.75,
      change: 245.50,
      changePercent: 2.01,
      accountNumber: '****1234'
    },
    {
      id: 2,
      name: 'High Yield Savings',
      type: 'savings',
      balance: 45230.20,
      change: 892.30,
      changePercent: 2.01,
      accountNumber: '****5678'
    },
    {
      id: 3,
      name: 'Investment Portfolio',
      type: 'investment',
      balance: 128750.40,
      change: -2340.80,
      changePercent: -1.79,
      accountNumber: '****9012'
    },
    {
      id: 4,
      name: 'Credit Card',
      type: 'credit',
      balance: -2845.30,
      change: -145.20,
      changePercent: 5.38,
      accountNumber: '****3456'
    }
  ]

  const recentTransactions = [
    {
      id: 1,
      merchant: 'Starbucks Coffee',
      amount: -4.85,
      category: 'Food & Drink',
      date: '2024-01-20',
      status: 'completed'
    },
    {
      id: 2,
      merchant: 'Direct Deposit - Payroll',
      amount: 3250.00,
      category: 'Income',
      date: '2024-01-20',
      status: 'completed'
    },
    {
      id: 3,
      merchant: 'Amazon Purchase',
      amount: -89.99,
      category: 'Shopping',
      date: '2024-01-19',
      status: 'pending'
    },
    {
      id: 4,
      merchant: 'Electric Company',
      amount: -145.67,
      category: 'Utilities',
      date: '2024-01-18',
      status: 'completed'
    },
    {
      id: 5,
      merchant: 'Investment Transfer',
      amount: -500.00,
      category: 'Transfer',
      date: '2024-01-18',
      status: 'completed'
    }
  ]

  const portfolioData = [
    { name: 'Stocks', value: 65000, percentage: 50.5, color: '#10b981' },
    { name: 'Bonds', value: 25000, percentage: 19.4, color: '#3b82f6' },
    { name: 'ETFs', value: 20000, percentage: 15.5, color: '#8b5cf6' },
    { name: 'Crypto', value: 12000, percentage: 9.3, color: '#f59e0b' },
    { name: 'Cash', value: 6750, percentage: 5.3, color: '#6b7280' }
  ]

  const performanceData = [
    { month: 'Jul', value: 115000 },
    { month: 'Aug', value: 118500 },
    { month: 'Sep', value: 121200 },
    { month: 'Oct', value: 119800 },
    { month: 'Nov', value: 125300 },
    { month: 'Dec', value: 128750 }
  ]

  const quickActions = [
    { name: 'Transfer', icon: Send, color: 'bg-blue-500' },
    { name: 'Pay Bills', icon: Receipt, color: 'bg-green-500' },
    { name: 'Deposit', icon: Plus, color: 'bg-purple-500' },
    { name: 'Invest', icon: TrendingUp, color: 'bg-orange-500' }
  ]

  const totalBalance = accounts
    .filter(acc => acc.type !== 'credit')
    .reduce((sum, acc) => sum + acc.balance, 0)

  const totalChange = accounts
    .filter(acc => acc.type !== 'credit')
    .reduce((sum, acc) => sum + acc.change, 0)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Math.abs(amount))
  }

  const getAccountIcon = (type: string) => {
    switch (type) {
      case 'checking': return DollarSign
      case 'savings': return PiggyBank
      case 'investment': return TrendingUp
      case 'credit': return CreditCard
      default: return DollarSign
    }
  }

  const getAccountColor = (type: string) => {
    switch (type) {
      case 'checking': return 'bg-blue-500'
      case 'savings': return 'bg-green-500'
      case 'investment': return 'bg-purple-500'
      case 'credit': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Good morning, Alex! 👋</h1>
          <p className="text-muted-foreground mt-1">Here's your financial overview for today</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="security-badge">
            <Shield className="w-3 h-3" />
            Bank-Level Security
          </Badge>
        </div>
      </div>

      {/* Balance Overview */}
      <Card className="fintech-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Balance</p>
              <div className="flex items-center gap-2">
                {balanceVisible ? (
                  <span className="balance-display animate-balance-update">
                    {formatCurrency(totalBalance)}
                  </span>
                ) : (
                  <span className="balance-display">••••••••</span>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setBalanceVisible(!balanceVisible)}
                >
                  {balanceVisible ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className="text-right">
              <div className={`flex items-center gap-1 ${totalChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {totalChange >= 0 ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownLeft className="w-4 h-4" />
                )}
                <span className="font-medium">
                  {formatCurrency(totalChange)} ({totalChange >= 0 ? '+' : ''}{((totalChange / totalBalance) * 100).toFixed(2)}%)
                </span>
              </div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            {quickActions.map((action) => (
              <Button
                key={action.name}
                variant="outline"
                className="h-16 flex-col gap-2"
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${action.color}`}>
                  <action.icon className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs">{action.name}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Accounts */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Accounts</h2>
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Account
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accounts.map((account) => {
              const IconComponent = getAccountIcon(account.type)
              return (
                <Card key={account.id} className="account-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getAccountColor(account.type)}`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{account.name}</h3>
                          <p className="text-sm text-muted-foreground">{account.accountNumber}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Balance</span>
                        <span className="balance-display text-lg">
                          {account.type === 'credit' && account.balance < 0 ? '-' : ''}
                          {formatCurrency(account.balance)}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Change</span>
                        <div className={`flex items-center gap-1 text-sm font-medium ${
                          account.change >= 0 ? 'price-change positive' : 'price-change negative'
                        }`}>
                          {account.change >= 0 ? (
                            <ArrowUpRight className="w-3 h-3" />
                          ) : (
                            <ArrowDownLeft className="w-3 h-3" />
                          )}
                          {formatCurrency(account.change)} ({account.change >= 0 ? '+' : ''}{account.changePercent.toFixed(2)}%)
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Recent Transactions */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Recent Transactions</h2>
            <Card className="fintech-card">
              <CardContent className="p-0">
                {recentTransactions.map((transaction, index) => (
                  <div key={transaction.id} className="transaction-row">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                        {transaction.amount > 0 ? (
                          <ArrowUpRight className="w-4 h-4 text-green-600" />
                        ) : (
                          <ArrowDownLeft className="w-4 h-4 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.merchant}</p>
                        <p className="text-sm text-muted-foreground">{transaction.category} • {transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold transaction-amount ${transaction.amount > 0 ? 'positive' : 'negative'}`}>
                        {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                      </p>
                      <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Portfolio Performance */}
          <Card className="fintech-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                Portfolio Performance
              </CardTitle>
              <CardDescription>Investment portfolio over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip 
                      formatter={(value: number) => [formatCurrency(value), "Portfolio Value"]}
                      labelStyle={{ color: 'var(--foreground)' }}
                      contentStyle={{ 
                        backgroundColor: 'var(--popover)',
                        border: '1px solid var(--border)',
                        borderRadius: '6px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Asset Allocation */}
          <Card className="fintech-card">
            <CardHeader>
              <CardTitle>Asset Allocation</CardTitle>
              <CardDescription>Portfolio diversification breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={portfolioData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {portfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => [formatCurrency(value), ""]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-2">
                {portfolioData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{formatCurrency(item.value)}</div>
                      <div className="text-xs text-muted-foreground">{item.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Credit Score */}
          <Card className="fintech-card">
            <CardHeader>
              <CardTitle>Credit Score</CardTitle>
              <CardDescription>Updated monthly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="credit-score excellent">
                <div className="text-3xl font-bold mb-1">785</div>
                <div className="text-sm text-muted-foreground mb-2">Excellent</div>
                <Badge variant="secondary" className="text-xs">
                  +12 points this month
                </Badge>
              </div>
              <Button variant="outline" className="w-full mt-4" size="sm">
                View Credit Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}