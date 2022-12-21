import { FormContainer } from "../styles/pages/CreateTask"
import { ChangeEvent, FormEvent, useState } from 'react'

interface TasksProps {
  onAddTask: (taskTitle: string) => void
}

export const CreateTask = ({ onAddTask }: TasksProps) => {
  const [title, setTitle] = useState("")
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    
    if (title.length === 0) {
      alert("Porfavor, insira um texto antes de proseguir")
    } else {
      onAddTask(title)
      setTitle("")
    }
  }

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input 
        placeholder="Adicione uma tarefa"
        type="text"  
        value={title}
        onChange={onChangeTitle}
      />
      <button>Criar +</button>
    </FormContainer>
  )
}