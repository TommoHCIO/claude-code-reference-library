'use client'

import { useState } from 'react'
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  TrendingUp, 
  Calendar,
  Play,
  FileText,
  MessageSquare,
  Target,
  Star,
  ChevronRight,
  BarChart3
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function DashboardPage() {
  const [enrolledCourses] = useState([
    {
      id: 1,
      title: 'Advanced React Development',
      instructor: 'Sarah Johnson',
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      nextLesson: 'State Management with Redux',
      thumbnail: '/courses/react-advanced.jpg',
      difficulty: 'Advanced',
      duration: '8 weeks'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Mike Chen',
      progress: 45,
      totalLessons: 16,
      completedLessons: 7,
      nextLesson: 'Color Theory and Psychology',
      thumbnail: '/courses/ux-design.jpg',
      difficulty: 'Beginner',
      duration: '6 weeks'
    },
    {
      id: 3,
      title: 'Python for Data Science',
      instructor: 'Dr. Emma Davis',
      progress: 90,
      totalLessons: 20,
      completedLessons: 18,
      nextLesson: 'Machine Learning Basics',
      thumbnail: '/courses/python-data.jpg',
      difficulty: 'Intermediate',
      duration: '10 weeks'
    }
  ])

  const [upcomingAssignments] = useState([
    {
      id: 1,
      title: 'React Component Assignment',
      course: 'Advanced React Development',
      dueDate: '2024-01-20',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Design System Project',
      course: 'UI/UX Design Fundamentals',
      dueDate: '2024-01-22',
      status: 'in_progress'
    },
    {
      id: 3,
      title: 'Data Analysis Report',
      course: 'Python for Data Science',
      dueDate: '2024-01-25',
      status: 'pending'
    }
  ])

  const [achievements] = useState([
    { name: 'First Course Completed', icon: '🎯', date: '2024-01-15' },
    { name: 'Week Streak', icon: '🔥', date: '2024-01-18' },
    { name: 'Top Performer', icon: '⭐', date: '2024-01-10' }
  ])

  const stats = {
    totalCourses: 3,
    completedCourses: 0,
    totalHours: 156,
    averageGrade: 'A-'
  }

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Alex! 👋</h1>
          <p className="text-muted-foreground mt-1">Ready to continue your learning journey?</p>
        </div>
        <Button className="lms-button bg-primary hover:bg-primary/90">
          <Play className="w-4 h-4 mr-2" />
          Continue Learning
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="lms-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCourses}</div>
            <p className="text-xs text-muted-foreground">
              {stats.completedCourses} completed
            </p>
          </CardContent>
        </Card>

        <Card className="lms-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalHours}</div>
            <p className="text-xs text-muted-foreground">
              +12 hours this week
            </p>
          </CardContent>
        </Card>

        <Card className="lms-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageGrade}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +5% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="lms-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{achievements.length}</div>
            <p className="text-xs text-muted-foreground">
              2 new this month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current Courses */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Continue Learning</h2>
            <Button variant="ghost" size="sm">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="space-y-4">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="course-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                        </div>
                        <Badge variant={course.difficulty === 'Beginner' ? 'secondary' : course.difficulty === 'Intermediate' ? 'default' : 'destructive'}>
                          {course.difficulty}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress: {course.completedLessons}/{course.totalLessons} lessons</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <Button size="sm" className="lms-button">
                          <Play className="w-4 h-4 mr-2" />
                          Continue
                        </Button>
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        Next: {course.nextLesson}
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
          {/* Upcoming Assignments */}
          <Card className="lms-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Upcoming Assignments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAssignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{assignment.title}</h4>
                    <p className="text-xs text-muted-foreground">{assignment.course}</p>
                    <p className="text-xs text-muted-foreground">Due: {assignment.dueDate}</p>
                  </div>
                  <Badge variant={assignment.status === 'pending' ? 'secondary' : 'default'}>
                    {assignment.status === 'pending' ? 'Pending' : 'In Progress'}
                  </Badge>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                <FileText className="w-4 h-4 mr-2" />
                View All Assignments
              </Button>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="lms-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-accent/50 rounded-lg">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{achievement.name}</h4>
                    <p className="text-xs text-muted-foreground">Earned on {achievement.date}</p>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                <Star className="w-4 h-4 mr-2" />
                View All Achievements
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="lms-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="w-4 h-4 mr-2" />
                Join Discussion Forums
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Progress Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Find Study Groups
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}