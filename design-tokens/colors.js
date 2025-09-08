// Design Tokens - Color System
// Based on modern design systems with support for light/dark themes

const colors = {
  // Brand Colors
  brand: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },

  // Semantic Colors
  semantic: {
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },
    info: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
  },

  // Neutral Colors (Grayscale)
  neutral: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
    1000: '#000000',
  },

  // Theme-specific Color Mappings
  light: {
    background: {
      primary: '#ffffff',
      secondary: '#fafafa',
      tertiary: '#f5f5f5',
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    foreground: {
      primary: '#171717',
      secondary: '#525252',
      tertiary: '#a3a3a3',
      inverse: '#ffffff',
    },
    border: {
      primary: '#e5e5e5',
      secondary: '#d4d4d4',
      focus: '#3b82f6',
    },
    surface: {
      primary: '#ffffff',
      secondary: '#fafafa',
      tertiary: '#f5f5f5',
      elevated: '#ffffff',
    },
  },

  dark: {
    background: {
      primary: '#0a0a0a',
      secondary: '#171717',
      tertiary: '#262626',
      overlay: 'rgba(0, 0, 0, 0.8)',
    },
    foreground: {
      primary: '#fafafa',
      secondary: '#a3a3a3',
      tertiary: '#525252',
      inverse: '#171717',
    },
    border: {
      primary: '#404040',
      secondary: '#525252',
      focus: '#60a5fa',
    },
    surface: {
      primary: '#171717',
      secondary: '#262626',
      tertiary: '#404040',
      elevated: '#262626',
    },
  },

  // Interactive States
  interactive: {
    light: {
      hover: 'rgba(0, 0, 0, 0.05)',
      active: 'rgba(0, 0, 0, 0.1)',
      focus: 'rgba(59, 130, 246, 0.1)',
      disabled: 'rgba(0, 0, 0, 0.05)',
    },
    dark: {
      hover: 'rgba(255, 255, 255, 0.05)',
      active: 'rgba(255, 255, 255, 0.1)',
      focus: 'rgba(96, 165, 250, 0.1)',
      disabled: 'rgba(255, 255, 255, 0.05)',
    },
  },
}

// CSS Custom Properties Generator
export const generateCSSVariables = (theme = 'light') => {
  const themeColors = colors[theme]
  const variables = {}

  // Generate CSS variables for theme colors
  Object.entries(themeColors).forEach(([category, shades]) => {
    if (typeof shades === 'object') {
      Object.entries(shades).forEach(([shade, value]) => {
        variables[`--color-${category}-${shade}`] = value
      })
    }
  })

  // Add brand and semantic colors
  Object.entries(colors.brand).forEach(([shade, value]) => {
    variables[`--color-brand-${shade}`] = value
  })

  Object.entries(colors.semantic).forEach(([category, shades]) => {
    Object.entries(shades).forEach(([shade, value]) => {
      variables[`--color-${category}-${shade}`] = value
    })
  })

  // Add neutral colors
  Object.entries(colors.neutral).forEach(([shade, value]) => {
    variables[`--color-neutral-${shade}`] = value
  })

  return variables
}

// Tailwind CSS Color Configuration
export const tailwindColors = {
  brand: colors.brand,
  success: colors.semantic.success,
  warning: colors.semantic.warning,
  error: colors.semantic.error,
  info: colors.semantic.info,
  neutral: colors.neutral,
  
  // Semantic mappings
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  card: 'hsl(var(--card))',
  'card-foreground': 'hsl(var(--card-foreground))',
  popover: 'hsl(var(--popover))',
  'popover-foreground': 'hsl(var(--popover-foreground))',
  primary: 'hsl(var(--primary))',
  'primary-foreground': 'hsl(var(--primary-foreground))',
  secondary: 'hsl(var(--secondary))',
  'secondary-foreground': 'hsl(var(--secondary-foreground))',
  muted: 'hsl(var(--muted))',
  'muted-foreground': 'hsl(var(--muted-foreground))',
  accent: 'hsl(var(--accent))',
  'accent-foreground': 'hsl(var(--accent-foreground))',
  destructive: 'hsl(var(--destructive))',
  'destructive-foreground': 'hsl(var(--destructive-foreground))',
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
}

export default colors