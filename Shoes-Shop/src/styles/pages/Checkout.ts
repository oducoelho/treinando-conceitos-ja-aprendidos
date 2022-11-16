import { styled } from '..'

export const CheckoutContainer = styled('section', {
  width: '100%',
  padding: '20px',
  backgroundColor: '$white',
  h1: {
    fontWeight: 'bold',
    backgroundColor: '$white',
  },
})
export const Products = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '20px',
  borderBottom: '1px solid $gray100',

  backgroundColor: '$transparent',
  img: {
    width: '100px',
    height: '100px',
    borderRadius: 8,
  },

  div: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '$transparent',

    div: {
      paddingLeft: '10px',
      display: 'flex',
      flexDirection: 'column',
      span: {
        marginTop: '10px',
        backgroundColor: '$transparent',
      },
      p: {
        backgroundColor: '$transparent',
        fontWeight: 'bold',
      },
    },
  },
})
export const PartOfTheCheckout = styled('div', {
  div: {
    width: '40px',
    height: '32px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    borderRadius: '8px',
    fontFamily: 'Roboto',
    div: {
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'row',
      span: {
        cursor: 'pointer',
      },
    },
  },
  gap: '100px',
  marginTop: '10px',
  span: {
    svg: {
      backgroundColor: '$white',
      TransitionEvent: '0.5s',
      '&:hover': {
        cursor: 'pointer',
        color: 'red',
      },
    },
    backgroundColor: '$white',
  },
})
export const Finish = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '$white',

  'button, span, strong': {
    marginTop: '30px',
    backgroundColor: '$white',
  },

  button: {
    border: 0,
    backgroundColor: '$purple',
    padding: '10px',
    borderRadius: 8,
    fontWeight: 'bold',
    color: '$white',
    cursor: 'pointer',
  },

  span: {
    fontSize: 'x-large',
    fontWeight: 'bold',
  },
  strong: {
    fontSize: '$sm',
    color: '$gray100',
    paddingLeft: '10px',
  },
})
