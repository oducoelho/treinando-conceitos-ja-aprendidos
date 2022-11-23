import { styled } from "..";

export const DialogOverlay = styled('div', {
  backgroundColor: 'var(--blackA9)',
  position: 'fixed',
  inset: 0,
  animation: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
})
export const DialogContent = styled('div', {
  backgroundColor: '$white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: '25px',
  animation: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',


  '&:focus': {
    outline: 'none',
  },
})
export const DialogTitle = styled('div', {
  margin: 0,
  fontWeight: 500,
  color: 'var(--mauve12)',
  fontSize: '17px',
})
export const DialogDescription = styled('div', {
  margin: '10px 0 20px',
  color: 'var(--mauve11)',
  fontSize: '15px',
  lineHeight: 1.5,
})
export const Button = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  padding: '0 15px',
  fontSize: '15px',
  lineHeight: 1,
  fontHeight: 500,
  height: '35px',
}) 
export const IconButton = styled('div', {
  fontDamily: 'inherit',
  borderRadius: '100%',
  height: '25px',
  width: '25px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--violet11)',
  position: 'absolute',
  top: '10px',
  right: '10px',

  '&:hover': {
    backgroundColor: 'var(--violet4)',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px var(--violet7)',
  }
})
export const Fieldset = styled('div', {
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  marginBottom: '15px',
}) 