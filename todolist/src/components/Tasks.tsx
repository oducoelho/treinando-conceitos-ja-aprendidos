import { ITask } from "../App"
import { TasksContainer } from "../styles/pages/Tasks"
import { Task } from "./Task"

interface Props {
  tasks: ITask[]
  onDelete: (taskId: string) => void
}

export const Tasks = ({ tasks, onDelete }: Props) => {
  return (
    <TasksContainer>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
          />
        ))}
    </TasksContainer>
  )
}
