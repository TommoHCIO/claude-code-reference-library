// Design Tokens - Spacing System
// Consistent spacing scale based on 4px base unit

const spacing = {
  // Base spacing scale (4px increments)
  scale: {
    0: '0',
    1: '0.25rem',    // 4px
    2: '0.5rem',     // 8px
    3: '0.75rem',    // 12px
    4: '1rem',       // 16px
    5: '1.25rem',    // 20px
    6: '1.5rem',     // 24px
    7: '1.75rem',    // 28px
    8: '2rem',       // 32px
    9: '2.25rem',    // 36px
    10: '2.5rem',    // 40px
    11: '2.75rem',   // 44px
    12: '3rem',      // 48px
    14: '3.5rem',    // 56px
    16: '4rem',      // 64px
    20: '5rem',      // 80px
    24: '6rem',      // 96px
    28: '7rem',      // 112px
    32: '8rem',      // 128px
    36: '9rem',      // 144px
    40: '10rem',     // 160px
    44: '11rem',     // 176px
    48: '12rem',     // 192px
    52: '13rem',     // 208px
    56: '14rem',     // 224px
    60: '15rem',     // 240px
    64: '16rem',     // 256px
    72: '18rem',     // 288px
    80: '20rem',     // 320px
    96: '24rem',     // 384px
  },

  // Semantic spacing (component-specific)
  component: {
    // Button spacing
    button: {
      paddingX: {
        sm: '0.75rem',      // 12px
        md: '1rem',         // 16px
        lg: '1.5rem',       // 24px
        xl: '2rem',         // 32px
      },
      paddingY: {
        sm: '0.375rem',     // 6px
        md: '0.5rem',       // 8px
        lg: '0.75rem',      // 12px
        xl: '1rem',         // 16px
      },
      gap: '0.5rem',        // 8px
    },

    // Card spacing
    card: {
      padding: {
        sm: '1rem',         // 16px
        md: '1.5rem',       // 24px
        lg: '2rem',         // 32px
        xl: '2.5rem',       // 40px
      },
      gap: '1rem',          // 16px
    },

    // Form spacing
    form: {
      fieldGap: '1rem',     // 16px
      labelGap: '0.5rem',   // 8px
      inputPadding: {
        x: '0.75rem',       // 12px
        y: '0.625rem',      // 10px
      },
      groupGap: '1.5rem',   // 24px
    },

    // Navigation spacing
    navigation: {
      itemPadding: {
        x: '1rem',          // 16px
        y: '0.5rem',        // 8px
      },
      itemGap: '0.25rem',   // 4px
      sectionGap: '1.5rem', // 24px
    },

    // List spacing
    list: {
      itemGap: '0.5rem',    // 8px
      itemPadding: '0.75rem', // 12px
      nestedIndent: '1.5rem', // 24px
    },
  },

  // Layout spacing
  layout: {
    // Container spacing
    container: {
      paddingX: {
        sm: '1rem',         // 16px
        md: '1.5rem',       // 24px
        lg: '2rem',         // 32px
        xl: '2.5rem',       // 40px
      },
      maxWidth: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },

    // Section spacing
    section: {
      paddingY: {
        sm: '2rem',         // 32px
        md: '3rem',         // 48px
        lg: '4rem',         // 64px
        xl: '5rem',         // 80px
        '2xl': '6rem',      // 96px
      },
      gap: {
        sm: '1.5rem',       // 24px
        md: '2rem',         // 32px
        lg: '2.5rem',       // 40px
        xl: '3rem',         // 48px
      },
    },

    // Grid spacing
    grid: {
      gap: {
        sm: '1rem',         // 16px
        md: '1.5rem',       // 24px
        lg: '2rem',         // 32px
        xl: '2.5rem',       // 40px
      },
      columnGap: {
        sm: '1rem',         // 16px
        md: '1.5rem',       // 24px
        lg: '2rem',         // 32px
      },
      rowGap: {
        sm: '1rem',         // 16px
        md: '1.5rem',       // 24px
        lg: '2rem',         // 32px
      },
    },
  },

  // Border radius scale
  borderRadius: {
    none: '0',
    sm: '0.125rem',       // 2px
    DEFAULT: '0.25rem',   // 4px
    md: '0.375rem',       // 6px
    lg: '0.5rem',         // 8px
    xl: '0.75rem',        // 12px
    '2xl': '1rem',        // 16px
    '3xl': '1.5rem',      // 24px
    full: '9999px',
  },

  // Border width scale
  borderWidth: {
    0: '0',
    DEFAULT: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  },

  // Shadow scale
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none',
  },

  // Z-index scale
  zIndex: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    auto: 'auto',
    // Semantic z-index values
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
    toast: 1080,
  },
}

// Responsive breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

// Generate CSS Variables for Spacing
export const generateSpacingCSS = () => {
  const variables = {}

  // Base spacing scale
  Object.entries(spacing.scale).forEach(([key, value]) => {
    variables[`--spacing-${key}`] = value
  })

  // Border radius
  Object.entries(spacing.borderRadius).forEach(([key, value]) => {
    const cssKey = key === 'DEFAULT' ? 'default' : key
    variables[`--radius-${cssKey}`] = value
  })

  // Border width
  Object.entries(spacing.borderWidth).forEach(([key, value]) => {
    const cssKey = key === 'DEFAULT' ? 'default' : key
    variables[`--border-width-${cssKey}`] = value
  })

  // Z-index
  Object.entries(spacing.zIndex).forEach(([key, value]) => {
    variables[`--z-${key}`] = value
  })

  return variables
}

// Tailwind CSS Spacing Configuration
export const tailwindSpacing = {
  spacing: spacing.scale,
  borderRadius: spacing.borderRadius,
  borderWidth: spacing.borderWidth,
  boxShadow: spacing.boxShadow,
  zIndex: spacing.zIndex,
  screens: breakpoints,
}

export default spacing