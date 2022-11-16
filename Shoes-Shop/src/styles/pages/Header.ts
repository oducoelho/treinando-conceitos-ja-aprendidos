import { styled } from '..'

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '25px',
  div: {
    display: 'flex',
    textDecoration: 0,
    color: '$white',
    gap: '10px',
    div: {
      display: 'block',
      p: {
        color: '$gray100',
      },
    },
  },
})
