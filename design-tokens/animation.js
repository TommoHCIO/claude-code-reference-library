// Design Tokens - Animation System
// Motion design tokens for consistent animations and transitions

const animation = {
  // Timing Functions (Easing)
  easing: {
    // Standard easing curves
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Custom easing curves
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    anticipate: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    backIn: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    backOut: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    backInOut: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    
    // Material Design easing
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
  },

  // Duration Scale
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
    slowest: '1000ms',
    
    // Semantic durations
    micro: '100ms',    // Hover states, button feedback
    quick: '200ms',    // Dropdown menus, tooltips
    moderate: '300ms', // Modal dialogs, page transitions
    deliberate: '500ms', // Complex animations, loading states
    luxurious: '1000ms', // Emphasis animations, reveals
  },

  // Delay Scale
  delay: {
    none: '0ms',
    short: '100ms',
    medium: '200ms',
    long: '300ms',
    'extra-long': '500ms',
  },

  // Keyframe Animations
  keyframes: {
    // Fade animations
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    fadeOut: {
      '0%': { opacity: '1' },
      '100%': { opacity: '0' },
    },
    fadeInUp: {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    fadeInDown: {
      '0%': { opacity: '0', transform: 'translateY(-20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },

    // Scale animations
    scaleIn: {
      '0%': { opacity: '0', transform: 'scale(0.8)' },
      '100%': { opacity: '1', transform: 'scale(1)' },
    },
    scaleOut: {
      '0%': { opacity: '1', transform: 'scale(1)' },
      '100%': { opacity: '0', transform: 'scale(0.8)' },
    },

    // Slide animations
    slideInLeft: {
      '0%': { opacity: '0', transform: 'translateX(-100%)' },
      '100%': { opacity: '1', transform: 'translateX(0)' },
    },
    slideInRight: {
      '0%': { opacity: '0', transform: 'translateX(100%)' },
      '100%': { opacity: '1', transform: 'translateX(0)' },
    },
    slideInUp: {
      '0%': { opacity: '0', transform: 'translateY(100%)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    slideInDown: {
      '0%': { opacity: '0', transform: 'translateY(-100%)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },

    // Rotation animations
    spin: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    spinReverse: {
      '0%': { transform: 'rotate(360deg)' },
      '100%': { transform: 'rotate(0deg)' },
    },

    // Bounce animations
    bounce: {
      '0%, 100%': {
        transform: 'translateY(-25%)',
        'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
      },
      '50%': {
        transform: 'translateY(0)',
        'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },

    // Pulse animations
    pulse: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' },
    },
    heartbeat: {
      '0%': { transform: 'scale(1)' },
      '14%': { transform: 'scale(1.1)' },
      '28%': { transform: 'scale(1)' },
      '42%': { transform: 'scale(1.1)' },
      '70%': { transform: 'scale(1)' },
    },

    // Shake animation
    shake: {
      '0%, 100%': { transform: 'translateX(0)' },
      '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
      '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
    },

    // Loading animations
    loading: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    dots: {
      '0%, 80%, 100%': { transform: 'scale(0)' },
      '40%': { transform: 'scale(1)' },
    },
  },

  // Predefined animations
  animations: {
    // Basic animations
    'fade-in': 'fadeIn 200ms ease-out',
    'fade-out': 'fadeOut 200ms ease-in',
    'fade-in-up': 'fadeInUp 300ms ease-out',
    'fade-in-down': 'fadeInDown 300ms ease-out',
    
    // Scale animations
    'scale-in': 'scaleIn 200ms ease-out',
    'scale-out': 'scaleOut 200ms ease-in',
    
    // Slide animations
    'slide-in-left': 'slideInLeft 300ms ease-out',
    'slide-in-right': 'slideInRight 300ms ease-out',
    'slide-in-up': 'slideInUp 300ms ease-out',
    'slide-in-down': 'slideInDown 300ms ease-out',
    
    // Utility animations
    'spin': 'spin 1s linear infinite',
    'bounce': 'bounce 1s infinite',
    'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
    'shake': 'shake 0.5s ease-in-out',
    
    // Loading animations
    'loading': 'loading 1s linear infinite',
    'dots': 'dots 1.4s ease-in-out infinite both',
  },

  // Transition Properties
  transitions: {
    // Common transition properties
    all: 'all',
    colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform',
    
    // Component-specific transitions
    button: 'background-color, border-color, color, box-shadow, transform',
    input: 'border-color, box-shadow',
    modal: 'opacity, transform',
    dropdown: 'opacity, transform',
  },

  // Motion preferences
  motion: {
    // Reduced motion media query handling
    respectMotionPreference: true,
    
    // Default reduced motion alternatives
    reducedMotion: {
      duration: '0.01ms !important',
      delay: '0.01ms !important',
      'animation-iteration-count': '1 !important',
      'scroll-behavior': 'auto !important',
    },
  },

  // Stagger configurations for orchestrated animations
  stagger: {
    short: '50ms',
    medium: '100ms',
    long: '150ms',
  },
}

// Generate CSS for animations
export const generateAnimationCSS = () => {
  let css = ''

  // Generate keyframes
  Object.entries(animation.keyframes).forEach(([name, keyframe]) => {
    css += `@keyframes ${name} {\n`
    Object.entries(keyframe).forEach(([step, styles]) => {
      css += `  ${step} {\n`
      if (typeof styles === 'object') {
        Object.entries(styles).forEach(([prop, value]) => {
          css += `    ${prop}: ${value};\n`
        })
      }
      css += `  }\n`
    })
    css += `}\n\n`
  })

  // Generate animation utilities
  Object.entries(animation.animations).forEach(([name, value]) => {
    css += `.animate-${name} {\n`
    css += `  animation: ${value};\n`
    css += `}\n\n`
  })

  // Generate transition utilities
  Object.entries(animation.transitions).forEach(([name, value]) => {
    css += `.transition-${name} {\n`
    css += `  transition-property: ${value};\n`
    css += `  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n`
    css += `  transition-duration: 150ms;\n`
    css += `}\n\n`
  })

  // Add reduced motion support
  css += `@media (prefers-reduced-motion: reduce) {\n`
  css += `  *, ::before, ::after {\n`
  Object.entries(animation.motion.reducedMotion).forEach(([prop, value]) => {
    css += `    ${prop}: ${value};\n`
  })
  css += `  }\n`
  css += `}\n`

  return css
}

// Tailwind CSS Animation Configuration
export const tailwindAnimation = {
  keyframes: animation.keyframes,
  animation: Object.fromEntries(
    Object.entries(animation.animations).map(([key, value]) => [
      key.replace('animate-', ''),
      value
    ])
  ),
  transitionDuration: animation.duration,
  transitionDelay: animation.delay,
  transitionTimingFunction: animation.easing,
  transitionProperty: animation.transitions,
}

export default animation