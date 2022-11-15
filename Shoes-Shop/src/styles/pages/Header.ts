import { styled } from '..'

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  color: '$white',

  div: {
    display: 'flex',
    gap: '10px',
    div: {
      display: 'block',
      p: {
        color: '$gray100',
      },
    },
  },
})
