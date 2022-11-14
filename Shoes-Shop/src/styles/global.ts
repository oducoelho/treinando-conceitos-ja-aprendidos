import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: '$gray200',
  },

  body: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    margin: '100px 500px',
  }
})