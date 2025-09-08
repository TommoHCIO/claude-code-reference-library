// Design Tokens - Typography System
// Comprehensive type scale with font families, weights, and responsive sizing

const typography = {
  // Font Families
  fontFamily: {
    sans: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'sans-serif'
    ],
    serif: [
      'Georgia',
      'Times',
      'Times New Roman',
      'serif'
    ],
    mono: [
      'Roboto Mono',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace'
    ],
  },

  // Font Weights
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  // Font Sizes (with line heights)
  fontSize: {
    xs: {
      size: '0.75rem',     // 12px
      lineHeight: '1rem',  // 16px
      letterSpacing: '0.05em',
    },
    sm: {
      size: '0.875rem',    // 14px
      lineHeight: '1.25rem', // 20px
      letterSpacing: '0.025em',
    },
    base: {
      size: '1rem',        // 16px
      lineHeight: '1.5rem', // 24px
      letterSpacing: '0',
    },
    lg: {
      size: '1.125rem',    // 18px
      lineHeight: '1.75rem', // 28px
      letterSpacing: '0',
    },
    xl: {
      size: '1.25rem',     // 20px
      lineHeight: '1.75rem', // 28px
      letterSpacing: '0',
    },
    '2xl': {
      size: '1.5rem',      // 24px
      lineHeight: '2rem',   // 32px
      letterSpacing: '-0.025em',
    },
    '3xl': {
      size: '1.875rem',    // 30px
      lineHeight: '2.25rem', // 36px
      letterSpacing: '-0.025em',
    },
    '4xl': {
      size: '2.25rem',     // 36px
      lineHeight: '2.5rem', // 40px
      letterSpacing: '-0.025em',
    },
    '5xl': {
      size: '3rem',        // 48px
      lineHeight: '1',      // 48px
      letterSpacing: '-0.025em',
    },
    '6xl': {
      size: '3.75rem',     // 60px
      lineHeight: '1',      // 60px
      letterSpacing: '-0.025em',
    },
    '7xl': {
      size: '4.5rem',      // 72px
      lineHeight: '1',      // 72px
      letterSpacing: '-0.025em',
    },
    '8xl': {
      size: '6rem',        // 96px
      lineHeight: '1',      // 96px
      letterSpacing: '-0.025em',
    },
    '9xl': {
      size: '8rem',        // 128px
      lineHeight: '1',      // 128px
      letterSpacing: '-0.025em',
    },
  },

  // Responsive Typography Scale
  responsive: {
    // Mobile First Approach
    mobile: {
      h1: {
        fontSize: '2.25rem',      // 36px
        lineHeight: '2.5rem',     // 40px
        fontWeight: 800,
        letterSpacing: '-0.025em',
      },
      h2: {
        fontSize: '1.875rem',     // 30px
        lineHeight: '2.25rem',    // 36px
        fontWeight: 700,
        letterSpacing: '-0.025em',
      },
      h3: {
        fontSize: '1.5rem',       // 24px
        lineHeight: '2rem',       // 32px
        fontWeight: 600,
        letterSpacing: '0',
      },
      h4: {
        fontSize: '1.25rem',      // 20px
        lineHeight: '1.75rem',    // 28px
        fontWeight: 600,
        letterSpacing: '0',
      },
      h5: {
        fontSize: '1.125rem',     // 18px
        lineHeight: '1.75rem',    // 28px
        fontWeight: 500,
        letterSpacing: '0',
      },
      h6: {
        fontSize: '1rem',         // 16px
        lineHeight: '1.5rem',     // 24px
        fontWeight: 500,
        letterSpacing: '0',
      },
      body: {
        fontSize: '1rem',         // 16px
        lineHeight: '1.5rem',     // 24px
        fontWeight: 400,
        letterSpacing: '0',
      },
      caption: {
        fontSize: '0.875rem',     // 14px
        lineHeight: '1.25rem',    // 20px
        fontWeight: 400,
        letterSpacing: '0.025em',
      },
    },

    // Desktop Scaling
    desktop: {
      h1: {
        fontSize: '4.5rem',       // 72px
        lineHeight: '1',          // 72px
        fontWeight: 800,
        letterSpacing: '-0.025em',
      },
      h2: {
        fontSize: '3.75rem',      // 60px
        lineHeight: '1',          // 60px
        fontWeight: 700,
        letterSpacing: '-0.025em',
      },
      h3: {
        fontSize: '3rem',         // 48px
        lineHeight: '1',          // 48px
        fontWeight: 600,
        letterSpacing: '-0.025em',
      },
      h4: {
        fontSize: '2.25rem',      // 36px
        lineHeight: '2.5rem',     // 40px
        fontWeight: 600,
        letterSpacing: '-0.025em',
      },
      h5: {
        fontSize: '1.875rem',     // 30px
        lineHeight: '2.25rem',    // 36px
        fontWeight: 500,
        letterSpacing: '0',
      },
      h6: {
        fontSize: '1.5rem',       // 24px
        lineHeight: '2rem',       // 32px
        fontWeight: 500,
        letterSpacing: '0',
      },
      body: {
        fontSize: '1.125rem',     // 18px
        lineHeight: '1.75rem',    // 28px
        fontWeight: 400,
        letterSpacing: '0',
      },
      caption: {
        fontSize: '1rem',         // 16px
        lineHeight: '1.5rem',     // 24px
        fontWeight: 400,
        letterSpacing: '0',
      },
    },
  },

  // Text Styles (Semantic)
  textStyles: {
    display: {
      large: {
        fontSize: '3.75rem',      // 60px
        lineHeight: '1',          // 60px
        fontWeight: 800,
        letterSpacing: '-0.025em',
        fontFamily: 'sans',
      },
      medium: {
        fontSize: '3rem',         // 48px
        lineHeight: '1',          // 48px
        fontWeight: 700,
        letterSpacing: '-0.025em',
        fontFamily: 'sans',
      },
      small: {
        fontSize: '2.25rem',      // 36px
        lineHeight: '2.5rem',     // 40px
        fontWeight: 600,
        letterSpacing: '-0.025em',
        fontFamily: 'sans',
      },
    },
    headline: {
      large: {
        fontSize: '1.875rem',     // 30px
        lineHeight: '2.25rem',    // 36px
        fontWeight: 600,
        letterSpacing: '0',
        fontFamily: 'sans',
      },
      medium: {
        fontSize: '1.5rem',       // 24px
        lineHeight: '2rem',       // 32px
        fontWeight: 500,
        letterSpacing: '0',
        fontFamily: 'sans',
      },
      small: {
        fontSize: '1.25rem',      // 20px
        lineHeight: '1.75rem',    // 28px
        fontWeight: 500,
        letterSpacing: '0',
        fontFamily: 'sans',
      },
    },
    body: {
      large: {
        fontSize: '1.125rem',     // 18px
        lineHeight: '1.75rem',    // 28px
        fontWeight: 400,
        letterSpacing: '0',
        fontFamily: 'sans',
      },
      medium: {
        fontSize: '1rem',         // 16px
        lineHeight: '1.5rem',     // 24px
        fontWeight: 400,
        letterSpacing: '0',
        fontFamily: 'sans',
      },
      small: {
        fontSize: '0.875rem',     // 14px
        lineHeight: '1.25rem',    // 20px
        fontWeight: 400,
        letterSpacing: '0.025em',
        fontFamily: 'sans',
      },
    },
    label: {
      large: {
        fontSize: '1rem',         // 16px
        lineHeight: '1.5rem',     // 24px
        fontWeight: 500,
        letterSpacing: '0',
        fontFamily: 'sans',
      },
      medium: {
        fontSize: '0.875rem',     // 14px
        lineHeight: '1.25rem',    // 20px
        fontWeight: 500,
        letterSpacing: '0.025em',
        fontFamily: 'sans',
      },
      small: {
        fontSize: '0.75rem',      // 12px
        lineHeight: '1rem',       // 16px
        fontWeight: 500,
        letterSpacing: '0.05em',
        fontFamily: 'sans',
      },
    },
  },
}

// Generate CSS Variables for Typography
export const generateTypographyCSS = () => {
  const variables = {}

  // Font families
  Object.entries(typography.fontFamily).forEach(([key, value]) => {
    variables[`--font-${key}`] = value.join(', ')
  })

  // Font weights
  Object.entries(typography.fontWeight).forEach(([key, value]) => {
    variables[`--font-weight-${key}`] = value
  })

  // Font sizes
  Object.entries(typography.fontSize).forEach(([key, value]) => {
    variables[`--font-size-${key}`] = value.size
    variables[`--line-height-${key}`] = value.lineHeight
    variables[`--letter-spacing-${key}`] = value.letterSpacing
  })

  return variables
}

// Tailwind CSS Typography Configuration
export const tailwindTypography = {
  fontFamily: typography.fontFamily,
  fontWeight: typography.fontWeight,
  fontSize: Object.fromEntries(
    Object.entries(typography.fontSize).map(([key, value]) => [
      key,
      [value.size, { lineHeight: value.lineHeight, letterSpacing: value.letterSpacing }]
    ])
  ),
}

export default typography