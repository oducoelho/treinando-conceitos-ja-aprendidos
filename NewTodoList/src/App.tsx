import { CreateTask } from "./components/CreateTask"
import { Header } from "./components/Header"
import { Task } from "./components/Task"
import { globalStyles } from "./styles/global"
import { useState } from 'react'

globalStyles()

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([])

  const addTask = (taskTitle: string) => {
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
    }])
  }
  const deleteTask = (taskId: string) => {
    const newTask = tasks.filter((task) => task.id !== taskId)
    setTasks(newTask)
  }
  const markTaskAsDone = (taskId: string) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })
    setTasks(newTask)
  }
  return (
    <div>
      <Header />
      <CreateTask onAddTask={addTask}/>
      <Task
        tasks={tasks}
        onDelate={deleteTask}
        isCompleted={markTaskAsDone}
      />
    </div>
  )
}
