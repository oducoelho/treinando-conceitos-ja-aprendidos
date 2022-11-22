import { styled } from "..";

export const PlatesContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  margin: '0 300px',
  marginTop: 'calc(0px - 4.5rem - 3px)',

  img: {
    width: '352px',
  },

  div: {
    backgroundColor: '$white200',
    width: '352px',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
})
export const Context = styled('div', {
  padding: '20px',
  
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$md',
  },

  p: {
    lineHeight: 1.6,
  },

  span: {
    paddingTop: '10px',
    fontSize: '$sm',
    color: '$green300',
  },
})
export const Checkout = styled('div', {
  padding: '20px',

  display: 'flex',
  flexDirection: 'row',
  gap: '20px',

  div: {
    width: '30px',
    height: '30px',
    borderRadius: 8,
    backgroundColor: '$white',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    cursor: 'pointer',
  },
})