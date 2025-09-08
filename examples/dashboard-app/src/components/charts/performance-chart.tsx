"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { performanceData } from '@/data/mock-data'

export function PerformanceChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis 
            dataKey="time" 
            className="text-xs fill-muted-foreground"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            className="text-xs fill-muted-foreground"
            tick={{ fontSize: 12 }}
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--background))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '6px',
              fontSize: '12px'
            }}
            formatter={(value: any) => [`${value}%`, '']}
          />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="cpu" 
            stackId="1" 
            stroke="hsl(var(--primary))" 
            fill="hsl(var(--primary))" 
            fillOpacity={0.6}
            name="CPU Usage"
          />
          <Area 
            type="monotone" 
            dataKey="memory" 
            stackId="2" 
            stroke="hsl(var(--chart-2))" 
            fill="hsl(var(--chart-2))" 
            fillOpacity={0.6}
            name="Memory Usage"
          />
          <Area 
            type="monotone" 
            dataKey="network" 
            stackId="3" 
            stroke="hsl(var(--chart-3))" 
            fill="hsl(var(--chart-3))" 
            fillOpacity={0.6}
            name="Network Usage"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}