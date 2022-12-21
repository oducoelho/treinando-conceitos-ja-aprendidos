import { NoTasksEmpty, TasksContainer, TasksInList, TasksStatus } from "../styles/pages/Task"
import { ITask } from "../App"
import { Tasks } from "./Tasks"
import Clipboard from "../assets/Clipboard.svg"

interface Props {
  tasks: ITask[];
  onDelate: (taskId: string) => void;
  isCompleted: (taskId: string) => void;
}

export const Task = ({ tasks, onDelate, isCompleted }: Props) => {
  const tasksQuantity = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length

  return (
    <TasksContainer>
      <TasksStatus>
        <p>Tarefas criadas <span>{tasksQuantity}</span></p>
        <p>Concluidas <span>{tasksCompleted} de {tasksQuantity}</span></p>
      </TasksStatus>

      <TasksInList>
        {
          tasks.length === 0 ?
            <NoTasksEmpty>
              <img src={Clipboard} alt="" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </NoTasksEmpty>
            :
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
        }
      </TasksInList>
    </TasksContainer>
  )
}