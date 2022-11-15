import { BrowserRouter } from 'react-router-dom'
import { CartContextProvaider } from './context/CartContext'
import { Router } from './Router'
import { globalStyles } from './styles/global'

globalStyles()

export const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvaider>
        <Router />
      </CartContextProvaider>
    </BrowserRouter>
  )
}
