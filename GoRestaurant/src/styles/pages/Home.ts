import { styled } from "..";

export const Header = styled('header', {
  background: '$red',
  height: '300px',
  
  div: {
    padding: '70px 200px',

    display: 'flex',
    justifyContent: 'space-between',

    button: {
      width: '150px',
      height: '45px',
      borderRadius: 8,
      border: 8,
      background: '$green300',
      cursor: 'pointer',
      
    },
  },
})