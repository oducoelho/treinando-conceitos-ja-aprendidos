import { styled } from "..";

export const TaskContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#ccc',
  borderRadius: '8px',
  margin: '20px 600px',
  height: '45px',
  padding: '15px',  

  div: {
    display: 'flex',
    gap: '0.5em',
  },

  button: {
    backgroundColor: '#ccc',
    border: 'none',
  }
})