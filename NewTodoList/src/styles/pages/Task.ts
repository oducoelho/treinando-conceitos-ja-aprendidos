import { styled } from "..";

export const TasksContainer = styled('div', {
  margin: '30px 620px',
})

export const TasksStatus = styled('div', {
  fontSize: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  color: '$blue',
  span: {
    color: 'white',
    padding: '2px 5px',
    borderRadius: 8,
    backgroundColor: '$gray400',
  },
})

export const TasksInList = styled('div', {

})

export const NoTasksEmpty = styled('div', {
  borderTop: '2px solid $gray400',
  borderRadius: 8,
  margin: '20px 0px',
  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  lineHeight: 1.6,

  img: {
    margin: '20px',
  },

  strong: {
    color: '$gray300'
  },
  span: {
    color: '$gray300'
  },
})