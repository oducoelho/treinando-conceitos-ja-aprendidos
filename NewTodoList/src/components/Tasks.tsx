import { AdditionalTasks, OnDelate, TextStyled } from "../styles/pages/Tasks"
import Circle from '../assets/circle.svg'
import trash from '../assets/trash.svg'
import CircleCheck from '../assets/circle-check.svg'
import { ITask } from "../App"

interface Props {
  tasks: ITask;
  onDelate: (taskId: string) => void;
  isCompleted: (taskId: string) => void;
}

export const Tasks = ({tasks, onDelate, isCompleted}: Props) => {
  return (
    <AdditionalTasks>
      <div>
        <button onClick={() => isCompleted(tasks.id)}>
          {tasks.isCompleted ?  <img src={CircleCheck } alt=" "/> : <img src={Circle} alt="" /> }
        </button>

        {tasks.isCompleted ? <TextStyled>{tasks.title}</TextStyled> : <p>{tasks.title}</p>}

      </div>

      <OnDelate onClick={() => onDelate(tasks.id)}>
        <img src={trash} alt="" />
      </OnDelate>
  </AdditionalTasks>
  )
}
