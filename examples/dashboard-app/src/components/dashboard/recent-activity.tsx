"use client"

import { Badge } from "@/components/ui/badge"
import { recentActivities } from '@/data/mock-data'

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {recentActivities.map((activity) => (
        <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
            {activity.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium leading-none">
              {activity.user}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {activity.action}
            </p>
          </div>
          <div className="flex flex-col items-end space-y-1">
            {activity.amount && (
              <Badge variant="secondary" className="font-mono text-xs">
                {activity.amount}
              </Badge>
            )}
            <span className="text-xs text-muted-foreground">
              {activity.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}