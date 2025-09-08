"use client"

import { CodePreview } from '@/components/code-preview'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts'

// Sample data for charts
const barData = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Apr', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'Jun', sales: 2390, revenue: 3800 },
]

const lineData = [
  { name: 'Week 1', users: 400, sessions: 240 },
  { name: 'Week 2', users: 300, sessions: 139 },
  { name: 'Week 3', users: 200, sessions: 980 },
  { name: 'Week 4', users: 278, sessions: 390 },
]

const pieData = [
  { name: 'Desktop', value: 400, color: '#0088FE' },
  { name: 'Mobile', value: 300, color: '#00C49F' },
  { name: 'Tablet', value: 300, color: '#FFBB28' },
  { name: 'Others', value: 200, color: '#FF8042' },
]

const areaData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
]

export default function ChartsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">Charts</h1>
          <Badge>Stable</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A comprehensive collection of chart components built with Recharts. 
          Includes bar charts, line charts, pie charts, area charts, and more 
          with responsive design and customizable styling.
        </p>
      </div>

      {/* Bar Chart */}
      <CodePreview
        title="Bar Chart"
        description="Display data using vertical bars with multiple data series support"
        code={`import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Apr', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'Jun', sales: 2390, revenue: 3800 },
]

export function Example() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}`}
      >
        <div className="w-full h-[300px]">
          <ResponsiveContainer>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
              <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CodePreview>

      {/* Line Chart */}
      <CodePreview
        title="Line Chart"
        description="Track trends over time with smooth line visualizations"
        code={`import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Week 1', users: 400, sessions: 240 },
  { name: 'Week 2', users: 300, sessions: 139 },
  { name: 'Week 3', users: 200, sessions: 980 },
  { name: 'Week 4', users: 278, sessions: 390 },
]

export function Example() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="sessions" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}`}
      >
        <div className="w-full h-[300px]">
          <ResponsiveContainer>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="sessions" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CodePreview>

      {/* Pie Chart */}
      <CodePreview
        title="Pie Chart"
        description="Show proportional data with interactive pie slices"
        code={`import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const data = [
  { name: 'Desktop', value: 400, color: '#0088FE' },
  { name: 'Mobile', value: 300, color: '#00C49F' },
  { name: 'Tablet', value: 300, color: '#FFBB28' },
  { name: 'Others', value: 200, color: '#FF8042' },
]

export function Example() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => \`\${name} \${(percent * 100).toFixed(0)}%\`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={\`cell-\${index}\`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}`}
      >
        <div className="w-full h-[300px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CodePreview>

      {/* Area Chart */}
      <CodePreview
        title="Area Chart"
        description="Visualize data trends with filled areas under the curve"
        code={`import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
]

export function Example() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}`}
      >
        <div className="w-full h-[300px]">
          <ResponsiveContainer>
            <AreaChart data={areaData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CodePreview>

      {/* Installation */}
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            Charts are built with Recharts. Install the required dependency:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">npm install recharts</code>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>
            Key features of the Charts component library
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Responsive Design</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Automatically adapts to container size</li>
                <li>• Mobile-friendly responsive breakpoints</li>
                <li>• Flexible width and height configurations</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Interactive Features</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Hover tooltips with custom formatting</li>
                <li>• Clickable legends for data filtering</li>
                <li>• Animated transitions and updates</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Customizable Styling</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Custom colors and themes</li>
                <li>• Configurable axes and grid lines</li>
                <li>• Custom label and tooltip formatting</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Accessibility</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Screen reader compatible</li>
                <li>• Keyboard navigation support</li>
                <li>• High contrast mode support</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Common Props</CardTitle>
          <CardDescription>
            Frequently used props across chart components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-3 font-medium">Prop</th>
                  <th className="text-left p-3 font-medium">Type</th>
                  <th className="text-left p-3 font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-mono">data</td>
                  <td className="p-3 font-mono text-muted-foreground">Array&lt;object&gt;</td>
                  <td className="p-3">Data array for the chart</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">width</td>
                  <td className="p-3 font-mono text-muted-foreground">number</td>
                  <td className="p-3">Width of the chart (use ResponsiveContainer for responsive)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">height</td>
                  <td className="p-3 font-mono text-muted-foreground">number</td>
                  <td className="p-3">Height of the chart (use ResponsiveContainer for responsive)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">margin</td>
                  <td className="p-3 font-mono text-muted-foreground">object</td>
                  <td className="p-3">Margin around the chart</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono">className</td>
                  <td className="p-3 font-mono text-muted-foreground">string</td>
                  <td className="p-3">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}