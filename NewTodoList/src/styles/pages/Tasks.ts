import { styled } from "@stitches/react";

export const AdditionalTasks = styled('div', {
  backgroundColor: '$gray500',
  border: '1px solid $gray400',
  padding: '16px',
  borderRadius: 8,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '14px',

  marginTop: '15px',
  div: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  p: {
    backgroundColor: 'transparent',
    color: '#F2F2F2',
  },
  button: {
    marginRight: '10px',
    backgroundColor: '$gray500',
    border: 'none',
    cursor: 'pointer',
    img: {
      backgroundColor: '$gray500',
    }
  },
})

export const TextStyled = styled('div', {
  textDecoration: 'line-through',
  color: '$gray300',
})

export const OnDelate = styled('div', {
  cursor: 'pointer',
})
