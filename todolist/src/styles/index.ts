import { createStitches } from '@stitches/react'

export const {  
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',

      blue: '#2442AE',
      green: '#3b9c37',
      gray: '#3f3d47',
    },

    fontSizes: {
      sm:	'0.875rem',
      md:	'1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
    }
  }
})