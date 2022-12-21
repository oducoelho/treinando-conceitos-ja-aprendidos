import { styled } from "..";

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-20px',
  backgroundColor: 'transparent',
  input: {
    height: '45px',
    width: '30%',

    backgroundColor: '$gray500',
    borderRadius: 8,
    border: 'none',
    padding: '20px',

    color: 'white',
  },
  button: {
    height: '45px',
    width: '5%',

    border: 'none',
    backgroundColor: '$blueDark',
    color: 'white',
    borderRadius: 8,
    marginLeft: '10px',

    cursor: 'pointer',
  }
})