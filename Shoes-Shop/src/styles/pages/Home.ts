import { styled } from '..'

export const HomeContainer = styled('section', {})
export const Shoes = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '10px',
  div: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    flexDirection: 'column',

    width: '100%',
    backgroundColor: '$white',
    borderRadius: 8,

    img: {
      marginTop: '10px',
      width: '200px',
      height: '200px',
      borderRadius: 8,
    },

    h2: {
      fontSize: '$md',
      backgroundColor: 'transparent',
    },

    span: {
      backgroundColor: 'transparent',
    },

    button: {
      width: '80%',
      height: '30px',
      backgroundColor: '$purple',
      border: 0,
      borderRadius: 8,
      cursor: 'pointer',
      marginBottom: '10px',
    },
  },
})
