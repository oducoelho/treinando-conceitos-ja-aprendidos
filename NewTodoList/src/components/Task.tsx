import { TasksContainer, TasksStatus } from "../styles/pages/Task"
import { ITask } from "../App"
import { Tasks } from "./Tasks"

interface Props {
  tasks: ITask[];
  onDelate: (taskId: string) => void;
  isCompleted: (taskId: string) => void;
}

export const Task = ({ tasks, onDelate, isCompleted }: Props) => {
  const tasksQuantity = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length

  return(
    <TasksContainer>
      <TasksStatus>
        <span>Tarefas criadas <strong>{tasksQuantity}</strong></span>
        <span>Concluidas <strong>{tasksCompleted}</strong> de <strong>{tasksQuantity}</strong></span>
      </TasksStatus>

      <div>
        {tasks.map((task) => (
          <Tasks
            key={task.id}
            tasks={task}
            isCompleted={isCompleted}
            onDelate={onDelate}
          />
        ))}
      </div>
    </TasksContainer>
  )
}