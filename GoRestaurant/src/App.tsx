import { Home } from "./components/Home"
import { Plates } from "./components/Plates"
import { ModalContextProvider } from "./context/ModalContext"
import { globalStyles } from "./styles/global"

globalStyles()

export const App = () => {
  return (
    <ModalContextProvider>
      <Home />
      <Plates />
    </ModalContextProvider>
  )
}
