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
      gray100: '#F2F2F2',
      gray200: '#D9D9D9',
      gray300: '#808080',
      gray400: '#333333',
      gray500: '#262626',
      gray600: '#1A1A1A',
      gray700: '#0D0D0D',

      purple: '#8284FA',
      purpleDark: '#5E60CE',
      blue: '#4EA8DE',
      blueDark: '#1E6F9F',

      danger: '#E25858'
    },

    fontSizes: {
      ss: '1.2rem',
      sm: '1.4rem',
      md: '1.8rem',
      lg: '2.0rem',
      xl: '2.4rem',
      '2xl': '3.2rem',
      '3xl': '3.6rem',
    }
  }
})
