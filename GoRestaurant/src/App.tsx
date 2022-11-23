import { Home } from "./components/Home"
import { Plates } from "./components/Plates"
import { globalStyles } from "./styles/global"

globalStyles()

export const App = () => {
  return (
    <div>
      <Home />
      <Plates />
    </div>
  )
}
