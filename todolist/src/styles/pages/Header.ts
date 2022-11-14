import { NumberOne } from "phosphor-react";
import { styled } from "..";

export const HeaderContainer = styled('header', {
  backgroundColor: '$blue',
  width: '100%',
  height: '200px',
  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  h1: {
    color: '$white',
    marginTop: '60px'
  },
  div: {
    form: {
      marginTop: '100px',
      input: {  
        width: '500px',
        height: '45px',
        border: 'none',
        borderRadius: '8px',
        marginRight: '5px',
        padding: '15px',

        boxShadow: '0px 1px 50px #000',
      },
      button: {
        width: '80px',
        height: '45px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#2758E8',
        cursor: 'pointer',
        
        boxShadow: '0px 1px 50px #000',
      }
    }
  },
})