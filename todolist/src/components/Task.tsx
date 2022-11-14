import { ITask } from "../App"
import { TaskContainer } from "../styles/pages/Task"
import { Trash } from "phosphor-react"

interface Props {
  task: ITask[]
  onDelete: (taskId: string) => void
}

export const Task = ({ task, onDelete }: Props) => {
  return (
    <TaskContainer>
      <div>
        <input type="checkbox" />
        <p>{task.title}</p>
      </div>

      <button onClick={() => onDelete(task.id)}>
        <Trash size={20} />
      </button>
    </TaskContainer>
  )
}
