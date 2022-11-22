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
      red: '#d43a2c',
      black: 'black',
      
      white: '#fff',
      white100: '#ffffff80;',
      white200: '#FBFBFB',
      white300: '#F5F3FE',
      
      green300: '#00b37e',
      green500: '#00875f',
      green700: '#015f43',
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