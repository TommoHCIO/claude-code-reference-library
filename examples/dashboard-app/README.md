# Dashboard Application Example

A comprehensive dashboard application showcasing the Claude Code reference library components in a real-world scenario.

## Features

- **Modern Dashboard Layout**: Responsive sidebar navigation with collapsible sections
- **Data Visualization**: Interactive charts and metrics using Recharts
- **Form Handling**: Complete forms with validation using React Hook Form + Zod
- **Theme System**: Dark/light mode with system preference detection
- **Real-time Updates**: Simulated real-time data updates and notifications
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices

## Components Showcased

### Layout Components
- Responsive Sidebar Navigation
- Header with theme toggle and user menu
- Card-based content organization
- Grid layouts for responsive content

### Data Display
- Bar Charts for revenue analytics
- Line Charts for trend analysis
- Pie Charts for user demographics
- Area Charts for performance metrics
- Data tables with sorting and pagination
- Statistics cards with trending indicators

### Form Components
- User profile forms with validation
- Settings panels with various input types
- Search functionality with filters
- File upload components

### Interactive Elements
- Loading states and skeletons
- Toast notifications
- Modal dialogs
- Tooltip information
- Progress indicators

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3001](http://localhost:3001) in your browser

## Project Structure

```
dashboard-app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Base UI components
│   │   ├── charts/           # Chart components
│   │   ├── forms/            # Form components
│   │   └── layout/           # Layout components
│   ├── lib/                  # Utility functions
│   ├── hooks/                # Custom React hooks
│   └── data/                 # Mock data and API functions
├── public/                   # Static assets
└── package.json
```

## Key Technologies

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Recharts** - Chart library for data visualization
- **React Hook Form** - Performant form handling
- **Zod** - Schema validation
- **Framer Motion** - Animation library
- **Next Themes** - Theme management

## Learning Points

This example demonstrates:

1. **Component Composition**: How to combine multiple UI components effectively
2. **State Management**: Managing complex application state
3. **Data Flow**: Handling data from APIs and user interactions
4. **Responsive Design**: Creating layouts that work across devices
5. **Accessibility**: Implementing WCAG compliant interfaces
6. **Performance**: Optimizing for speed and user experience

## Customization

All components can be easily customized by:

- Modifying Tailwind classes for styling changes
- Updating design tokens in the CSS variables
- Extending component props for additional functionality
- Adding new chart types or data sources

## Deployment

The application can be deployed to any Next.js-compatible platform:

- Vercel (recommended)
- Netlify
- Railway
- Self-hosted with Docker

Build for production:
```bash
npm run build
npm start
```