import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
import { globalStyles } from "./styles/global"
import { useState } from 'react'

globalStyles()

export interface ITask {
  id: string;
  title: string;
}

export const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([])

  const setTasksAndSave = (newTasks: ITask[]) => {
    setTasks(newTasks)
  }

  const addTask = (taskTitle: string) => {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
      },
    ]);
  }
  const deleteTaskById = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasksAndSave(newTasks);
  }
  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks 
        tasks={tasks}
        onDelete={deleteTaskById}
      />
    </>
  )
}
