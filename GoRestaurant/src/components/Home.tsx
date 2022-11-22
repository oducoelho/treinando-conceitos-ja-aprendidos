import { PlusCircle } from "phosphor-react"
import { Header } from "../styles/pages/Home"
import Logo from '../assets/logo.svg'
import { Plates } from "./Plates"

export const Home = () => {
  return (
    <Header>
      <div>
        <img src={Logo} alt="" />
        <button>Novo Prato <PlusCircle /></button>
      </div>
    </Header>
  )
}
