import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: '$gray600',

    '::-webkit-scrollbar': {
      width: '7px',
    },

    '::-webkit-scrollbar-track': {
      background: '#000000',
    },

    '::-webkit-scrollbar-thumb': {
      background: '$gray100',
      borderRadius: '0.5rem',
    },

    '::-webkit-scrollbar-thumb:hover': {
      background: '$gray300',
    }
  },
  
  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
})

