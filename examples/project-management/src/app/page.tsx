'use client'

import { useState } from 'react'
import { 
  Plus, 
  MoreVertical, 
  Calendar, 
  Users, 
  Clock,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  User,
  Target,
  BarChart3
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function ProjectDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Complete overhaul of company website with modern design',
      progress: 75,
      status: 'active',
      health: 'green',
      dueDate: '2024-02-15',
      team: 6,
      tasksCompleted: 18,
      totalTasks: 24,
      color: '#3b82f6'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'iOS and Android app for customer portal',
      progress: 45,
      status: 'active',
      health: 'yellow',
      dueDate: '2024-03-20',
      team: 8,
      tasksCompleted: 12,
      totalTasks: 28,
      color: '#10b981'
    },
    {
      id: 3,
      name: 'Database Migration',
      description: 'Migration to new cloud database infrastructure',
      progress: 90,
      status: 'active',
      health: 'green',
      dueDate: '2024-01-30',
      team: 4,
      tasksCompleted: 16,
      totalTasks: 18,
      color: '#8b5cf6'
    },
    {
      id: 4,
      name: 'Marketing Campaign',
      description: 'Q1 marketing campaign for product launch',
      progress: 25,
      status: 'planning',
      health: 'red',
      dueDate: '2024-04-10',
      team: 5,
      tasksCompleted: 3,
      totalTasks: 15,
      color: '#f59e0b'
    }
  ]

  const recentTasks = [
    {
      id: 1,
      title: 'Design homepage mockups',
      project: 'Website Redesign',
      assignee: 'Sarah Johnson',
      status: 'completed',
      priority: 'high',
      dueDate: '2024-01-20'
    },
    {
      id: 2,
      title: 'Set up CI/CD pipeline',
      project: 'Mobile App Development',
      assignee: 'Mike Chen',
      status: 'in-progress',
      priority: 'medium',
      dueDate: '2024-01-25'
    },
    {
      id: 3,
      title: 'Database schema review',
      project: 'Database Migration',
      assignee: 'Emma Davis',
      status: 'completed',
      priority: 'high',
      dueDate: '2024-01-18'
    },
    {
      id: 4,
      title: 'Content strategy planning',
      project: 'Marketing Campaign',
      assignee: 'Alex Rivera',
      status: 'todo',
      priority: 'low',
      dueDate: '2024-01-28'
    }
  ]

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Designer',
      avatar: '/avatars/sarah.jpg',
      workload: 85,
      status: 'online'
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Senior Developer',
      avatar: '/avatars/mike.jpg',
      workload: 70,
      status: 'online'
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Database Engineer',
      avatar: '/avatars/emma.jpg',
      workload: 90,
      status: 'away'
    },
    {
      id: 4,
      name: 'Alex Rivera',
      role: 'Marketing Specialist',
      avatar: '/avatars/alex.jpg',
      workload: 45,
      status: 'offline'
    }
  ]

  const upcomingDeadlines = [
    {
      id: 1,
      title: 'Database Migration Complete',
      project: 'Database Migration',
      date: '2024-01-30',
      daysLeft: 10,
      type: 'milestone'
    },
    {
      id: 2,
      title: 'Mobile App Beta Release',
      project: 'Mobile App Development',
      date: '2024-02-05',
      daysLeft: 16,
      type: 'delivery'
    },
    {
      id: 3,
      title: 'Website Launch',
      project: 'Website Redesign',
      date: '2024-02-15',
      daysLeft: 26,
      type: 'milestone'
    }
  ]

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'green': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
      case 'yellow': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
      case 'red': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
      case 'todo': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Project Dashboard</h1>
          <p className="text-muted-foreground mt-1">Track your team's progress and manage projects efficiently</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Calendar
          </Button>
          <Button className="project-gradient text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="project-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +2 from last month
            </p>
          </CardContent>
        </Card>

        <Card className="project-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">49</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +12 this week
            </p>
          </CardContent>
        </Card>

        <Card className="project-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Across all projects
            </p>
          </CardContent>
        </Card>

        <Card className="project-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue Tasks</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              <TrendingDown className="inline w-3 h-3 mr-1" />
              -2 from yesterday
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Active Projects */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Active Projects</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <Card key={project.id} className="project-card hover:shadow-lg transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full mt-2"
                        style={{ backgroundColor: project.color }}
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className={`project-health ${getHealthColor(project.health)}`}>
                          {project.health === 'green' && '●'}
                          {project.health === 'yellow' && '●'}
                          {project.health === 'red' && '●'}
                          {project.health.charAt(0).toUpperCase() + project.health.slice(1)}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          Due {formatDate(project.dueDate)}
                        </span>
                      </div>

                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {project.team}
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          {project.tasksCompleted}/{project.totalTasks}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Recent Tasks */}
          <Card className="project-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Recent Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{task.title}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-muted-foreground">{task.project}</span>
                      <span className="text-xs">•</span>
                      <span className="text-xs text-muted-foreground">{task.assignee}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Badge className={getPriorityColor(task.priority)} variant="secondary">
                      {task.priority}
                    </Badge>
                    <Badge className={getStatusColor(task.status)} variant="secondary">
                      {task.status.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Team Workload */}
          <Card className="project-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Team Workload
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="team-member">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <h4 className="font-medium text-sm">{member.name}</h4>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-medium">{member.workload}%</span>
                        <div className={`member-status ${member.status}`} />
                      </div>
                    </div>
                    <div className="workload-bar">
                      <div 
                        className={`workload-fill ${
                          member.workload < 60 ? 'low' : member.workload < 80 ? 'medium' : 'high'
                        }`}
                        style={{ width: `${member.workload}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card className="project-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingDeadlines.map((deadline) => (
                <div key={deadline.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{deadline.title}</h4>
                    <p className="text-xs text-muted-foreground">{deadline.project}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{formatDate(deadline.date)}</div>
                    <div className={`text-xs ${
                      deadline.daysLeft <= 7 ? 'text-red-600' : deadline.daysLeft <= 14 ? 'text-yellow-600' : 'text-muted-foreground'
                    }`}>
                      {deadline.daysLeft} days left
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}