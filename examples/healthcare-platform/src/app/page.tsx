'use client'

import { useState } from 'react'
import { 
  Users, 
  Calendar, 
  FileText, 
  Activity, 
  Heart, 
  Thermometer,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Stethoscope,
  Pill,
  Shield
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function HealthcareDashboard() {
  const [selectedPatient, setSelectedPatient] = useState(null)

  const todayStats = {
    totalPatients: 127,
    appointmentsToday: 24,
    criticalAlerts: 3,
    completedVisits: 18
  }

  const upcomingAppointments = [
    {
      id: 1,
      time: '09:00 AM',
      patient: 'Sarah Johnson',
      type: 'Annual Checkup',
      status: 'confirmed',
      age: 34,
      mrn: 'MRN001234'
    },
    {
      id: 2,
      time: '09:30 AM',
      patient: 'Michael Chen',
      type: 'Follow-up',
      status: 'confirmed',
      age: 67,
      mrn: 'MRN005678'
    },
    {
      id: 3,
      time: '10:15 AM',
      patient: 'Emma Davis',
      type: 'Lab Review',
      status: 'scheduled',
      age: 45,
      mrn: 'MRN009012'
    },
    {
      id: 4,
      time: '11:00 AM',
      patient: 'Robert Wilson',
      type: 'Consultation',
      status: 'confirmed',
      age: 52,
      mrn: 'MRN003456'
    }
  ]

  const criticalPatients = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      condition: 'Hypertension Crisis',
      vitals: { bp: '180/110', hr: '98' },
      alert: 'Critical BP reading - immediate attention required',
      room: 'ER-3',
      mrn: 'MRN007890'
    },
    {
      id: 2,
      name: 'James Thompson',
      condition: 'Post-Op Monitoring',
      vitals: { temp: '101.2°F', hr: '110' },
      alert: 'Elevated temperature post-surgery',
      room: 'Room 204',
      mrn: 'MRN001122'
    },
    {
      id: 3,
      name: 'Linda Parker',
      condition: 'Diabetes Management',
      vitals: { glucose: '280 mg/dL', bp: '150/95' },
      alert: 'Severe hyperglycemia - insulin protocol initiated',
      room: 'Room 108',
      mrn: 'MRN003344'
    }
  ]

  const recentLabResults = [
    {
      id: 1,
      patient: 'Sarah Johnson',
      test: 'Complete Blood Count',
      result: 'Normal',
      date: '2024-01-20',
      status: 'reviewed',
      mrn: 'MRN001234'
    },
    {
      id: 2,
      patient: 'Michael Chen',
      test: 'Lipid Panel',
      result: 'Elevated Cholesterol',
      date: '2024-01-20',
      status: 'pending',
      mrn: 'MRN005678'
    },
    {
      id: 3,
      patient: 'Emma Davis',
      test: 'HbA1c',
      result: '6.8%',
      date: '2024-01-19',
      status: 'reviewed',
      mrn: 'MRN009012'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
      case 'scheduled': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
      case 'cancelled': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
      case 'completed': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
    }
  }

  const getLabStatusColor = (status: string) => {
    switch (status) {
      case 'reviewed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
      case 'abnormal': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
    }
  }

  const formatTime = (timeString: string) => {
    return timeString
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Medical Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, Dr. Thompson. Today is January 20, 2024
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge className="security-badge">
            <Shield className="w-3 h-3" />
            HIPAA Compliant
          </Badge>
          <Button className="medical-gradient text-white">
            <Stethoscope className="w-4 h-4 mr-2" />
            New Patient
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="medical-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.totalPatients}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +12 new this month
            </p>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.appointmentsToday}</div>
            <p className="text-xs text-muted-foreground">
              {todayStats.completedVisits} completed, 6 remaining
            </p>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{todayStats.criticalAlerts}</div>
            <p className="text-xs text-muted-foreground">
              Require immediate attention
            </p>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Visits</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.completedVisits}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              75% completion rate today
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Appointments */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              View Schedule
            </Button>
          </div>

          <div className="space-y-3">
            {upcomingAppointments.map((appointment) => (
              <Card key={appointment.id} className="appointment-card">
                <CardContent className="p-4">
                  <div className="appointment-header">
                    <div>
                      <div className="appointment-time">{appointment.time}</div>
                      <div className="appointment-type text-muted-foreground">
                        {appointment.type}
                      </div>
                    </div>
                    <Badge className={`appointment-status ${appointment.status}`}>
                      {appointment.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <div className="appointment-patient">{appointment.patient}</div>
                      <div className="text-sm text-muted-foreground">
                        Age {appointment.age} • {appointment.mrn}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <FileText className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Activity className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Critical Patients */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Critical Patients</h2>
            <Button variant="outline" size="sm">
              <AlertTriangle className="w-4 h-4 mr-2" />
              View All Alerts
            </Button>
          </div>

          <div className="space-y-4">
            {criticalPatients.map((patient) => (
              <Card key={patient.id} className="medical-card border-l-4 border-l-red-500">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{patient.name}</h3>
                      <p className="text-sm text-muted-foreground">{patient.mrn}</p>
                    </div>
                    <Badge className="critical-priority">
                      Critical
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Condition:</span>
                      <span className="text-sm">{patient.condition}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Location:</span>
                      <span className="text-sm">{patient.room}</span>
                    </div>

                    <div className="vital-signs">
                      {Object.entries(patient.vitals).map(([key, value]) => (
                        <div key={key} className="vital-item">
                          <div className="vital-value text-lg font-bold text-red-600">{value}</div>
                          <div className="vital-label capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="emergency-alert">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{patient.alert}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Lab Results */}
      <Card className="medical-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            Recent Lab Results
          </CardTitle>
          <CardDescription>Latest laboratory test results requiring review</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentLabResults.map((result) => (
              <div key={result.id} className="lab-result">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="lab-test">{result.test}</h4>
                    <Badge className={getLabStatusColor(result.status)}>
                      {result.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-medium">{result.patient}</span>
                    <span className="text-sm text-muted-foreground">{result.mrn}</span>
                    <span className="text-sm text-muted-foreground">{result.date}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`lab-value ${
                    result.result.includes('Elevated') || result.result.includes('High') 
                      ? 'lab-abnormal' 
                      : result.result === 'Normal' 
                      ? 'lab-normal' 
                      : ''
                  }`}>
                    {result.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="medical-card cursor-pointer hover:shadow-lg transition-all duration-200">
          <CardContent className="p-6 text-center">
            <Pill className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">E-Prescribing</h3>
            <p className="text-sm text-muted-foreground">
              Send prescriptions directly to pharmacies
            </p>
          </CardContent>
        </Card>

        <Card className="medical-card cursor-pointer hover:shadow-lg transition-all duration-200">
          <CardContent className="p-6 text-center">
            <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Clinical Notes</h3>
            <p className="text-sm text-muted-foreground">
              Create and review patient documentation
            </p>
          </CardContent>
        </Card>

        <Card className="medical-card cursor-pointer hover:shadow-lg transition-all duration-200">
          <CardContent className="p-6 text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-primary animate-heartbeat" />
            <h3 className="font-semibold mb-2">Vital Signs</h3>
            <p className="text-sm text-muted-foreground">
              Record and monitor patient vitals
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}