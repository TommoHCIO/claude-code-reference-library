// Mock data for dashboard charts and components

export const revenueData = [
  { month: 'Jan', revenue: 45231, target: 40000 },
  { month: 'Feb', revenue: 52847, target: 45000 },
  { month: 'Mar', revenue: 48392, target: 50000 },
  { month: 'Apr', revenue: 61847, target: 55000 },
  { month: 'May', revenue: 58392, target: 60000 },
  { month: 'Jun', revenue: 67234, target: 65000 },
]

export const userGrowthData = [
  { week: 'Week 1', newUsers: 1240, returning: 890 },
  { week: 'Week 2', newUsers: 1680, returning: 1120 },
  { week: 'Week 3', newUsers: 1430, returning: 1340 },
  { week: 'Week 4', newUsers: 1820, returning: 1580 },
]

export const deviceUsageData = [
  { name: 'Desktop', value: 45.2, color: '#8884d8' },
  { name: 'Mobile', value: 38.7, color: '#82ca9d' },
  { name: 'Tablet', value: 12.8, color: '#ffc658' },
  { name: 'Other', value: 3.3, color: '#ff7c7c' },
]

export const performanceData = [
  { time: '00:00', cpu: 45, memory: 62, network: 23 },
  { time: '04:00', cpu: 52, memory: 58, network: 31 },
  { time: '08:00', cpu: 78, memory: 74, network: 67 },
  { time: '12:00', cpu: 85, memory: 81, network: 78 },
  { time: '16:00', cpu: 92, memory: 88, network: 82 },
  { time: '20:00', cpu: 67, memory: 71, network: 54 },
]

export const recentActivities = [
  {
    id: 1,
    user: 'John Smith',
    action: 'completed a purchase',
    amount: '$156.00',
    time: '2 minutes ago',
    avatar: 'JS',
  },
  {
    id: 2,
    user: 'Sarah Johnson',
    action: 'updated profile',
    amount: null,
    time: '5 minutes ago',
    avatar: 'SJ',
  },
  {
    id: 3,
    user: 'Mike Chen',
    action: 'subscribed to Pro plan',
    amount: '$29.99',
    time: '12 minutes ago',
    avatar: 'MC',
  },
  {
    id: 4,
    user: 'Emma Davis',
    action: 'downloaded report',
    amount: null,
    time: '18 minutes ago',
    avatar: 'ED',
  },
  {
    id: 5,
    user: 'Alex Wilson',
    action: 'completed a purchase',
    amount: '$89.50',
    time: '25 minutes ago',
    avatar: 'AW',
  },
]

export const topProducts = [
  {
    id: 1,
    name: 'Premium Dashboard',
    sales: 1234,
    revenue: '$18,760',
    growth: '+12%',
    trending: 'up',
  },
  {
    id: 2,
    name: 'Analytics Suite',
    sales: 987,
    revenue: '$24,675',
    growth: '+8%',
    trending: 'up',
  },
  {
    id: 3,
    name: 'Design System',
    sales: 756,
    revenue: '$12,890',
    growth: '-3%',
    trending: 'down',
  },
  {
    id: 4,
    name: 'Mobile App',
    sales: 543,
    revenue: '$8,125',
    growth: '+15%',
    trending: 'up',
  },
  {
    id: 5,
    name: 'API Access',
    sales: 432,
    revenue: '$6,480',
    growth: '+5%',
    trending: 'up',
  },
]