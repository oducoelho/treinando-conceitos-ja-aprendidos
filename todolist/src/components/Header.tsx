import { HeaderContainer } from "../styles/pages/Header"
import { useState, FormEvent } from 'react'

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export const Header = ({ onAddTask }: Props) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    onAddTask(title);
    setTitle("");
  }

  return (
    <HeaderContainer>

      <h1>To Do List</h1>
      
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="What's your task?"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    </HeaderContainer>
  )
}
