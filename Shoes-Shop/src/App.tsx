import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { globalStyles } from './styles/global'


globalStyles()

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
