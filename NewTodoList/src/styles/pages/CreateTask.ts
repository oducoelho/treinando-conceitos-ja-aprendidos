import { styled } from "..";

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '-20px 2% 0px 2%',
  backgroundColor: 'transparent',
  input: {
    height: '45px',
    width: '638px',

    backgroundColor: '$gray500',
    borderRadius: 8,
    border: 'none',
    padding: '20px',

    color: 'white',
  },
  button: {
    height: '45px',
    width: '90px',

    border: 'none',
    backgroundColor: '$blueDark',
    color: 'white',
    borderRadius: 8,
    marginLeft: '8px',

    cursor: 'pointer',

    '&:hover': {
      transition: 'all 100ms',
      backgroundColor: '$blue',
    }
  }
})